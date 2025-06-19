'use client';

import { useEffect, useRef } from 'react';

const CanvasFullScreen = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set canvas to full screen
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // First Circle
    ctx.beginPath();
    ctx.arc(canvas.width / 3, canvas.height / 2, 100, 0, Math.PI * 2);
    ctx.fillStyle = 'blue';
    ctx.fill();

    // Second Circle
    ctx.beginPath();
    ctx.arc((canvas.width * 2) / 3, canvas.height / 2, 100, 0, Math.PI * 2);
    ctx.fillStyle = 'green';
    ctx.fill();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 z-0"
    />
  );
};

export default CanvasFullScreen;
