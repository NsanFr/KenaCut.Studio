import React, { useEffect, useState, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function CursorSpotlight() {
  const { isDark } = useTheme();
  const [visible, setVisible] = useState(false);
  const [isSupported, setIsSupported] = useState(true);
  
  // Position refs for smooth 60fps lerp animation without triggering React re-renders
  const mousePos = useRef({ x: -500, y: -500 });
  const currentPos = useRef({ x: -500, y: -500 });
  const spotlightRef = useRef(null);
  const secondarySpotlightRef = useRef(null);
  const animationFrameId = useRef(null);

  useEffect(() => {
    // Check if device supports fine hover pointer (disable on touch / mobile devices for battery & performance)
    if (typeof window !== 'undefined') {
      const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
      setIsSupported(finePointer.matches);

      const handlePointerMediaChange = (e) => {
        setIsSupported(e.matches);
      };
      
      finePointer.addEventListener('change', handlePointerMediaChange);
      return () => finePointer.removeEventListener('change', handlePointerMediaChange);
    }
  }, []);

  useEffect(() => {
    if (!isSupported) return;

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    const handleMouseEnter = () => {
      setVisible(true);
    };

    // Smooth lerp render loop
    const animate = () => {
      // Linear interpolation: current + (target - current) * factor
      const easeFactor = 0.18;
      const trailFactor = 0.08;

      currentPos.current.x += (mousePos.current.x - currentPos.current.x) * easeFactor;
      currentPos.current.y += (mousePos.current.y - currentPos.current.y) * easeFactor;

      if (spotlightRef.current) {
        spotlightRef.current.style.transform = `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      if (secondarySpotlightRef.current) {
        // Subtle trailing delay for organic dynamic fluid feel
        secondarySpotlightRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isSupported, visible]);

  if (!isSupported) return null;

  return (
    <div 
      className={`fixed inset-0 pointer-events-none z-30 overflow-hidden transition-opacity duration-500 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      {/* Primary Smooth Trailing Spotlight */}
      <div
        ref={spotlightRef}
        className="absolute top-0 left-0 w-[420px] h-[420px] rounded-full will-change-transform filter blur-[60px]"
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(140, 114, 255, 0.22) 0%, rgba(112, 185, 254, 0.16) 35%, rgba(255, 169, 159, 0.12) 65%, transparent 75%)'
            : 'radial-gradient(circle, rgba(140, 114, 255, 0.20) 0%, rgba(112, 185, 254, 0.15) 40%, rgba(243, 255, 170, 0.12) 60%, transparent 75%)',
          mixBlendMode: isDark ? 'screen' : 'multiply',
        }}
      />

      {/* Secondary Fast Response Iris Glow (sharp highlight under tip of cursor) */}
      <div
        ref={secondarySpotlightRef}
        className="absolute top-0 left-0 w-[140px] h-[140px] rounded-full will-change-transform filter blur-[20px]"
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(243, 255, 170, 0.35) 0%, rgba(140, 114, 255, 0.25) 45%, transparent 70%)'
            : 'radial-gradient(circle, rgba(112, 185, 254, 0.3) 0%, rgba(140, 114, 255, 0.2) 50%, transparent 70%)',
          mixBlendMode: isDark ? 'screen' : 'normal',
        }}
      />
    </div>
  );
}
