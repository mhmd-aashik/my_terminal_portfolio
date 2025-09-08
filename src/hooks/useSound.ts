"use client";

import { useCallback, useRef } from "react";

interface SoundOptions {
  frequency?: number;
  duration?: number;
  type?: OscillatorType;
  volume?: number;
}

export const useSound = () => {
  const audioContextRef = useRef<AudioContext | null>(null);

  const initAudioContext = useCallback(() => {
    if (typeof window === "undefined") return null;
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext)();
    }
    return audioContextRef.current;
  }, []);

  const playBeep = useCallback(
    (options: SoundOptions = {}) => {
      const {
        frequency = 800,
        duration = 100,
        type = "sine",
        volume = 0.1,
      } = options;

      try {
        const audioContext = initAudioContext();
        if (!audioContext) return;

        if (audioContext.state === "suspended") {
          audioContext.resume();
        }

        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.frequency.setValueAtTime(
          frequency,
          audioContext.currentTime
        );
        oscillator.type = type;

        gainNode.gain.setValueAtTime(0, audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(
          volume,
          audioContext.currentTime + 0.01
        );
        gainNode.gain.exponentialRampToValueAtTime(
          0.001,
          audioContext.currentTime + duration / 1000
        );

        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + duration / 1000);
      } catch (error) {
        console.warn("Audio not supported:", error);
      }
    },
    [initAudioContext]
  );

  const playTypingSound = useCallback(() => {
    playBeep({ frequency: 1200, duration: 50, volume: 0.05 });
  }, [playBeep]);

  const playTypewriterSound = useCallback(() => {
    // No sound
  }, []);

  const playCommandSound = useCallback(() => {
    playBeep({ frequency: 1000, duration: 80, volume: 0.08 });
  }, [playBeep]);

  const playSuccessSound = useCallback(() => {
    // Play a pleasant success chord
    const frequencies = [523, 659, 784]; // C, E, G
    frequencies.forEach((freq, index) => {
      setTimeout(() => {
        playBeep({ frequency: freq, duration: 200, volume: 0.06 });
      }, index * 50);
    });
  }, [playBeep]);

  const playErrorSound = useCallback(() => {
    playBeep({ frequency: 300, duration: 200, volume: 0.1, type: "sawtooth" });
  }, [playBeep]);

  const playHoverSound = useCallback(() => {
    playBeep({ frequency: 1500, duration: 30, volume: 0.03 });
  }, [playBeep]);

  const playClickSound = useCallback(() => {
    playBeep({ frequency: 800, duration: 60, volume: 0.05 });
  }, [playBeep]);

  const playTypewriterBell = useCallback(() => {
    // No sound
  }, []);

  return {
    playBeep,
    playTypingSound,
    playTypewriterSound,
    playTypewriterBell,
    playCommandSound,
    playSuccessSound,
    playErrorSound,
    playHoverSound,
    playClickSound,
  };
};
