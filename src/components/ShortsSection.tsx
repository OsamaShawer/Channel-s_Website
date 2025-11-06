import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Code2, Play, Sparkles } from "lucide-react";

type CodeFile = {
  filename: string;
  code: string;
  language: string;
};

type Short = {
  id: number;
  title: string;
  description?: string;
  codeFiles: CodeFile[];
  result: string | React.ReactNode;
  videoUrl?: string;
};

type ShortsSectionProps = {
  shorts?: Short[];
};

// Export defaultShorts so it can be used in ShortDetail
export { defaultShorts };

// Animated Border Component - Exact replica of the original HTML/CSS
export function AnimatedBorderDemo() {
  useEffect(() => {
    const styleId = "animated-border-styles";

    // Inject @property rule and styles into document head if not already present
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.textContent = `
        @property --angle {
          syntax: "<angle>";
          initial-value: 0deg;
          inherits: false;
        }
        .animated-border-wrapper {
          position: relative;
          display: inline-block;
          padding: 3px;
          border-radius: 10px;
          background-image: conic-gradient(from var(--angle, 0deg), red, green, yellow, purple, #ff5533, brown, blue);
          animation: spin-border 3s linear infinite;
        }
        .animated-border-box {
          position: relative;
          background-color: #222d51;
          border-radius: 7px;
        }
        @keyframes spin-border {
          from {
            --angle: 0deg;
          }
          to {
            --angle: 360deg;
          }
        }
        /* Fallback: rotate the entire gradient for browsers without @property */
        @supports not (background: conic-gradient(from 0deg, red, blue)) {
          .animated-border-wrapper {
            background-image: conic-gradient(red, green, yellow, purple, #ff5533, brown, blue);
            animation: spin-border-rotate 3s linear infinite;
          }
        }
        @keyframes spin-border-rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: "500px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        backgroundColor: "#0b1020",
        borderRadius: "8px",
      }}
    >
      <div className="animated-border-wrapper">
        <div
          className="animated-border-box"
          style={{
            textAlign: "center",
            width: "300px",
            padding: "100px 20px",
            fontSize: "50px",
            color: "white",
            fontWeight: "bold",
            fontFamily: "Arial, Helvetica, sans-serif",
          }}
        >
          Hello
        </div>
      </div>
    </div>
  );
}

// Support Contact Card Component - Exact replica of the original HTML/CSS/JS
export function SupportContactDemo() {
  const [rotate, setRotate] = useState(false);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css";
    link.integrity =
      "sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==";
    link.crossOrigin = "anonymous";
    link.referrerPolicy = "no-referrer";
    if (!document.querySelector('link[href*="font-awesome"]')) {
      document.head.appendChild(link);
    }
  }, []);

  const handleClick = () => {
    setRotate(!rotate);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: "500px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        backgroundColor: "#f5f5f5",
        borderRadius: "8px",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <div
        style={{
          margin: "auto",
          width: "300px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <div
          className="support-card"
          onClick={handleClick}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            cursor: "pointer",
            padding: "10px",
            borderRadius: "8px",
            transition: "background-color 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
          }}
        >
          <i className="fa-solid fa-user" style={{ fontSize: "20px" }}></i>
          <h2
            style={{
              margin: 0,
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            Support{" "}
            <i
              className="fa-solid fa-arrow-right"
              style={{
                transform: rotate ? "rotate(90deg)" : "rotate(0)",
                transition: "transform 0.3s ease",
              }}
            ></i>
          </h2>
        </div>
        <div
          className="data-card"
          style={{
            display: rotate ? "flex" : "none",
            flexDirection: "column",
            gap: "15px",
            opacity: rotate ? 1 : 0,
            transform: rotate ? "translateY(20px)" : "translateY(1px)",
            transition: "opacity 0.3s ease, transform 0.3s ease",
            padding: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <i className="fa-solid fa-phone" style={{ fontSize: "18px" }}></i>
            <h2 style={{ margin: 0, fontSize: "18px" }}>+ 0942154163</h2>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <i
              className="fa-solid fa-envelope"
              style={{ fontSize: "18px" }}
            ></i>
            <h2 className="email" style={{ margin: 0, fontSize: "18px" }}>
              o.ss@gmail.com
            </h2>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <i
              className="fa-solid fa-circle-user"
              style={{ fontSize: "18px" }}
            ></i>
            <h2 style={{ margin: 0, fontSize: "18px" }}>TC Cousins</h2>
          </div>
        </div>
      </div>
      <div
        className="transfer"
        style={{
          position: "absolute",
          bottom: "20px",
          fontSize: "14px",
          color: "#666",
        }}
      >
        Facebook
      </div>
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          marginLeft: "80px",
          fontSize: "14px",
          color: "#0066cc",
          textDecoration: "none",
        }}
      >
        Facebook
      </a>
    </div>
  );
}

// Loading Animation Component - Exact replica of the original HTML/CSS/JS
export function LoadingDemo() {
  const [loadingText, setLoadingText] = useState("Loading");

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingText((prev) => {
        const newText = prev + ".";
        if (newText.slice(newText.length - 4) === "....") {
          return "Loading";
        }
        return newText;
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: "600px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        backgroundColor: "#1d1d1d",
        borderRadius: "8px",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <div
        style={{
          width: "400px",
          height: "500px",
          backgroundColor: "#3f3f3f",
          border: "3px solid #08a6df",
          position: "relative",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxShadow: "0 0 20px #08a6df",
        }}
      >
        <div
          id="loading"
          style={{
            color: "#08a6df",
            fontSize: "40px",
            fontWeight: "bold",
            marginTop: "40px",
          }}
        >
          {loadingText}
        </div>
        <div
          className="circle-loading"
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: "#3f3f3f",
            marginTop: "200px",
            borderRadius: "50%",
            border: "14px solid #1d1d1d",
            borderLeftColor: "#08a6df",
          }}
        />
      </div>
      <style>{`
        .circle-loading {
          animation: spin-loading linear infinite 0.7s;
        }
        @keyframes spin-loading {
          from {
            transform: rotate(0);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @media (max-width: 767px) {
          .container-loading {
            width: 300px !important;
            height: 400px !important;
          }
        }
      `}</style>
    </div>
  );
}

// 2 Faces Flip Component - Exact replica of the original HTML/CSS
export function TwoFacesFlipDemo() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: "500px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        backgroundColor: "#f5f5f5",
        borderRadius: "8px",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <div
        style={{
          margin: "40px auto",
          width: "200px",
          perspective: "600px",
        }}
      >
        <div
          className="box-flip"
          style={{
            position: "relative",
            width: "200px",
            height: "200px",
            transformStyle: "preserve-3d",
            transition: "1s transform ease",
            cursor: "pointer",
            transformOrigin: "right center",
            boxShadow: "0 0 5px",
          }}
        >
          <div
            className="face-flip front-flip"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
              fontSize: "30px",
              color: "white",
              backfaceVisibility: "hidden",
              backgroundColor: "red",
            }}
          >
            Front
          </div>
          <div
            className="face-flip back-flip"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
              fontSize: "30px",
              color: "white",
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              backgroundColor: "green",
            }}
          >
            Back
          </div>
        </div>
      </div>
      <style>{`
        .box-flip:hover {
          transform: translateX(-100%) rotateY(180deg);
        }
        @media (max-width: 767px) {
          .box-flip {
            width: 150px !important;
            height: 150px !important;
          }
        }
      `}</style>
    </div>
  );
}

// Calculator Component - Exact replica of the original HTML/CSS/JS
export function CalculatorDemo() {
  const [display, setDisplay] = useState("0");
  const [justCalculated, setJustCalculated] = useState(false);
  const [lastAnswer, setLastAnswer] = useState<number | null>(null);
  const [history, setHistory] = useState<
    Array<{ operation: string; answer: string }>
  >([]);

  useEffect(() => {
    // Load history from localStorage on mount
    const loadedHistory: Array<{ operation: string; answer: string }> = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key) {
        const value = localStorage.getItem(key);
        if (value) {
          loadedHistory.push({ operation: key, answer: value });
        }
      }
    }
    setHistory(loadedHistory);
  }, []);

  const addToDisplay = (value: string) => {
    if (!display || display === "0" || justCalculated) {
      setDisplay(value);
      setJustCalculated(false);
    } else {
      setDisplay(display + value);
    }
  };

  const calculate = () => {
    try {
      const result = eval(display);
      const resultStr = String(result);
      localStorage.setItem(display, resultStr);
      setDisplay(resultStr);
      setLastAnswer(result);
      setJustCalculated(true);
      // Update history
      setHistory((prev) => [
        ...prev,
        { operation: display, answer: resultStr },
      ]);
    } catch (error) {
      setDisplay("Error");
    }
  };

  const deleteOne = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay("0");
    }
  };

  const deleteAll = () => {
    setDisplay("0");
  };

  const addLastAnswer = () => {
    if (lastAnswer !== null) {
      if (justCalculated) {
        setDisplay(String(lastAnswer));
        setJustCalculated(false);
      } else {
        setDisplay(display + String(lastAnswer));
      }
    }
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: "600px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        backgroundColor: "#2a323d",
        borderRadius: "8px",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      {/* History Panel */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "5%",
          transform: "translateY(-50%)",
          width: "250px",
          height: "480px",
          backgroundColor: "rgba(58, 68, 79, 0.9)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(0, 0, 0, 0.6)",
          borderRadius: "10px",
          boxShadow:
            "-4px -4px 8px rgba(255, 255, 255, 0.05), 4px 4px 8px rgba(0, 0, 0, 0.6)",
          overflowY: "auto",
          color: "#cfd8dc",
          padding: "15px",
          fontSize: "14px",
        }}
      >
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th
                style={{
                  textAlign: "left",
                  paddingBottom: "10px",
                  fontWeight: "bold",
                  fontSize: "15px",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                Operation
              </th>
              <th
                style={{
                  textAlign: "left",
                  paddingBottom: "10px",
                  fontWeight: "bold",
                  fontSize: "15px",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                Answer
              </th>
            </tr>
          </thead>
          <tbody>
            {history.map((item, index) => (
              <tr
                key={index}
                style={{
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(255, 255, 255, 0.85)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                <td
                  style={{
                    padding: "6px 0",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.85)",
                    color: "#00ff66",
                  }}
                >
                  {item.operation}
                </td>
                <td
                  style={{
                    padding: "6px 0",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.85)",
                    color: "#fff",
                    textAlign: "right",
                  }}
                >
                  {item.answer}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Calculator Container */}
      <div
        style={{
          display: "flex",
          position: "relative",
          flexDirection: "column",
          backgroundImage: "linear-gradient(to right, #23292a)",
          gap: "10px",
          justifyContent: "space-between",
          padding: "10px",
          borderRadius: "10px",
          border: "1px solid white",
        }}
      >
        {/* Display */}
        <div
          style={{
            color: "white",
            padding: "10px 0 10px 5px",
            minHeight: "30px",
            fontSize: "20px",
          }}
        >
          {display}
        </div>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "space-between",
          }}
        >
          <button
            onClick={deleteAll}
            style={{
              backgroundColor: "#435058",
              boxShadow:
                "-4px -4px 8px rgba(255, 255, 255, 0.1), 4px 4px 8px rgba(0, 0, 0, 0.6)",
              padding: "10px",
              width: "30px",
              borderRadius: "50%",
              color: "#00ff66",
              border: "none",
              transition: "0.3s ease",
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "-4px -4px 8px rgba(255, 255, 255, 0.15), 4px 4px 8px rgba(0, 0, 0, 0.7), 0 0 8px rgba(0, 255, 100, 0.4)";
              e.currentTarget.style.color = "#7fff99";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                "-4px -4px 8px rgba(255, 255, 255, 0.1), 4px 4px 8px rgba(0, 0, 0, 0.6)";
              e.currentTarget.style.color = "#00ff66";
            }}
          >
            C
          </button>
          <button
            onClick={deleteOne}
            style={{
              backgroundColor: "#435058",
              boxShadow:
                "-4px -4px 8px rgba(255, 255, 255, 0.1), 4px 4px 8px rgba(0, 0, 0, 0.6)",
              padding: "10px",
              width: "30px",
              borderRadius: "50%",
              color: "#00ff66",
              border: "none",
              transition: "0.3s ease",
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "-4px -4px 8px rgba(255, 255, 255, 0.15), 4px 4px 8px rgba(0, 0, 0, 0.7), 0 0 8px rgba(0, 255, 100, 0.4)";
              e.currentTarget.style.color = "#7fff99";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                "-4px -4px 8px rgba(255, 255, 255, 0.1), 4px 4px 8px rgba(0, 0, 0, 0.6)";
              e.currentTarget.style.color = "#00ff66";
            }}
          >
            DEL
          </button>
          <button
            onClick={addLastAnswer}
            style={{
              backgroundColor: "#435058",
              boxShadow:
                "-4px -4px 8px rgba(255, 255, 255, 0.1), 4px 4px 8px rgba(0, 0, 0, 0.6)",
              padding: "10px",
              width: "30px",
              borderRadius: "50%",
              color: "#00ff66",
              border: "none",
              transition: "0.3s ease",
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "-4px -4px 8px rgba(255, 255, 255, 0.15), 4px 4px 8px rgba(0, 0, 0, 0.7), 0 0 8px rgba(0, 255, 100, 0.4)";
              e.currentTarget.style.color = "#7fff99";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                "-4px -4px 8px rgba(255, 255, 255, 0.1), 4px 4px 8px rgba(0, 0, 0, 0.6)";
              e.currentTarget.style.color = "#00ff66";
            }}
          >
            ANS
          </button>
          <button
            onClick={() => addToDisplay("/")}
            style={{
              backgroundColor: "#435058",
              boxShadow:
                "-4px -4px 8px rgba(255, 255, 255, 0.1), 4px 4px 8px rgba(0, 0, 0, 0.6)",
              padding: "10px",
              width: "30px",
              borderRadius: "50%",
              color: "#00ff66",
              border: "none",
              transition: "0.3s ease",
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "-4px -4px 8px rgba(255, 255, 255, 0.15), 4px 4px 8px rgba(0, 0, 0, 0.7), 0 0 8px rgba(0, 255, 100, 0.4)";
              e.currentTarget.style.color = "#7fff99";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                "-4px -4px 8px rgba(255, 255, 255, 0.1), 4px 4px 8px rgba(0, 0, 0, 0.6)";
              e.currentTarget.style.color = "#00ff66";
            }}
          >
            /
          </button>
        </div>

        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "space-between",
          }}
        >
          {["7", "8", "9"].map((num) => (
            <button
              key={num}
              onClick={() => addToDisplay(num)}
              style={{
                backgroundColor: "#435058",
                boxShadow:
                  "-4px -4px 8px rgba(255, 255, 255, 0.1), 4px 4px 8px rgba(0, 0, 0, 0.6)",
                padding: "10px",
                width: "30px",
                borderRadius: "50%",
                color: "white",
                border: "none",
                transition: "0.3s ease",
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "-4px -4px 8px rgba(255, 255, 255, 0.15), 4px 4px 8px rgba(0, 0, 0, 0.7), 0 0 8px rgba(0, 255, 100, 0.4)";
                e.currentTarget.style.color = "#7fff99";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "-4px -4px 8px rgba(255, 255, 255, 0.1), 4px 4px 8px rgba(0, 0, 0, 0.6)";
                e.currentTarget.style.color = "white";
              }}
            >
              {num}
            </button>
          ))}
          <button
            onClick={() => addToDisplay("*")}
            style={{
              backgroundColor: "#435058",
              boxShadow:
                "-4px -4px 8px rgba(255, 255, 255, 0.1), 4px 4px 8px rgba(0, 0, 0, 0.6)",
              padding: "10px",
              width: "30px",
              borderRadius: "50%",
              color: "#00ff66",
              border: "none",
              transition: "0.3s ease",
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "-4px -4px 8px rgba(255, 255, 255, 0.15), 4px 4px 8px rgba(0, 0, 0, 0.7), 0 0 8px rgba(0, 255, 100, 0.4)";
              e.currentTarget.style.color = "#7fff99";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                "-4px -4px 8px rgba(255, 255, 255, 0.1), 4px 4px 8px rgba(0, 0, 0, 0.6)";
              e.currentTarget.style.color = "#00ff66";
            }}
          >
            *
          </button>
        </div>

        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "space-between",
          }}
        >
          {["4", "5", "6"].map((num) => (
            <button
              key={num}
              onClick={() => addToDisplay(num)}
              style={{
                backgroundColor: "#435058",
                boxShadow:
                  "-4px -4px 8px rgba(255, 255, 255, 0.1), 4px 4px 8px rgba(0, 0, 0, 0.6)",
                padding: "10px",
                width: "30px",
                borderRadius: "50%",
                color: "white",
                border: "none",
                transition: "0.3s ease",
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "-4px -4px 8px rgba(255, 255, 255, 0.15), 4px 4px 8px rgba(0, 0, 0, 0.7), 0 0 8px rgba(0, 255, 100, 0.4)";
                e.currentTarget.style.color = "#7fff99";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "-4px -4px 8px rgba(255, 255, 255, 0.1), 4px 4px 8px rgba(0, 0, 0, 0.6)";
                e.currentTarget.style.color = "white";
              }}
            >
              {num}
            </button>
          ))}
          <button
            onClick={() => addToDisplay("-")}
            style={{
              backgroundColor: "#435058",
              boxShadow:
                "-4px -4px 8px rgba(255, 255, 255, 0.1), 4px 4px 8px rgba(0, 0, 0, 0.6)",
              padding: "10px",
              width: "30px",
              borderRadius: "50%",
              color: "#00ff66",
              border: "none",
              transition: "0.3s ease",
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "-4px -4px 8px rgba(255, 255, 255, 0.15), 4px 4px 8px rgba(0, 0, 0, 0.7), 0 0 8px rgba(0, 255, 100, 0.4)";
              e.currentTarget.style.color = "#7fff99";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                "-4px -4px 8px rgba(255, 255, 255, 0.1), 4px 4px 8px rgba(0, 0, 0, 0.6)";
              e.currentTarget.style.color = "#00ff66";
            }}
          >
            -
          </button>
        </div>

        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "space-between",
          }}
        >
          {["1", "2", "3"].map((num) => (
            <button
              key={num}
              onClick={() => addToDisplay(num)}
              style={{
                backgroundColor: "#435058",
                boxShadow:
                  "-4px -4px 8px rgba(255, 255, 255, 0.1), 4px 4px 8px rgba(0, 0, 0, 0.6)",
                padding: "10px",
                width: "30px",
                borderRadius: "50%",
                color: "white",
                border: "none",
                transition: "0.3s ease",
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "-4px -4px 8px rgba(255, 255, 255, 0.15), 4px 4px 8px rgba(0, 0, 0, 0.7), 0 0 8px rgba(0, 255, 100, 0.4)";
                e.currentTarget.style.color = "#7fff99";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "-4px -4px 8px rgba(255, 255, 255, 0.1), 4px 4px 8px rgba(0, 0, 0, 0.6)";
                e.currentTarget.style.color = "white";
              }}
            >
              {num}
            </button>
          ))}
          <button
            onClick={() => addToDisplay("+")}
            style={{
              backgroundColor: "#435058",
              boxShadow:
                "-4px -4px 8px rgba(255, 255, 255, 0.1), 4px 4px 8px rgba(0, 0, 0, 0.6)",
              padding: "10px",
              width: "30px",
              borderRadius: "50%",
              color: "#00ff66",
              border: "none",
              transition: "0.3s ease",
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "-4px -4px 8px rgba(255, 255, 255, 0.15), 4px 4px 8px rgba(0, 0, 0, 0.7), 0 0 8px rgba(0, 255, 100, 0.4)";
              e.currentTarget.style.color = "#7fff99";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                "-4px -4px 8px rgba(255, 255, 255, 0.1), 4px 4px 8px rgba(0, 0, 0, 0.6)";
              e.currentTarget.style.color = "#00ff66";
            }}
          >
            +
          </button>
        </div>

        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "space-between",
          }}
        >
          <button
            onClick={() => addToDisplay("0")}
            style={{
              backgroundColor: "#435058",
              boxShadow:
                "-4px -4px 8px rgba(255, 255, 255, 0.1), 4px 4px 8px rgba(0, 0, 0, 0.6)",
              padding: "10px",
              width: "50%",
              borderRadius: "10px",
              color: "white",
              border: "none",
              transition: "0.3s ease",
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "-4px -4px 8px rgba(255, 255, 255, 0.15), 4px 4px 8px rgba(0, 0, 0, 0.7), 0 0 8px rgba(0, 255, 100, 0.4)";
              e.currentTarget.style.color = "#7fff99";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                "-4px -4px 8px rgba(255, 255, 255, 0.1), 4px 4px 8px rgba(0, 0, 0, 0.6)";
              e.currentTarget.style.color = "white";
            }}
          >
            0
          </button>
          <button
            onClick={() => addToDisplay(".")}
            style={{
              backgroundColor: "#435058",
              boxShadow:
                "-4px -4px 8px rgba(255, 255, 255, 0.1), 4px 4px 8px rgba(0, 0, 0, 0.6)",
              padding: "10px",
              width: "30px",
              borderRadius: "50%",
              color: "white",
              border: "none",
              transition: "0.3s ease",
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "-4px -4px 8px rgba(255, 255, 255, 0.15), 4px 4px 8px rgba(0, 0, 0, 0.7), 0 0 8px rgba(0, 255, 100, 0.4)";
              e.currentTarget.style.color = "#7fff99";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                "-4px -4px 8px rgba(255, 255, 255, 0.1), 4px 4px 8px rgba(0, 0, 0, 0.6)";
              e.currentTarget.style.color = "white";
            }}
          >
            .
          </button>
          <button
            onClick={calculate}
            style={{
              backgroundColor: "#435058",
              boxShadow:
                "-4px -4px 8px rgba(255, 255, 255, 0.1), 4px 4px 8px rgba(0, 0, 0, 0.6)",
              padding: "10px",
              width: "30px",
              borderRadius: "50%",
              color: "white",
              border: "none",
              transition: "0.3s ease",
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "-4px -4px 8px rgba(255, 255, 255, 0.15), 4px 4px 8px rgba(0, 0, 0, 0.7), 0 0 8px rgba(0, 255, 100, 0.4)";
              e.currentTarget.style.color = "#7fff99";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                "-4px -4px 8px rgba(255, 255, 255, 0.1), 4px 4px 8px rgba(0, 0, 0, 0.6)";
              e.currentTarget.style.color = "white";
            }}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

// Random Color Generator Component - Exact replica of the original HTML/CSS/JS
export function RandomColorDemo() {
  const [color, setColor] = useState("#FFFFFF");
  const [bgColor, setBgColor] = useState("#FFFFFF");

  const handleRandomize = () => {
    let colorLet = "#";
    for (let i = 0; i < 6; i++) {
      let numberToAdd = Math.floor(Math.random() * 10);
      colorLet += numberToAdd;
    }
    setColor(colorLet);
    setBgColor(colorLet);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: "500px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        backgroundColor: bgColor,
        borderRadius: "8px",
        transition: "background-color 0.3s ease",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
          padding: "10px",
          border: "10px",
          display: "flex",
          gap: "10px",
          alignItems: "center",
          flexDirection: "column",
          borderRadius: "6px",
          boxShadow: "0 0 10px",
        }}
      >
        <div
          id="color"
          style={{
            fontFamily: "Arial, Helvetica, sans-serif",
            color: color,
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          {color}
        </div>
        <button
          onClick={handleRandomize}
          style={{
            padding: "10px 15px",
            backgroundColor: "#ff5f7f",
            border: "none",
            cursor: "pointer",
            borderRadius: "10px",
            color: "white",
            fontSize: "14px",
            fontWeight: "500",
          }}
        >
          Randomise Color
        </button>
      </div>
    </div>
  );
}

// 3D Button Component - Exact replica of the original HTML/CSS
export function ThreeDButtonDemo() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: "500px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        backgroundColor: "#242424",
        borderRadius: "8px",
        perspective: "1000px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transformStyle: "preserve-3d",
        }}
      >
        <div
          className="box-card-3d"
          style={{
            width: "200px",
            height: "200px",
            position: "relative",
            transformStyle: "preserve-3d",
            transition: "transform 1s ease",
            cursor: "pointer",
          }}
        >
          <div
            className="face-3d front-3d"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "1.5rem",
              fontWeight: "bold",
              backfaceVisibility: "visible",
              borderRadius: "12px",
              backgroundImage: "linear-gradient(145deg, #2a2a2a, #383838)",
              border: "2px solid #646cff",
              transition: "all ease 0.3s",
              overflow: "hidden",
              transform: "translateZ(100px)",
            }}
          >
            Hover Me
          </div>
          <div
            className="face-3d back-3d"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "1.5rem",
              fontWeight: "bold",
              backfaceVisibility: "visible",
              borderRadius: "12px",
              backgroundImage: "linear-gradient(145deg, #2a2a2a, #383838)",
              border: "2px solid #00bcd4",
              transition: "all ease 0.3s",
              overflow: "hidden",
              transform: "translateZ(-100px) rotateY(100deg)",
            }}
          >
            Back
          </div>
          <div
            className="face-3d right-3d"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "1.5rem",
              fontWeight: "bold",
              backfaceVisibility: "visible",
              borderRadius: "12px",
              backgroundImage: "linear-gradient(145deg, #2a2a2a, #383838)",
              border: "2px solid #4caf50",
              transition: "all ease 0.3s",
              overflow: "hidden",
              transform: "translateX(100px) rotateY(90deg)",
            }}
          >
            Right
          </div>
          <div
            className="face-3d left-3d"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "1.5rem",
              fontWeight: "bold",
              backfaceVisibility: "visible",
              borderRadius: "12px",
              backgroundImage: "linear-gradient(145deg, #2a2a2a, #383838)",
              border: "2px solid #ffc107",
              transition: "all ease 0.3s",
              overflow: "hidden",
              transform: "translateX(-100px) rotateY(-90deg)",
            }}
          >
            Left
          </div>
          <div
            className="face-3d top-3d"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "1.5rem",
              fontWeight: "bold",
              backfaceVisibility: "visible",
              borderRadius: "12px",
              backgroundImage: "linear-gradient(145deg, #2a2a2a, #383838)",
              border: "2px solid #ff4081",
              transition: "all ease 0.3s",
              overflow: "hidden",
              transform: "translateY(-100px) rotateX(90deg)",
            }}
          >
            Top
          </div>
          <div
            className="face-3d bottom-3d"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "1.5rem",
              fontWeight: "bold",
              backfaceVisibility: "visible",
              borderRadius: "12px",
              backgroundImage: "linear-gradient(145deg, #2a2a2a, #383838)",
              border: "2px solid #9c27b0",
              transition: "all ease 0.3s",
              overflow: "hidden",
              transform: "translateY(100px) rotateX(-90deg)",
            }}
          >
            Bottom
          </div>
        </div>
      </div>
      <style>{`
        .box-card-3d:hover {
          animation: rotate3d-anim 8s linear infinite;
        }
        .face-3d::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          top: -100%;
          left: -100%;
          transition: all 0.5s ease;
          transform: translateZ(20px);
        }
        .face-3d::after {
          content: "";
          position: absolute;
          inset: 0;
          background-image: linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.05), transparent 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .face-3d:hover::before {
          top: 100%;
          left: 100%;
        }
        .face-3d:hover::after {
          opacity: 1;
        }
        @keyframes rotate3d-anim {
          0% {
            transform: rotateX(0) rotateY(0);
          }
          25% {
            transform: rotateX(90deg) rotateY(90deg);
          }
          50% {
            transform: rotateX(180deg) rotateY(180deg);
          }
          75% {
            transform: rotateX(270deg) rotateY(270deg);
          }
          100% {
            transform: rotateX(360deg) rotateY(360deg);
          }
        }
        @media (max-width: 767px) {
          .box-card-3d {
            width: 150px !important;
            height: 150px !important;
          }
          .front-3d {
            transform: translateZ(75px) !important;
          }
          .back-3d {
            transform: translateZ(-75px) rotateY(100deg) !important;
          }
          .right-3d {
            transform: translateX(75px) rotateY(90deg) !important;
          }
          .left-3d {
            transform: translateX(-75px) rotateY(-90deg) !important;
          }
          .top-3d {
            transform: translateY(-75px) rotateX(90deg) !important;
          }
          .bottom-3d {
            transform: translateY(75px) rotateX(-90deg) !important;
          }
        }
      `}</style>
    </div>
  );
}

// Login Form Component - Exact replica of the original HTML/CSS/JS
export function LoginFormDemo() {
  const [fontSize1, setFontSize1] = useState("13px");
  const [fontSize2, setFontSize2] = useState("13px");
  const [topSize1, setTopSize1] = useState("8px");
  const [topSize2, setTopSize2] = useState("8px");
  const [borderColor1, setBorderColor1] = useState("#536573");
  const [borderColor2, setBorderColor2] = useState("#536573");
  const input1Ref = useRef<HTMLInputElement>(null);
  const input2Ref = useRef<HTMLInputElement>(null);

  const handleInput1Click = () => {
    if (input1Ref.current && !input1Ref.current.value) {
      setTopSize1("-7px");
      setFontSize1("11px");
      setBorderColor1("#0BA6DF");
    }
  };

  const handleInput1Blur = () => {
    if (input1Ref.current && !input1Ref.current.value) {
      setTopSize1("8px");
      setFontSize1("13px");
      setBorderColor1("#536573");
    }
  };

  const handleInput2Click = () => {
    if (input2Ref.current && !input2Ref.current.value) {
      setTopSize2("-9px");
      setFontSize2("11px");
      setBorderColor2("#0BA6DF");
    }
  };

  const handleInput2Blur = () => {
    if (input2Ref.current && !input2Ref.current.value) {
      setTopSize2("8px");
      setFontSize2("13px");
      setBorderColor2("#536573");
    }
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: "400px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        backgroundColor: "#35e6fe",
        borderRadius: "8px",
      }}
    >
      <div
        style={{
          display: "flex",
          borderRadius: "10px",
          position: "relative",
          width: "100%",
          maxWidth: "700px",
          height: "280px",
          overflow: "hidden",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          style={{
            height: "100%",
            backgroundColor: "#536573",
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "50%",
            color: "white",
            fontSize: "14px",
          }}
        >
          <span>Image Placeholder</span>
        </div>
        <div
          style={{
            backgroundColor: "white",
            height: "100%",
            width: "50%",
            padding: "40px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            gap: "25px",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
            }}
          >
            <div
              style={{
                position: "absolute",
                color: "#ccc",
                top: topSize1,
                fontSize: fontSize1,
                zIndex: 1000,
                transition: "ease 0.15s top, ease 0.15s font-size",
                pointerEvents: "none",
              }}
            >
              Username
            </div>
            <input
              ref={input1Ref}
              type="text"
              id="username"
              onClick={handleInput1Click}
              onBlur={handleInput1Blur}
              onChange={(e) => {
                if (e.target.value) {
                  setTopSize1("-7px");
                  setFontSize1("11px");
                  setBorderColor1("#0BA6DF");
                } else {
                  setTopSize1("8px");
                  setFontSize1("13px");
                  setBorderColor1("#536573");
                }
              }}
              style={{
                border: "none",
                borderBottom: `2px solid ${borderColor1}`,
                outline: "none",
                padding: "10px",
                paddingLeft: "0",
                width: "100%",
                background: "transparent",
                transition: "border-color 0.15s ease",
              }}
            />
          </div>
          <div
            style={{
              position: "relative",
              width: "100%",
            }}
          >
            <div
              style={{
                position: "absolute",
                color: "#ccc",
                top: topSize2,
                fontSize: fontSize2,
                zIndex: 1000,
                transition: "ease 0.15s top, ease 0.15s font-size",
                pointerEvents: "none",
              }}
            >
              Password
            </div>
            <input
              ref={input2Ref}
              type="password"
              id="password"
              onClick={handleInput2Click}
              onBlur={handleInput2Blur}
              onChange={(e) => {
                if (e.target.value) {
                  setTopSize2("-9px");
                  setFontSize2("11px");
                  setBorderColor2("#0BA6DF");
                } else {
                  setTopSize2("8px");
                  setFontSize2("13px");
                  setBorderColor2("#536573");
                }
              }}
              style={{
                border: "none",
                borderBottom: `2px solid ${borderColor2}`,
                outline: "none",
                padding: "10px",
                paddingLeft: "0",
                width: "100%",
                background: "transparent",
                transition: "border-color 0.15s ease",
              }}
            />
          </div>
          <button
            style={{
              background: "#536573",
              color: "white",
              padding: "15px 20px",
              width: "200px",
              cursor: "pointer",
              margin: "auto",
              borderRadius: "16px",
              border: "none",
            }}
          >
            Login
          </button>
          <div
            style={{
              color: "#536573",
              margin: "auto",
            }}
          >
            Need Acount? | Register
          </div>
        </div>
      </div>
    </div>
  );
}

// Default example shorts - you can easily add more here
const defaultShorts: Short[] = [
  {
    id: 1,
    title: "Login Form with Floating Labels",
    description:
      "A beautiful login form with animated floating labels using CSS variables and JavaScript",
    codeFiles: [
      {
        filename: "index.html",
        language: "html",
        code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Login Form</title>
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <div class="container">
      <div class="image">
        <img src="./image.png" alt="" />
      </div>
      <div class="form">
        <div class="input1">
          <input type="text" id="username" />
        </div>
        <div class="input2">
          <input type="password" id="password" />
        </div>
        <button>Login</button>
        <div class="text">Need Acount? | Register</div>
      </div>
    </div>
    <script src="./main.js"></script>
  </body>
</html>`,
      },
      {
        filename: "styles.css",
        language: "css",
        code: `* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
  background-color: #35e6fe;
  --font-size1: 13px;
  --font-size2: 13px;
  --top-size1: 8px;
  --top-size2: 8px;
}

.container {
  display: flex;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 700px;
  height: 280px;
  overflow: hidden;
}

.container .image {
  height: 100%;
  background-color: #536573;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  width: 50%;
}

input {
  border: none;
  border-bottom: 2px solid #536573;
  outline: none;
  padding: 10px;
  padding-left: 0;
  width: 100%;
}

.input1,
.input2 {
  position: relative;
  width: 100%;
}

.input1::before,
.input2::before {
  position: absolute;
  color: #ccc;
  transition: ease .15s top;
  z-index: 1000;
}

.input1::before {
  content: "Username";
  top: var(--top-size1);
  font-size: var(--font-size1);
}

.input2::before {
  content: "Password";
  top: var(--top-size2);
  font-size: var(--font-size2);
}

.container .form {
  background-color: white;
  height: 100%;
  width: 50%;
  padding: 40px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 25px;
}

button {
  background-color: #536573;
  color: white;
  padding: 15px 20px;
  width: 200px;
  cursor: pointer;
  margin: auto;
  border-radius: 16px;
  border: none;
}

.text {
  color: #536573;
  margin: auto;
}`,
      },
      {
        filename: "main.js",
        language: "javascript",
        code: `const body = document.body.style;
const input1 = document.querySelector(".input1 input");
const input2 = document.querySelector(".input2 input");

input1.onclick = () => {
  if (!input1.value) {
    body.setProperty("--top-size1", "-7px");
    body.setProperty("--font-size1", "11px");
    input1.style.borderBottomColor = "#0BA6DF";
  }
}

input1.onblur = () => {
  if (!input1.value) {
    body.setProperty("--top-size1", "8px");
    body.setProperty("--font-size1", "13px");
    input1.style.borderBottomColor = "#536573";
  }
}

input2.onclick = () => {
  if (!input2.value) {
    body.setProperty("--top-size2", "-9px");
    body.setProperty("--font-size2", "11px");
    input2.style.borderBottomColor = "#0BA6DF";
  }
}

input2.onblur = () => {
  if (!input2.value) {
    body.setProperty("--top-size2", "8px");
    body.setProperty("--font-size2", "13px");
    input2.style.borderBottomColor = "#536573";
  }
}`,
      },
    ],
    result: <LoginFormDemo />,
    videoUrl: "https://www.youtube.com/shorts/lVZ4SBDynv8",
  },
  {
    id: 2,
    title: "3D Rotating Button",
    description:
      "An interactive 3D cube button that rotates on hover with smooth animations and gradient effects",
    codeFiles: [
      {
        filename: "index.html",
        language: "html",
        code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>TC Cousins | 3D Button</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>

    <div class="container">
      <div class="box-card">
        <div class="face front">Hover Me</div>
        <div class="face back">Back</div>
        <div class="face right">Right</div>
        <div class="face left">Left</div>
        <div class="face top">Top</div>
        <div class="face bottom">Bottom</div>
      </div>
    </div>
  </body>
</html>`,
      },
      {
        filename: "style.css",
        language: "css",
        code: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #242424;
  color: #FFF;
  font-family: Arial, Helvetica, sans-serif;
  perspective: 1000px;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
}
.box-card {
  width: 200px;
  height: 200px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 1s ease;
  cursor: pointer;
}
.box-card:hover {
  animation: rotate3d 8s linear infinite;
}
.face {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  backface-visibility: visible;
  border-radius: 12px;
  background-image: linear-gradient(145deg, #2a2a2a, #383838);
  border: 2px solid #646cff;
  transition: all ease 0.3s;
  overflow: hidden;
}
.face::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(45deg,
  transparent,
  rgba(255, 255, 255, 0.1),
  transparent);
  top: -100%;
  left: -100%;
  transition: all 0.5s ease;
  transform: translateZ(20px);
}
.face::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image: linear-gradient(
    135deg,
    transparent 0%,
    rgba(255, 255, 255, 0.05),
    transparent 100%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
}
.face:hover::before {
  top: 100%;
  left: 100%;
}

.face:hover::after {
  opacity: 1;
}
.front {
  transform: translateZ(100px);
  border-color: #646cff;
}
.back {
  transform: translateZ(-100px) rotateY(100deg);
  border-color: #00bcd4;
}
.right {
  transform: translateX(100px) rotateY(90deg);
  border-color: #4caf50;
}
.left {
  transform: translateX(-100px) rotateY(-90deg);
  border-color: #ffc107;
}
.top {
  transform: translateY(-100px) rotateX(90deg);
  border-color: #ff4081;
}
.bottom {
  transform: translateY(100px) rotateX(-90deg);
  border-color: #9c27b0;
}
@keyframes rotate3d {
  0% {
    transform: rotateX(0) rotateY(0);
  }
  25% {
    transform: rotateX(90deg) rotateY(90deg);
  }
  50% {
    transform: rotateX(180deg) rotateY(180deg);
  }
  75% {
    transform: rotateX(270deg) rotateY(270deg);
  }
  100% {
    transform: rotateX(360deg) rotateY(360deg);
  }
}

@media (max-width: 767px) {
  .box-card {
    width: 150px;
    height: 150px;
  }
  .front {
    transform: translateZ(75px);
  }
  .back {
    transform: translateZ(-75px);
  }
  .right {
    transform: translateX(75px) rotateY(90deg);
  }
  .left {
    transform: translateX(-75px) rotateY(-90deg);
  }
  .top {
    transform: translateY(-75px) rotateX(90deg);
  }
  .bottom {
    transform: translateY(75px) rotate(-90deg);
  }
}`,
      },
    ],
    result: <ThreeDButtonDemo />,
    videoUrl: "https://www.youtube.com/shorts/XqOVr20yriU",
  },
  {
    id: 3,
    title: "Animated Rotating Border",
    description:
      "A beautiful animated border effect using CSS custom properties and conic-gradient that creates a rotating rainbow border",
    codeFiles: [
      {
        filename: "index.html",
        language: "html",
        code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Animated</title>
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <div>Hello</div>
  </body>
</html>`,
      },
      {
        filename: "styles.css",
        language: "css",
        code: `body {
  background-color: #0b1020;
  min-height: 100vh;
  align-content: center;
}
div {
  text-align: center;
  width: 300px;
  margin: auto;
  padding: 100px 20px;
  font-size: 50px;
  color: white;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 10px;
  background-color: #222d51;
  position: relative;
}
@property --angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}
div::before {
  content:"";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background-image: conic-gradient(from var(--angle), red, green, yellow, purple, #ff5533, brown, blue);
  z-index: -1;
  padding: 3px;
  animation: 3s linear infinite spin;
  border-radius: 10px;
}
@keyframes spin {
  from {
    --angle: 0deg;
  }
  to {
    --angle: 360deg;
  } 
}`,
      },
    ],
    result: <AnimatedBorderDemo />,
    videoUrl: "https://www.youtube.com/shorts/WLTrZ6gVjqc",
  },
  {
    id: 4,
    title: "Random Color Generator",
    description:
      "A simple color generator that randomizes the background color and displays the hex code when you click the button",
    codeFiles: [
      {
        filename: "index.html",
        language: "html",
        code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>TC Cousins | Body Background Color</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="container">
      <div id="color">#FFFFFF</div>
      <button>Randomise Color</button>
    </div>
    <script src="./main.js"></script>
  </body>
</html>`,
      },
      {
        filename: "style.css",
        language: "css",
        code: `.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 10px;
  border: 10px;
  display: flex;
  gap: 10px;
  align-items: center;
  flex-direction: column;
  border-radius: 6px;
  box-shadow: 0 0 10px;
}
button {
  padding: 10px 15px;
  background-color: #ff5f7f;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  color: white;
}
#color {
  font-family: Arial, Helvetica, sans-serif;
}`,
      },
      {
        filename: "main.js",
        language: "javascript",
        code: `let colorDiv = document.getElementById("color");
let colorLet = "#";
const button = document.querySelector("button");
button.onclick = () => {
  colorLet = "#";
  for (let i = 0; i < 6; i++) {
    let numberToAdd = Math.floor(Math.random() * 10);
    colorLet += numberToAdd;
  }
  document.body.style.backgroundColor = colorLet;
  colorDiv.style.color = colorLet;
  colorDiv.innerHTML = colorLet;
}`,
      },
    ],
    result: <RandomColorDemo />,
    videoUrl: "https://www.youtube.com/shorts/ULFakt-arrs",
  },
  {
    id: 5,
    title: "Calculator",
    description:
      "A fully functional calculator with history tracking, answer recall, and localStorage persistence for previous calculations",
    codeFiles: [
      {
        filename: "index.html",
        language: "html",
        code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Calculator</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
      integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <div class="history">
      <table>
        <thead>
          <tr>
            <th>Operation</th>
            <th>Answer</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
    <div class="container">
      <div class="display">0</div>
      <div>
        <button onclick="deleteAll()">C</button>
        <button onclick="deleteOne()">DEL</button>
        <button class="answer">ANS</button>
        <button onclick="addToDisplay(this)" class="text-green">/</button>
      </div>
      <div>
        <button onclick="addToDisplay(this)">7</button>
        <button onclick="addToDisplay(this)">8</button>
        <button onclick="addToDisplay(this)">9</button>
        <button onclick="addToDisplay(this)" class="text-green">*</button>
      </div>
      <div>
        <button onclick="addToDisplay(this)">4</button>
        <button onclick="addToDisplay(this)">5</button>
        <button onclick="addToDisplay(this)">6</button>
        <button onclick="addToDisplay(this)" class="text-green">-</button>
      </div>
      <div>
        <button onclick="addToDisplay(this)">1</button>
        <button onclick="addToDisplay(this)">2</button>
        <button onclick="addToDisplay(this)">3</button>
        <button onclick="addToDisplay(this)" class="text-green">+</button>
      </div>
      <div>
        <button
          onclick="addToDisplay(this)"
          style="width: 50%; border-radius: 10px"
        >
          0
        </button>
        <button onclick="addToDisplay(this)">.</button>
        <button onclick="calculate()">=</button>
      </div>
    </div>
    <script src="./main.js"></script>
  </body>
</html>`,
      },
      {
        filename: "styles.css",
        language: "css",
        code: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  background-color: #2a323d;
}
.container {
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
  background-image: linear-gradient(to right, #23292a);
  gap: 10px;
  justify-content: space-between;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid white;
}
.container div:nth-child(2) button {
  color: #00ff66;
}
.container .text-green {
  color: #00ff66;
}
.container div button {
  background-color: #435058;
  box-shadow: -4px -4px 8px rgba(255, 255, 255, 0.1),
    4px 4px 8px rgba(0, 0, 0, 0.6);
  padding: 10px;
  width: 30px;
  border-radius: 50%;
  color: white;
  border: none;
  transition: .3s ease;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container div button:hover {
  box-shadow: -4px -4px 8px rgba(255, 255, 255, 0.15),
    4px 4px 8px rgba(0, 0, 0, 0.7), 0 0 8px rgba(0, 255, 100, 0.4);
  color: #7fff99
}
.container div {
  display: flex;
  gap: 10px;
  justify-content: space-between;
}
.display {
  color: white;
  padding: 10px 0 10px 5px;
}
.history {
  position: absolute;
  top: 50%;
  left: 5%;
  transform: translateY(-50%);
  width: 250px;
  height: 480px;
  background-color: rgba(58, 68, 79, 0.9);
  backdrop-filter:blur(8px);
  border: 1px solid rgba(0, 0, 0, 0.6);
  border-radius: 10px;
    box-shadow: -4px -4px 8px rgba(255, 255, 255, 0.05),
    4px 4px 8px rgba(0, 0, 0, 0.6);
  overflow-y: auto;
  color: #cfd8dc;
  padding: 15px;
  font-size: 14px;
}
.history::-webkit-scrollbar {
  width: 6px;
}
.history::-webkit-scrollbar-thumb {
  background-color: rgba(0, 255, 100, 0.4);
  border-radius: 10px;
}
.history::-webkit-scrollbar-track {
  background-color: rgba(255, 255, 255, 0.85);
}
.history table {
  width: 100%;
  border-collapse: collapse;
}
.history thead th {
  text-align: left;
  padding-bottom: 10px;
  font-weight: bold;
  font-size: 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

}
.history tbody td {
  padding: 6px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.85);
}
.history td:first-child {
  color: #00ff66;
}
.history td:last-child {
  color: #fff;
  text-align: right;
}

.history tr:hover {
  background-color: rgba(255, 255, 255, 0.85);
  transition: background-color .3s ease;
}

@media (max-width: 900px) {
  .history {
    position: static;
    transform: none;
    width: 100%;
    height: 200px;
    margin-bottom: 10px;
  }
}`,
      },
      {
        filename: "main.js",
        language: "javascript",
        code: `let display = document.querySelector(".display");
let justCalculated = false;
const answerButton = document.querySelector(".answer");
let history = document.querySelector(".history tbody");
let lastAnswer;
onload = () => {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    history.innerHTML += \`
      <tr>
        <td>\${key}</td>
        <td>\${value}</td>
      </tr>
    \`;
  }
};
function addToDisplay(data) {
  if (!display.innerHTML || display.innerHTML === "0" || justCalculated) {
    display.innerHTML = "";
    justCalculated = false;
  }
  display.innerHTML += data.innerHTML;
}
function calculate() {
  localStorage.setItem(display.innerHTML, eval(display.innerHTML));
  display.innerHTML = eval(display.innerHTML);
  lastAnswer = eval(display.innerHTML);
  justCalculated = true;
}
function deleteOne() {
  let arrayOfNumbers = display.innerHTML.split("");
  arrayOfNumbers[arrayOfNumbers.length - 1] = "";
  display.innerHTML = arrayOfNumbers.join("");
}
function addLastAnswerToDisplay() {
  if (justCalculated) {
    display.innerHTML = "";
    justCalculated = false;
  }
  display.innerHTML += lastAnswer;
}
answerButton.onclick = addLastAnswerToDisplay;
function deleteAll() {
  display.innerHTML = "";
}`,
      },
    ],
    result: <CalculatorDemo />,
    videoUrl: "https://www.youtube.com/shorts/1dwam6OSipU",
  },
  {
    id: 6,
    title: "2 Faces Flip",
    description:
      "A 3D flip card effect with two faces that rotates on hover, creating a smooth 3D transformation using CSS transforms and perspective",
    codeFiles: [
      {
        filename: "index.html",
        language: "html",
        code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>TC Cousins | 2 Faces Flip</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <div class="container">
      <div class="box">
        <div class="face front">Front</div>
        <div class="face back">Back</div>
      </div>
    </div>
  </body>
</html>`,
      },
      {
        filename: "style.css",
        language: "css",
        code: `* {
  margin: 0;
  box-sizing: border-box;
}
body {
  font-family: Arial, Helvetica, sans-serif;
}
.container {
  margin: 40px auto;
  width: 200px;
  perspective: 600px;
}
.box {
  position: relative;
  width: 200px;
  height: 200px;
  transform-style: preserve-3d;
  transition: 1s transform ease;
  cursor: pointer;
  transform-origin: right center;
  box-shadow: 0 0 5px;
}
.box:hover {
  transform: translateX(-100%) rotateY(180deg);
}
.box .face {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 30px;
  color: white;
  backface-visibility: hidden;
}
.box .front {
  background-color: red;
}
.box .back {
  transform: rotateY(180deg);
  background-color: green;
}`,
      },
    ],
    result: <TwoFacesFlipDemo />,
    videoUrl: "https://www.youtube.com/shorts/-FKvt9Is5h0",
  },
  {
    id: 7,
    title: "Loading Animation",
    description:
      "A loading animation with animated dots and a spinning circle, creating a smooth loading indicator effect",
    codeFiles: [
      {
        filename: "index.html",
        language: "html",
        code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>TC Cousins | Loading</title>
    <link rel="stylesheet" href="./style.css">
  </head>
  <body>
    <div class="container">
      <div id="loading">Loading</div>
      <div class="circle"></div>
    </div>
    <script src="./main.js"></script>
  </body>
</html>`,
      },
      {
        filename: "style.css",
        language: "css",
        code: `body {
  background-color: #1d1d1d;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  padding: 0;
}
.container {
  width: 400px;
  height: 500px;
  background-color: #3f3f3f;
  border: 3px solid #08a6df;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 20px #08a6df;
}
.container #loading {
  color: #08a6df;
  font-size: 40px;
  font-weight: bold;
  margin-top: 40px;
}

.container .circle {
  width: 50px;
  height: 50px;
  background-color: #3f3f3f;
  margin-top: 200px;
  border-radius: 50%;
  border: 14px solid #1d1d1d;
  border-left-color: #08a6df;
  animation: linear infinite spin;
  animation-duration: .7s;
}
@keyframes spin {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}`,
      },
      {
        filename: "main.js",
        language: "javascript",
        code: `let loading = document.getElementById("loading");

setInterval(() => {
  loading.innerHTML += ".";
  if (loading.innerHTML.slice(loading.innerHTML.length - 4) === "....") {
    loading.innerHTML = "Loading";
  }
}, 500);`,
      },
    ],
    result: <LoadingDemo />,
    videoUrl: "https://www.youtube.com/shorts/RzH-YVqVMnY",
  },
  {
    id: 8,
    title: "Support Contact Card",
    description:
      "An expandable contact card with smooth animations, showing support information that toggles on click with a rotating arrow icon",
    codeFiles: [
      {
        filename: "index.html",
        language: "html",
        code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>TC Cousins</title>
  </head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
    integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
  <link rel="stylesheet" href="./styles.css" />
  <body>
    <div>
      <div class="support">
        <i class="fa-solid fa-user"></i>
        <h2>Support <i class="fa-solid fa-arrow-right"></i></h2>
      </div>
      <div class="data">
        <div class="phone-number">
          <i class="fa-solid fa-phone"></i>
          <h2>+ 0942154163</h2>
        </div>
        <div class="email-field">
          <i class="fa-solid fa-envelope"></i>
          <h2 class="email">o.ss@gmail.com</h2>
        </div>
        <div class="username-field">
          <i class="fa-solid fa-circle-user"></i>
          <h2>TC Cousins</h2>
        </div>
      </div>
    </div>
    <div class="transfer">Facebook</div>
    <a href="https://facebook.com">Facebook</a>
    <script src="./main.js"></script>
  </body>
</html>`,
      },
      {
        filename: "styles.css",
        language: "css",
        code: `* {
  box-sizing: border-box;
}
body {
  font-family: Arial, Helvetica, sans-serif;
}
body > div {
  margin: auto;
  width: 300px;
  display: flex;
  justify-content: space-between;
}`,
      },
      {
        filename: "main.js",
        language: "javascript",
        code: `const toBeClicked = document.querySelector(".support");
const data = document.querySelector(".data");
let rotate = false;
const transferDiv = document.querySelector(".transfer");

data.style.display = rotate ? "flex" : "none";

toBeClicked.onclick = () => {
  rotate = !rotate;
  document.querySelector(".support h2 i").style.transform = rotate ? "rotate(90deg)" : "rotate(0)";
  data.style.display = rotate ? "flex" : "none";
  data.style.cssText = rotate ? "opacity: 1; transform: translateY(20px)" : "opacity: 0; transform: translateY(1px)";
}`,
      },
    ],
    result: <SupportContactDemo />,
    videoUrl: "https://www.youtube.com/shorts/ceOVKIfSGbM",
  },
];

export function ShortsSection({ shorts = defaultShorts }: ShortsSectionProps) {
  const navigate = useNavigate();

  return (
    <section className="relative px-6 pb-32 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-3 rounded-full glass-card px-6 py-3 backdrop-blur shadow-professional mb-6">
            <Sparkles className="h-5 w-5 text-violet-400" />
            <span className="text-sm font-medium text-slate-200">
              Code Shorts
            </span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl gradient-text">
            Shorts Section
          </h2>
          <p className="mx-auto mt-6 max-w-4xl text-lg text-slate-300 font-light leading-relaxed">
            Click on any card to view the code and result. Explore quick code
            snippets and see their outputs in action.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {shorts.map((short) => (
            <article
              key={short.id}
              onClick={() => navigate(`/shorts/${short.id}`)}
              className="group relative rounded-2xl glass-card p-6 shadow-professional-lg backdrop-blur border border-white/10 hover:border-white/20 transition-all duration-100 cursor-pointer aspect-square flex flex-col overflow-hidden"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  navigate(`/shorts/${short.id}`);
                }
              }}
              aria-label={`View ${short.title} code and result`}
            >
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-fuchsia-500/10 to-sky-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-100" />

              <div className="relative z-10 flex flex-col h-full">
                {/* Icon and file count */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 ring-1 ring-inset ring-violet-400/20 group-hover:ring-violet-400/40 transition-all duration-100">
                    <Code2 className="h-6 w-6 text-violet-300" />
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full bg-violet-500/10 px-2.5 py-1 border border-violet-500/20">
                    <span className="text-xs font-medium text-violet-300">
                      {short.codeFiles.length}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-violet-200 transition-colors duration-100">
                  {short.title}
                </h3>

                {/* Description */}
                {short.description && (
                  <p className="text-sm text-slate-400 leading-relaxed line-clamp-3 flex-1 mb-4">
                    {short.description}
                  </p>
                )}

                {/* Preview indicator */}
                <div className="mt-auto flex items-center gap-2 text-xs text-violet-300/70 group-hover:text-violet-300 transition-colors duration-100">
                  <Play className="h-3.5 w-3.5" />
                  <span>View Code & Result</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Decorative blob */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-gradient-to-br from-violet-500/15 via-fuchsia-500/15 to-sky-500/15 blur-3xl" />
      </div>
    </section>
  );
}
