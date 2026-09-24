import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle({ className = '', variant = 'navbar' }) {
  const { theme, toggleTheme, isDark } = useTheme();

  if (variant === 'dock') {
    return (
      <button
        onClick={toggleTheme}
        aria-label={isDark ? "Ganti ke Mode Terang" : "Ganti ke Mode Gelap"}
        title={isDark ? "Mode Terang (Light)" : "Mode Gelap (Dark)"}
        className={`relative group p-2.5 rounded-full transition-all duration-300 ${
          isDark 
            ? 'text-amber-300 hover:text-amber-200 hover:bg-amber-400/20 hover:scale-110' 
            : 'text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 hover:scale-110'
        } ${className}`}
      >
        {isDark ? (
          <Sun className="w-4 h-4 transition-transform duration-500 rotate-0 hover:rotate-90 text-amber-300" />
        ) : (
          <Moon className="w-4 h-4 transition-transform duration-500 -rotate-12 hover:rotate-12 text-indigo-600" />
        )}
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Beralih ke Mode Terang" : "Beralih ke Mode Gelap"}
      title={isDark ? "Aktifkan Mode Terang" : "Aktifkan Mode Gelap"}
      className={`relative p-2 rounded-full border transition-all duration-300 flex items-center justify-center group ${
        isDark
          ? 'bg-white/5 border-white/15 text-slate-300 hover:text-amber-300 hover:border-amber-300/40 hover:bg-amber-400/10'
          : 'bg-slate-100 border-slate-300 text-slate-700 hover:text-indigo-600 hover:border-indigo-400/40 hover:bg-indigo-50 shadow-sm'
      } ${className}`}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-4 h-4 text-amber-300 transition-all duration-500 rotate-0 group-hover:rotate-90 group-hover:scale-110" />
        ) : (
          <Moon className="w-4 h-4 text-indigo-600 transition-all duration-500 -rotate-12 group-hover:rotate-12 group-hover:scale-110" />
        )}
      </div>
    </button>
  );
}
