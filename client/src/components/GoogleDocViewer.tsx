"use client";

import React, { useState, useEffect } from "react";
import { Maximize2, ExternalLink } from "lucide-react";

interface GoogleDocViewerProps {
  url: string;
  height?: string;
}

export default function GoogleDocViewer({ url, height = "80vh" }: GoogleDocViewerProps) {
  const [viewerUrl, setViewerUrl] = useState<string>("");
  const [loadError, setLoadError] = useState<boolean>(false);
  const [fullscreen, setFullscreen] = useState<boolean>(false);
  const [fileType, setFileType] = useState<"google" | "pdf" | "unknown">("unknown");

  // Normalize URL for embedding and detect file type
  const getViewerUrl = (inputUrl: string): string => {
    try {
      const u = new URL(inputUrl);

      // Google Docs, Sheets, Slides → embed as Google preview
      if (u.hostname === "docs.google.com") {
        if (u.pathname.includes("/document/") || u.pathname.includes("/spreadsheets/") || u.pathname.includes("/presentation/")) {
          setFileType("google");
          return inputUrl.replace("/edit", "/preview");
        }
      }

      // Google Drive → embed PDF or file preview
      if (u.hostname === "drive.google.com" && u.pathname.includes("/file/")) {
        const parts = u.pathname.split("/");
        const fileIdIndex = parts.indexOf("d") + 1;
        const fileId = parts[fileIdIndex];

        // Guess file type from extension if present
        if (u.pathname.endsWith(".pdf") || inputUrl.includes("pdf")) {
          setFileType("pdf");
        } else {
          setFileType("unknown");
        }

        return `https://drive.google.com/file/d/${fileId}/preview`;
      }

      // Direct PDF links → use native embed
      if (u.pathname.endsWith(".pdf")) {
        setFileType("pdf");
        return inputUrl;
      }

      // Default to unknown type
      setFileType("unknown");
      return inputUrl;
    } catch (error) {
      console.error("Invalid Google Docs/Drive URL:", error);
      return inputUrl;
    }
  };

  useEffect(() => {
    setViewerUrl(getViewerUrl(url));
  }, [url]);

  // Check if file is accessible
  useEffect(() => {
    if (!viewerUrl) return;

    const checkAccessibility = async () => {
      try {
        const response = await fetch(viewerUrl, { method: "HEAD" });
        if (!response.ok) {
          setLoadError(true);
        }
      } catch {
        setLoadError(true);
      }
    };

    checkAccessibility();
  }, [viewerUrl]);

  // --- Fallback UI ---
  if (loadError) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-[300px] rounded-md border border-red-300 bg-red-50 text-red-700 p-4">
        <p className="text-lg font-semibold">⚠️ Unable to Preview</p>
        <p className="mt-1 text-sm text-center">
          This file may be private, restricted, or unsupported.
        </p>

        {/* File-aware fallback buttons */}
        {fileType === "google" && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <ExternalLink size={16} /> Open in Google Docs
          </a>
        )}

        {fileType === "pdf" && (
          <a
            href={url}
            download
            className="mt-3 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors flex items-center gap-2"
          >
            ⬇️ Download PDF
          </a>
        )}

        {fileType === "unknown" && (
          <div className="flex gap-3 mt-3">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <ExternalLink size={16} /> Open in New Tab
            </a>
            <a
              href={url}
              download
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors flex items-center gap-2"
            >
              ⬇️ Download
            </a>
          </div>
        )}
      </div>
    );
  }

  // --- Main Viewer UI ---
  return (
    <div className="relative w-full" style={{ height: fullscreen ? "100vh" : height }}>
      {/* Toolbar */}
      <div className="absolute top-2 right-2 z-10 flex items-center gap-2">
        <button
          onClick={() => window.open(url, "_blank", "noopener,noreferrer")}
          className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full shadow border"
          title="Open in new tab"
        >
          <ExternalLink size={18} />
        </button>
        <button
          onClick={() => setFullscreen(!fullscreen)}
          className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full shadow border"
          title={fullscreen ? "Exit fullscreen" : "Fullscreen"}
        >
          <Maximize2 size={18} />
        </button>
      </div>

      {/* Embedded iframe */}
      {viewerUrl && (
        <iframe
          src={viewerUrl}
          className="w-full h-full border-none rounded-md shadow"
          allow="autoplay"
          onError={() => setLoadError(true)}
          title="Google Doc Viewer"
        />
      )}
    </div>
  );
}
