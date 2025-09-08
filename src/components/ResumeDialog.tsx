"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

interface ResumeDialogProps {
  children: React.ReactNode;
}

export const ResumeDialog: React.FC<ResumeDialogProps> = ({ children }) => {
  const handleDownload = () => {
    // Download the actual PDF file
    const link = document.createElement("a");
    link.href = "/assets/cv/aashik.cv.pdf";
    link.download = "Mohammed_Aashik_CV.pdf";
    link.target = "_blank"; // Open in new tab as fallback
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-green-400">
            📄 CV Download
          </DialogTitle>
          <DialogDescription className="text-gray-300">
            Click the button below to download my CV in PDF format.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
            <h3 className="text-lg font-semibold text-cyan-400 mb-2">
              CV Preview
            </h3>
            <div className="text-sm text-gray-300 space-y-2">
              <p>
                <span className="text-green-400 font-semibold">Name:</span>{" "}
                Mohammed Aashik
              </p>
              <p>
                <span className="text-green-400 font-semibold">Title:</span>{" "}
                Full-Stack Developer
              </p>
              <p>
                <span className="text-green-400 font-semibold">
                  Experience:
                </span>{" "}
                5+ years
              </p>
              <p>
                <span className="text-green-400 font-semibold">Skills:</span>{" "}
                TypeScript, React, Node.js, Python, AWS, and more
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleDownload}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
            >
              📥 Download CV (PDF)
            </button>
          </div>

          <div className="text-xs text-gray-400 text-center">
            Click the button above to download my professional CV in PDF format.
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
