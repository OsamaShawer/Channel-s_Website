import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Code2,
  Copy,
  Check,
  Play,
  Sparkles,
  ArrowLeft,
  Video,
} from "lucide-react";
import { defaultShorts } from "./ShortsSection";

// Syntax highlighting function (same as in ShortsSection)
function highlightCode(code: string, language: string): string {
  const colors = {
    tag: "#569cd6",
    classId: "#dcdcaa",
    attribute: "#4ec9b0",
    string: "#ce9178",
    keyword: "#c586c0",
    function: "#dcdcaa",
    property: "#92c5f7",
    number: "#b5cea8",
    default: "#d4d4d4",
  };

  let escaped = code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  if (language === "html") {
    escaped = escaped.replace(
      /(&lt;)(\/?)([\w-]+)([^&]*?)(&gt;)/g,
      (
        _match: string,
        open: string,
        slash: string,
        tag: string,
        attrs: string,
        close: string
      ) => {
        let result = `<span style="color: ${colors.tag}">${open}</span>`;
        if (slash)
          result += `<span style="color: ${colors.tag}">${slash}</span>`;
        result += `<span style="color: ${colors.tag}">${tag}</span>`;

        if (attrs && attrs.trim()) {
          let processedAttrs = attrs;

          processedAttrs = processedAttrs.replace(
            /\s*(class|id)\s*=\s*(&quot;[^&]*?&quot;)/g,
            (_m: string, attrName: string, attrValue: string) => {
              return ` <span style="color: ${colors.attribute}">${attrName}</span><span style="color: ${colors.default}">=</span><span style="color: ${colors.classId}">${attrValue}</span>`;
            }
          );

          processedAttrs = processedAttrs.replace(
            /\s*([\w-]+)\s*=\s*(&quot;[^&]*?&quot;)/g,
            (m: string, attrName: string, attrValue: string) => {
              if (m.includes("span")) return m;
              return ` <span style="color: ${colors.attribute}">${attrName}</span><span style="color: ${colors.default}">=</span><span style="color: ${colors.string}">${attrValue}</span>`;
            }
          );

          processedAttrs = processedAttrs.replace(
            /\s*([\w-]+)\s*=\s*([^\s&]+)/g,
            (m: string, attrName: string, attrValue: string) => {
              if (m.includes("span")) return m;
              return ` <span style="color: ${colors.attribute}">${attrName}</span><span style="color: ${colors.default}">=</span><span style="color: ${colors.string}">${attrValue}</span>`;
            }
          );

          result += processedAttrs;
        }
        result += `<span style="color: ${colors.tag}">${close}</span>`;
        return result;
      }
    );
  } else if (language === "css") {
    const lines = escaped.split("\n");
    const processedLines: string[] = [];

    for (const line of lines) {
      let processedLine = line;

      if (processedLine.includes("span")) {
        processedLines.push(processedLine);
        continue;
      }

      processedLine = processedLine.replace(
        /^([^{]+)(\{)/,
        (_m: string, selector: string, brace: string) => {
          return `<span style="color: ${colors.classId}">${selector}</span><span style="color: ${colors.default}">${brace}</span>`;
        }
      );

      processedLine = processedLine.replace(
        /^\s*([\w-]+)\s*:\s*([^;]+)(;?)$/,
        (_m: string, prop: string, val: string, semi: string) => {
          let processedVal = val.trim();

          // Skip if already processed
          if (processedVal.includes("<span")) {
            return `  <span style="color: ${
              colors.property
            }">${prop}</span><span style="color: ${
              colors.default
            }">:</span> ${processedVal}${
              semi ? `<span style="color: ${colors.default}">;</span>` : ""
            }`;
          }

          let finalVal = "";

          // Find all hex colors and their positions
          const hexMatches: Array<{ start: number; end: number; hex: string }> =
            [];
          const hexPattern = /#[0-9a-fA-F]{3,6}/gi;
          let hexMatch;
          hexPattern.lastIndex = 0;
          while ((hexMatch = hexPattern.exec(processedVal)) !== null) {
            hexMatches.push({
              start: hexMatch.index,
              end: hexMatch.index + hexMatch[0].length,
              hex: hexMatch[0],
            });
          }

          // Helper function to process a text segment without double-wrapping
          const processSegment = (text: string): string => {
            if (!text || text.trim() === "") return text;

            // Find all number matches with their positions
            const numberMatches: Array<{
              start: number;
              end: number;
              value: string;
            }> = [];
            const numberPattern = /(\d+px|\d+%|\d+deg|\d+)/g;
            let numMatch;
            numberPattern.lastIndex = 0;
            while ((numMatch = numberPattern.exec(text)) !== null) {
              numberMatches.push({
                start: numMatch.index,
                end: numMatch.index + numMatch[0].length,
                value: numMatch[0],
              });
            }

            // Build result by processing segments between numbers
            let result = "";
            let lastPos = 0;

            for (const numMatch of numberMatches) {
              // Add text before number
              if (numMatch.start > lastPos) {
                const beforeNum = text.substring(lastPos, numMatch.start);
                if (beforeNum.trim()) {
                  result += `<span style="color: ${colors.string}">${beforeNum}</span>`;
                } else {
                  result += beforeNum; // Preserve whitespace
                }
              }
              // Add highlighted number
              result += `<span style="color: ${colors.number}">${numMatch.value}</span>`;
              lastPos = numMatch.end;
            }

            // Add remaining text after last number
            if (lastPos < text.length) {
              const afterNum = text.substring(lastPos);
              if (afterNum.trim()) {
                result += `<span style="color: ${colors.string}">${afterNum}</span>`;
              } else {
                result += afterNum; // Preserve whitespace
              }
            }

            // If no numbers found, wrap the whole segment
            if (numberMatches.length === 0 && text.trim()) {
              result = `<span style="color: ${colors.string}">${text}</span>`;
            } else if (numberMatches.length === 0) {
              result = text;
            }

            return result;
          };

          // Process segments between hex colors
          let lastPos = 0;
          for (const hexMatch of hexMatches) {
            // Process text before hex color
            if (hexMatch.start > lastPos) {
              const beforeHex = processedVal.substring(lastPos, hexMatch.start);
              finalVal += processSegment(beforeHex);
            }
            // Add hex color with highlighting
            finalVal += `<span style="color: ${colors.number}">${hexMatch.hex}</span>`;
            lastPos = hexMatch.end;
          }

          // Process remaining text after last hex color
          if (lastPos < processedVal.length) {
            const afterHex = processedVal.substring(lastPos);
            finalVal += processSegment(afterHex);
          }

          // If no hex colors were found, process the whole value
          if (hexMatches.length === 0) {
            finalVal = processSegment(processedVal);
          }

          if (!finalVal) {
            finalVal = `<span style="color: ${
              colors.string
            }">${val.trim()}</span>`;
          }

          return `  <span style="color: ${
            colors.property
          }">${prop}</span><span style="color: ${
            colors.default
          }">:</span> ${finalVal}${
            semi ? `<span style="color: ${colors.default}">;</span>` : ""
          }`;
        }
      );

      processedLines.push(processedLine);
    }

    escaped = processedLines.join("\n");
  } else if (language === "javascript") {
    escaped = escaped.replace(
      /(&quot;[^&]*?&quot;|&#x27;[^&]*?&#x27;)/g,
      `<span style="color: ${colors.string}">$1</span>`
    );

    const keywordPattern =
      /\b(const|let|var|function|if|else|return|onclick|onblur|document|querySelector|style|setProperty|true|false|null|undefined|this|new|typeof|instanceof|in|of|try|catch|finally|throw|break|continue|switch|case|default|for|while|do|async|await|class|extends|super|static|import|export|from|as|with|debugger)\b/g;
    escaped = escaped.replace(keywordPattern, (match: string) => {
      if (match.includes("span")) return match;
      return `<span style="color: ${colors.keyword}">${match}</span>`;
    });

    escaped = escaped.replace(/\b(\d+)\b/g, (match: string) => {
      if (match.includes("span")) return match;
      return `<span style="color: ${colors.number}">${match}</span>`;
    });

    escaped = escaped.replace(
      /\b([a-zA-Z_$][\w$]*)(\s*\()/g,
      (match: string, func: string, paren: string) => {
        if (match.includes("span")) return match;

        const keywordList = [
          "const",
          "let",
          "var",
          "function",
          "if",
          "else",
          "return",
          "true",
          "false",
          "null",
          "undefined",
          "this",
          "new",
          "typeof",
          "instanceof",
          "try",
          "catch",
          "finally",
          "throw",
          "break",
          "continue",
          "switch",
          "case",
          "default",
          "for",
          "while",
          "do",
          "async",
          "await",
          "class",
          "extends",
          "super",
          "static",
          "import",
          "export",
          "from",
          "as",
          "with",
          "debugger",
          "in",
          "of",
        ];
        if (keywordList.includes(func)) return match;

        return `<span style="color: ${colors.function}">${func}</span><span style="color: ${colors.default}">${paren}</span>`;
      }
    );

    escaped = escaped.replace(
      /(\.)([\w]+)/g,
      (match: string, dot: string, prop: string) => {
        if (match.includes("span")) return match;
        return `<span style="color: ${colors.default}">${dot}</span><span style="color: ${colors.property}">${prop}</span>`;
      }
    );
  }

  return escaped;
}

function CodeBlock({
  code,
  filename,
  language,
  onCopy,
  copied,
}: {
  code: string;
  filename: string;
  language: string;
  onCopy: () => void;
  copied: boolean;
}) {
  return (
    <div className="relative group">
      <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-100">
        <button
          onClick={onCopy}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/90 hover:bg-slate-700/90 backdrop-blur border border-white/10 text-slate-300 hover:text-white transition-all duration-100 text-xs shadow-lg"
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-emerald-400" />
              <span className="text-emerald-300">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <div className="rounded-xl bg-[#1e1e1e] border border-white/10 overflow-hidden shadow-2xl">
        <div className="flex items-center gap-2 px-4 py-2 bg-[#252526] border-b border-white/5">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
          </div>
          <div className="flex-1 text-center">
            <span className="text-xs text-slate-300 font-medium">
              {filename}
            </span>
          </div>
        </div>
        <pre className="overflow-x-auto p-6 text-sm leading-relaxed font-mono scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent bg-[#1e1e1e]">
          <code
            className={`language-${language} text-[#d4d4d4] whitespace-pre`}
            dangerouslySetInnerHTML={{ __html: highlightCode(code, language) }}
          />
        </pre>
      </div>
    </div>
  );
}

function ResultDisplay({ result }: { result: string | React.ReactNode }) {
  return (
    <div className="rounded-xl bg-gradient-to-br from-slate-800/90 via-slate-800/90 to-slate-900/90 border border-white/10 p-4 sm:p-6 min-h-[100px] flex items-center justify-center relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: "20px 20px",
        }}
      />
      <div className="relative z-10 w-full h-full">
        {typeof result === "string" ? (
          <div className="text-slate-200 font-mono text-sm whitespace-pre-wrap break-words">
            {result}
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center overflow-auto">
            {result}
          </div>
        )}
      </div>
    </div>
  );
}

export function ShortDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const short = defaultShorts.find((s) => s.id === parseInt(id || "0"));

  if (!short) {
    return (
      <main className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
        <section className="relative px-6 pb-32 sm:px-8 lg:px-12 pt-32">
          <div className="mx-auto max-w-7xl text-center">
            <h1 className="text-3xl font-bold mb-4">Short Not Found</h1>
            <button
              onClick={() => navigate("/")}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-violet-500/20 hover:bg-violet-500/30 border border-violet-500/30 text-violet-300 transition-all duration-100"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </button>
          </div>
        </section>
      </main>
    );
  }

  const handleCopy = async (fileId: string, code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedId(fileId);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
      <section className="relative px-6 pb-32 sm:px-8 lg:px-12 pt-32">
        <div className="mx-auto max-w-7xl">
          {/* Back Button */}
          <button
            onClick={() => navigate("/")}
            className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-lg glass-card backdrop-blur border border-white/10 hover:border-white/20 text-slate-300 hover:text-white transition-all duration-100"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Shorts</span>
          </button>

          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-3 rounded-full glass-card px-6 py-3 backdrop-blur shadow-professional mb-6">
              <Sparkles className="h-5 w-5 text-violet-400" />
              <span className="text-sm font-medium text-slate-200">
                Code Short
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              {short.title}
            </h1>
            {short.description && (
              <p className="text-lg text-slate-300 font-light leading-relaxed max-w-4xl">
                {short.description}
              </p>
            )}
          </div>

          {/* Code and Result Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Code Blocks */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
                <Code2 className="h-5 w-5" />
                <span className="text-base font-medium">Code</span>
              </div>
              <div className="space-y-4">
                {short.codeFiles.map((file, index) => {
                  const fileId = `${short.id}-${index}`;
                  return (
                    <CodeBlock
                      key={fileId}
                      code={file.code}
                      filename={file.filename}
                      language={file.language}
                      onCopy={() => handleCopy(fileId, file.code)}
                      copied={copiedId === fileId}
                    />
                  );
                })}
              </div>
            </div>

            {/* Result Display */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
                <Play className="h-5 w-5" />
                <span className="text-base font-medium">Result</span>
              </div>
              <ResultDisplay result={short.result} />
            </div>
          </div>

          {/* Video Section */}
          {short.videoUrl && (
            <div>
              <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
                <Video className="h-5 w-5" />
                <span className="text-base font-medium">Video Tutorial</span>
              </div>
              <div className="rounded-xl glass-card p-4 backdrop-blur border border-white/10 overflow-hidden">
                <div className="flex justify-center">
                  <div
                    className="relative w-full max-w-md"
                    style={{ paddingBottom: "177.78%" }}
                  >
                    <iframe
                      src={short.videoUrl.replace(
                        "youtube.com/shorts/",
                        "youtube.com/embed/"
                      )}
                      className="absolute top-0 left-0 w-full h-full rounded-lg"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={short.title}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
