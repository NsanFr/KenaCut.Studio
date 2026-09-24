import React from 'react';

export default function DynamicAuroraBg() {
  return (
    <>
      {/* Primary Dynamic Aurora Container */}
      <div className="aurora-bg" aria-hidden="true">
        {/* Blob 1: Aura Violet & Indigo Mesh */}
        <div className="aurora-blob-1" />

        {/* Blob 2: Electric Sky Blue Mesh */}
        <div className="aurora-blob-2" />

        {/* Blob 3: Flare Pink / Coral & Lemon Lime Glow */}
        <div className="aurora-blob-3" />
      </div>

      {/* Subtle Cinematic Film Grain Texture */}
      <div className="film-grain" aria-hidden="true" />
    </>
  );
}
