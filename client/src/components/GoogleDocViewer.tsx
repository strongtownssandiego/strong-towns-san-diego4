"use client";

import React from "react";

interface GoogleDocViewerProps {
  url: string;
  height?: string;
}

export default function GoogleDocViewer({ url, height = "100vh" }: GoogleDocViewerProps) {
  // Function to normalize the URL
  const getViewerUrl = (inputUrl: string): string => {
    try {
      const u = new URL(inputUrl);

      // Case 1: Native Google Docs
      // Example: https://docs.google.com/document/d/FILE_ID/edit
      if (u.hostname === "docs.google.com" && u.pathname.includes("/document/")) {
        const parts = u.pathname.split("/");
        const fileIdIndex = parts.indexOf("d") + 1;
        const fileId = parts[fileIdIndex];
        return `https://docs.google.com/document/d/${fileId}/preview`;
      }

      // Case 2: Google Drive file upload
      // Example: https://drive.google.com/file/d/FILE_ID/view
      if (u.hostname === "drive.google.com" && u.pathname.includes("/file/")) {
        const parts = u.pathname.split("/");
        const fileIdIndex = parts.indexOf("d") + 1;
        const fileId = parts[fileIdIndex];
        return `https://drive.google.com/file/d/${fileId}/preview`;
      }

      // If it's already a preview or export link, just use it directly
      if (inputUrl.includes("/preview") || inputUrl.includes("/export")) {
        return inputUrl;
      }

      // Fallback: return the original URL if nothing matches
      return inputUrl;
    } catch (error) {
      console.error("Invalid Google Docs/Drive URL:", error);
      return inputUrl;
    }
  };

  const viewerUrl = getViewerUrl(url);

  return (
    <div className="w-full" style={{ height }}>
      <iframe
        src={viewerUrl}
        className="w-full h-full border-none rounded-md shadow"
        allow="autoplay"
        title="Google Doc Viewer"
      />
    </div>
  );
}
