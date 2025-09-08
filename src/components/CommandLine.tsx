"use client";

import React from "react";

interface CommandLineProps {
  input: string;
}

export const CommandLine: React.FC<CommandLineProps> = ({ input }) => {
  return (
    <div className="flex items-center">
      <span className="text-green-400 mr-2">$</span>
      <span className="text-gray-300">{input}</span>
    </div>
  );
};

