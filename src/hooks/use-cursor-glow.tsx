import { useEffect, useRef, useState, RefCallback } from 'react';

interface UseCursorGlowOptions {
  intensity?: number;
  radius?: number;
  color?: string;
}

export const useCursorGlow = (options: UseCursorGlowOptions = {}) => {
  const { intensity = 0.3, radius = 200, color = 'hsl(var(--primary))' } = options;
  const elementRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const refCallback: RefCallback<HTMLDivElement> = (node) => {
    elementRef.current = node;
  };

  return {
    ref: refCallback,
    mousePosition,
    isHovering,
    style: {
      '--glow-x': `${mousePosition.x}px`,
      '--glow-y': `${mousePosition.y}px`,
      '--glow-radius': `${radius}px`,
      '--glow-intensity': isHovering ? intensity : 0,
      '--glow-color': color,
    } as React.CSSProperties,
  };
};
