"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  projects,
  skills,
  contactInfo,
  aboutText,
  helpCommands,
} from "@/data/portfolio";
import { BlinkingCursor } from "./BlinkingCursor";
import { CommandLine } from "./CommandLine";
import { CommandOutput } from "./CommandOutput";
import { TerminalFooter } from "./TerminalFooter";
import { TerminalHeader } from "./TerminalHeader";
import { AutoComplete } from "./AutoComplete";
import { LoadingScreen } from "./LoadingScreen";
import { TypingEffect } from "./TypingEffect";
import { useSound } from "@/hooks/useSound";
import { ResumeDialog } from "../components/ResumeDialog";

export interface Command {
  id: string;
  input: string;
  output: React.ReactNode;
  timestamp: Date;
}

export const Terminal: React.FC = () => {
  const [commands, setCommands] = useState<Command[]>([]);
  const [currentInput, setCurrentInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [showLoading, setShowLoading] = useState(true);
  const [showAutoComplete, setShowAutoComplete] = useState(false);
  const [autoCompletePosition, setAutoCompletePosition] = useState({
    top: 0,
    left: 0,
  });
  const [soundEnabled, setSoundEnabled] = useState(true);

  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const inputContainerRef = useRef<HTMLDivElement>(null);

  const {
    playTypingSound,
    playTypewriterSound,
    playTypewriterBell,
    playCommandSound,
    playSuccessSound,
    playErrorSound,
    playHoverSound,
    playClickSound,
  } = useSound();

  useEffect(() => {
    // Focus on input when component mounts
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    // Auto-scroll to bottom when new commands are added
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [commands]);

  const executeCommand = async (input: string) => {
    const trimmedInput = input.trim().toLowerCase();

    if (!trimmedInput) return;

    setIsTyping(true);

    // Add command to history
    const newCommand: Command = {
      id: Date.now().toString(),
      input: input.trim(),
      output: null,
      timestamp: new Date(),
    };

    setCommands((prev) => [...prev, newCommand]);
    setCommandHistory((prev) => [...prev, input.trim()]);
    setCurrentInput("");
    setShowWelcome(false);
    setHistoryIndex(-1);

    // Simulate typing delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Execute command
    let output: React.ReactNode = null;

    switch (trimmedInput) {
      case "help":
        output = (
          <div className="command-output space-y-2">
            <div className="text-green-400 font-semibold text-lg">
              Available commands:
            </div>
            {helpCommands.map((cmd) => (
              <div key={cmd.command} className="flex gap-4 text-base">
                <button
                  onClick={() => {
                    if (soundEnabled) playClickSound();
                    setCurrentInput(cmd.command);
                    // Auto-execute the command
                    setTimeout(() => {
                      executeCommand(cmd.command);
                    }, 100);
                  }}
                  className="text-cyan-400 w-24 font-semibold hover:text-cyan-300 hover:underline cursor-pointer text-left transition-colors"
                >
                  {cmd.command}
                </button>
                <span className="text-gray-300">{cmd.description}</span>
              </div>
            ))}
          </div>
        );
        break;

      case "about":
        output = (
          <div className="command-output">
            <TypingEffect
              text={aboutText}
              speed={30}
              className="whitespace-pre-line text-gray-300 leading-relaxed text-base sm:text-lg"
              playSound={soundEnabled ? playTypewriterSound : undefined}
              playBellSound={soundEnabled ? playTypewriterBell : undefined}
            />
          </div>
        );
        break;

      case "skills":
        output = (
          <div className="command-output space-y-4">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="text-green-400 font-semibold mb-2 text-lg">
                  {skill.category}:
                </div>
                <div className="text-gray-300 flex flex-wrap gap-2">
                  {skill.items.map((item, itemIndex) => (
                    <span
                      key={itemIndex}
                      className="bg-gray-800 px-3 py-2 rounded text-sm border border-gray-700 hover:border-green-400/50 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
        break;

      case "projects":
        output = (
          <div className="command-output space-y-4">
            {projects.map((project) => (
              <div
                key={project.id}
                className="border-l-2 border-green-400 pl-4"
              >
                <div className="text-green-400 font-semibold text-xl mb-2">
                  {project.title}
                  {project.featured && (
                    <span className="text-yellow-400 text-base ml-2">
                      ★ Featured
                    </span>
                  )}
                </div>
                <div className="text-gray-300 mb-3 text-base leading-relaxed">
                  {project.description}
                </div>
                <div className="text-gray-400 text-base mb-3">
                  <span className="text-cyan-400 font-semibold">
                    Tech Stack:
                  </span>{" "}
                  {project.techStack.join(", ")}
                </div>
                <div className="flex gap-4 text-base">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-hover"
                    >
                      GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-hover"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        );
        break;

      case "contact":
        output = (
          <div className="command-output space-y-3">
            <div className="text-green-400 font-semibold mb-4 text-lg">
              Get in touch:
            </div>
            <div className="space-y-2 text-base">
              <div>
                <span className="text-cyan-400">Email:</span>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="link-hover ml-2"
                >
                  {contactInfo.email}
                </a>
              </div>
              <div>
                <span className="text-cyan-400">GitHub:</span>
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-hover ml-2"
                >
                  {contactInfo.github}
                </a>
              </div>
              <div>
                <span className="text-cyan-400">LinkedIn:</span>
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-hover ml-2"
                >
                  {contactInfo.linkedin}
                </a>
              </div>
              {contactInfo.twitter && (
                <div>
                  <span className="text-cyan-400">Twitter:</span>
                  <a
                    href={contactInfo.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-hover ml-2"
                  >
                    {contactInfo.twitter}
                  </a>
                </div>
              )}
            </div>
          </div>
        );
        break;

      case "clear":
        setCommands([]);
        setShowWelcome(true);
        setIsTyping(false);
        return;

      case "whoami":
        output = (
          <div className="command-output">
            <div className="text-gray-300">
              <div className="text-green-400 font-semibold mb-3 text-lg">
                Current User:
              </div>
              <div className="text-base">Full-Stack Developer</div>
              <div className="text-gray-400 text-base mt-2">
                Passionate about creating amazing digital experiences
              </div>
            </div>
          </div>
        );
        break;

      case "date":
        output = (
          <div className="command-output">
            <div className="text-gray-300 text-base">
              {new Date().toLocaleString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                timeZoneName: "short",
              })}
            </div>
          </div>
        );
        break;

      case "ls":
        output = (
          <div className="command-output">
            <div className="text-gray-300 grid grid-cols-2 sm:grid-cols-3 gap-3 text-base">
              {helpCommands.map((cmd) => (
                <button
                  key={cmd.command}
                  onClick={() => {
                    if (soundEnabled) playClickSound();
                    setCurrentInput(cmd.command);
                    // Auto-execute the command
                    setTimeout(() => {
                      executeCommand(cmd.command);
                    }, 100);
                  }}
                  className="text-cyan-400 hover:text-green-400 hover:underline cursor-pointer transition-colors font-semibold text-left"
                >
                  {cmd.command}
                </button>
              ))}
            </div>
          </div>
        );
        break;

      case "resume":
        output = (
          <div className="command-output">
            <div className="text-gray-300">
              <ResumeDialog>
                <span className="link-hover text-xl cursor-pointer">
                  📄 Download Resume
                </span>
              </ResumeDialog>
            </div>
          </div>
        );
        break;

      default:
        if (soundEnabled) playErrorSound();
        output = (
          <div className="command-error text-base">
            Command not found: &quot;{input.trim()}&quot;. Type &apos;help&apos;
            to see available commands.
          </div>
        );
    }

    // Update the command with output
    setCommands((prev) =>
      prev.map((cmd) => (cmd.id === newCommand.id ? { ...cmd, output } : cmd))
    );

    // Play success sound for valid commands
    if (trimmedInput !== "clear" && soundEnabled) {
      setTimeout(() => playSuccessSound(), 200);
    }

    setIsTyping(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !isTyping) {
      if (soundEnabled) playCommandSound();
      executeCommand(currentInput);
      setShowAutoComplete(false);
    } else if (e.key === "ArrowUp" && !isTyping) {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex =
          historyIndex === -1
            ? commandHistory.length - 1
            : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[newIndex]);
        if (soundEnabled) playHoverSound();
      }
    } else if (e.key === "ArrowDown" && !isTyping) {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setCurrentInput("");
        } else {
          setHistoryIndex(newIndex);
          setCurrentInput(commandHistory[newIndex]);
        }
        if (soundEnabled) playHoverSound();
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      setShowAutoComplete(true);
      updateAutoCompletePosition();
      if (soundEnabled) playClickSound();
    } else if (e.key === "Escape") {
      setShowAutoComplete(false);
    } else if (e.key.length === 1) {
      // Regular character input
      if (soundEnabled) playTypingSound();
      setShowAutoComplete(true);
      updateAutoCompletePosition();
    }
  };

  const updateAutoCompletePosition = () => {
    if (inputContainerRef.current) {
      const rect = inputContainerRef.current.getBoundingClientRect();
      setAutoCompletePosition({
        top: rect.bottom,
        left: rect.left,
      });
    }
  };

  const handleAutoCompleteSelect = (command: string) => {
    if (command) {
      setCurrentInput(command);
      setShowAutoComplete(false);
      if (soundEnabled) playSuccessSound();
    } else {
      setShowAutoComplete(false);
    }
  };

  if (showLoading) {
    return <LoadingScreen onComplete={() => setShowLoading(false)} />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-2 sm:p-4 relative">
      <div className="terminal-window rounded-lg w-full max-w-4xl h-[85vh] sm:h-[80vh] flex flex-col overflow-hidden">
        <TerminalHeader />

        <div
          ref={terminalRef}
          className="flex-1 p-3 sm:p-6 overflow-y-auto font-mono text-sm sm:text-base"
        >
          <AnimatePresence>
            {showWelcome && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mb-6"
              >
                <div className="text-green-400 text-xl sm:text-2xl font-semibold mb-2 terminal-glow">
                  Welcome to my Terminal Portfolio!
                </div>
                <div className="text-gray-300 mb-4 text-base sm:text-lg">
                  Type{" "}
                  <button
                    onClick={() => {
                      if (soundEnabled) playClickSound();
                      setCurrentInput("help");
                      setTimeout(() => {
                        executeCommand("help");
                      }, 100);
                    }}
                    className="text-cyan-400 hover:text-cyan-300 hover:underline cursor-pointer transition-colors"
                  >
                    help
                  </button>{" "}
                  to see available commands.
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {commands.map((command) => (
            <motion.div
              key={command.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-4"
            >
              <CommandLine input={command.input} />
              {command.output && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="mt-2"
                >
                  <CommandOutput>{command.output}</CommandOutput>
                </motion.div>
              )}
            </motion.div>
          ))}

          <div className="flex items-center relative" ref={inputContainerRef}>
            <span className="text-green-400 mr-2">$</span>
            <input
              ref={inputRef}
              type="text"
              value={currentInput}
              onChange={(e) => {
                setCurrentInput(e.target.value);
                setShowAutoComplete(true);
                updateAutoCompletePosition();
              }}
              onKeyDown={handleKeyPress}
              onFocus={() => {
                setShowAutoComplete(true);
                updateAutoCompletePosition();
              }}
              onBlur={() => {
                // Delay hiding to allow clicking on autocomplete
                setTimeout(() => setShowAutoComplete(false), 200);
              }}
              className="bg-transparent text-gray-300 outline-none flex-1 font-mono"
              placeholder="Type a command..."
              disabled={isTyping}
            />
            {!isTyping && <BlinkingCursor />}
          </div>
        </div>

        <TerminalFooter />
      </div>

      {/* AutoComplete Component */}
      <AutoComplete
        input={currentInput}
        onSelect={handleAutoCompleteSelect}
        isVisible={showAutoComplete && currentInput.trim().length > 0}
        position={autoCompletePosition}
      />

      {/* Sound Toggle Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        onClick={() => {
          setSoundEnabled(!soundEnabled);
          if (!soundEnabled) playClickSound();
        }}
        className="fixed top-4 right-4 w-12 h-12 bg-gray-800 border border-green-400/30 rounded-full flex items-center justify-center text-green-400 hover:bg-green-400/10 transition-colors z-50"
        title={soundEnabled ? "Disable sound" : "Enable sound"}
      >
        {soundEnabled ? "🔊" : "🔇"}
      </motion.button>
    </div>
  );
};
