"use client";

import React from "react";

export const TerminalFooter: React.FC = () => {
  return (
    <div className="border-t border-green-400/20 px-4 py-2 text-xs text-gray-500 font-mono">
      <div className="flex justify-between items-center">
        <div>Terminal Portfolio v1.0.0</div>
        <div className="flex gap-4 text-xs">
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
          <span className="text-cyan-400">🔊 Sound enabled</span>
        </div>
      </div>
    </div>
  );
};
