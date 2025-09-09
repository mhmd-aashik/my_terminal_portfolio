"use client";

import React from "react";

interface TerminalFooterProps {
  onClear?: () => void;
  soundEnabled?: boolean;
}

export const TerminalFooter: React.FC<TerminalFooterProps> = ({
  onClear,
  soundEnabled = true,
}) => {
  return (
    <div className="border-t border-green-400/20 px-4 py-2 text-xs text-gray-500 font-mono">
      <div className="flex justify-between items-center">
        <div>Mohammed Aashik v1.0.0</div>
        <div className="flex gap-4 text-xs items-center">
          <span>
            <kbd className="px-1 py-0.5 bg-gray-800 rounded text-green-400">
              ↑/↓
            </kbd>{" "}
            history
          </span>
          <span>
            <kbd className="px-1 py-0.5 bg-gray-800 rounded text-green-400">
              Tab
            </kbd>{" "}
            autocomplete
          </span>
          <span>
            <kbd className="px-1 py-0.5 bg-gray-800 rounded text-green-400">
              Esc
            </kbd>{" "}
            close
          </span>
          {onClear && (
            <button
              onClick={onClear}
              className="px-2 py-1 bg-gray-800 border border-gray-600 rounded text-green-400 hover:border-green-400/50 hover:bg-gray-700 transition-colors"
              title="Clear terminal"
            >
              Clear
            </button>
          )}
          <span className="text-cyan-400">
            {soundEnabled ? "🔊 Sound enabled" : "🔇 Sound disabled"}
          </span>
        </div>
      </div>
    </div>
  );
};
