"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { helpCommands } from "@/data/portfolio";

interface AutoCompleteProps {
  input: string;
  onSelect: (command: string) => void;
  isVisible: boolean;
  position: { top: number; left: number };
}

export const AutoComplete: React.FC<AutoCompleteProps> = ({
  input,
  onSelect,
  isVisible,
  position,
}) => {
  const [filteredCommands, setFilteredCommands] = useState(helpCommands);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (input.trim()) {
      const filtered = helpCommands.filter((cmd) =>
        cmd.command.toLowerCase().startsWith(input.toLowerCase())
      );
      setFilteredCommands(filtered);
      setSelectedIndex(0);
    } else {
      setFilteredCommands(helpCommands);
      setSelectedIndex(0);
    }
  }, [input]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isVisible) return;

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setSelectedIndex((prev) =>
            prev < filteredCommands.length - 1 ? prev + 1 : 0
          );
          break;
        case "ArrowUp":
          e.preventDefault();
          setSelectedIndex((prev) =>
            prev > 0 ? prev - 1 : filteredCommands.length - 1
          );
          break;
        case "Enter":
          e.preventDefault();
          if (filteredCommands[selectedIndex]) {
            onSelect(filteredCommands[selectedIndex].command);
          }
          break;
        case "Escape":
          e.preventDefault();
          onSelect("");
          break;
      }
    },
    [isVisible, selectedIndex, filteredCommands, onSelect]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isVisible, selectedIndex, filteredCommands, handleKeyDown]);

  if (!isVisible || filteredCommands.length === 0) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -10, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -10, scale: 0.95 }}
        transition={{ duration: 0.15 }}
        className="absolute z-50 bg-gray-900 border border-green-400/30 rounded-lg shadow-2xl max-w-md w-full"
        style={{
          top: position.top + 30,
          left: position.left,
        }}
      >
        <div className="p-2">
          <div className="text-xs text-gray-400 mb-2 px-2">
            {filteredCommands.length} command
            {filteredCommands.length !== 1 ? "s" : ""} found
          </div>
          <div className="max-h-48 overflow-y-auto">
            {filteredCommands.map((cmd, index) => (
              <motion.div
                key={cmd.command}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`px-3 py-2 cursor-pointer rounded transition-all duration-150 ${
                  index === selectedIndex
                    ? "bg-green-400/20 text-green-400 border-l-2 border-green-400"
                    : "text-gray-300 hover:bg-gray-800/50"
                }`}
                onClick={() => onSelect(cmd.command)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-cyan-400 font-mono text-sm">
                      {cmd.command}
                    </span>
                    <span className="text-gray-500 text-xs">
                      {cmd.description}
                    </span>
                  </div>
                  {index === selectedIndex && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-2 h-2 bg-green-400 rounded-full"
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-xs text-gray-500 px-2 py-1 border-t border-gray-700 mt-2">
            ↑/↓ to navigate • Enter to select • Esc to close
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
