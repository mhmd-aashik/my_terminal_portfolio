"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypingEffectProps {
  text: string;
  speed?: number;
  onComplete?: () => void;
  className?: string;
  showCursor?: boolean;
  playSound?: () => void;
  playBellSound?: () => void;
}

export const TypingEffect: React.FC<TypingEffectProps> = ({
  text,
  speed = 50,
  onComplete,
  className = "",
  showCursor = true,
  playSound,
  playBellSound,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);

        // Play typewriter sound for each character (except spaces)
        if (text[currentIndex] !== " " && playSound) {
          playSound();
        }

        // Play bell sound when reaching end of line (approximately every 60 characters)
        if (currentIndex > 0 && currentIndex % 60 === 0 && playBellSound) {
          playBellSound();
        }
      }, speed);

      return () => clearTimeout(timeout);
    } else if (isTyping) {
      setIsTyping(false);
      onComplete?.();
    }
  }, [
    currentIndex,
    text,
    speed,
    onComplete,
    isTyping,
    playSound,
    playBellSound,
  ]);

  return (
    <span className={className}>
      {displayedText}
      {showCursor && isTyping && (
        <motion.span
          className="inline-block w-0.5 h-4 bg-green-400 ml-1"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        />
      )}
    </span>
  );
};
