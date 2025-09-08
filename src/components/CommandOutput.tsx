"use client";

import React from "react";

interface CommandOutputProps {
  children: React.ReactNode;
}

export const CommandOutput: React.FC<CommandOutputProps> = ({ children }) => {
  return <div className="ml-4">{children}</div>;
};

