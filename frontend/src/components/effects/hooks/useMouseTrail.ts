import { useEffect, useRef, RefObject } from 'react';

interface Point {
  x: number;
  y: number;
  age: number;
}

export const useMouseTrail = (canvasRef: RefObject<HTMLCanvasElement>) => {
  const points = useRef<Point[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    const addPoint = (x: number, y: number) => {
      points.current.push({ x, y, age: 0 });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      points.current.forEach((point, i) => {
        point.age += 1;
        if (point.age > 50) {
          points.current.splice(i, 1);
          return;
        }

        const opacity = 1 - point.age / 50;
        ctx.beginPath();
        ctx.arc(point.x, point.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 92, 246, ${opacity})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', (e) => addPoint(e.clientX, e.clientY));

    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [canvasRef]);
};