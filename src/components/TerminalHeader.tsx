"use client";

import React from "react";

export const TerminalHeader: React.FC = () => {
  return (
    <div className="terminal-header px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="terminal-button terminal-button-red"></div>
        <div className="terminal-button terminal-button-yellow"></div>
        <div className="terminal-button terminal-button-green"></div>
      </div>
      <div className="text-gray-400 text-sm font-mono"></div>
      <div className="w-16"></div> {/* Spacer for centering */}
    </div>
  );
};
