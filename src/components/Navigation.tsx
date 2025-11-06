import { useNavigate, useLocation } from "react-router-dom";
import { Home, Code2, BookOpen, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Frontend", path: "/roadmap/frontend", icon: Code2 },
    { name: "Python", path: "/roadmap/python", icon: BookOpen },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-3 text-white font-bold text-xl transition-all duration-100"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-400 to-violet-400 flex items-center justify-center">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            TC Cousins
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-100 ${
                  isActive(item.path)
                    ? "bg-white/10 text-white border border-white/20"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl text-white hover:bg-white/10 transition-colors duration-100"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-100 ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-2 border-t border-white/10">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => {
                  navigate(item.path);
                  setIsOpen(false);
                }}
                className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl text-left font-medium transition-all duration-100 ${
                  isActive(item.path)
                    ? "bg-white/10 text-white border border-white/20"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
