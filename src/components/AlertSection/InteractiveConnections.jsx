import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../utils/constants';

const SVGOverlay = styled.svg`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 50;
`;

const InteractiveConnections = ({ activeCard, cardPos, intestinePos = null }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const svgRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    if (activeCard) {
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [activeCard]);

  // Usar posição do intestino passada como prop, ou calcular posição padrão
  const intestineX = intestinePos?.x ?? window.innerWidth / 2;
  const intestineY = intestinePos?.y ?? window.innerHeight * 0.25;

  if (!activeCard || !cardPos) return null;

  return (
    <SVGOverlay ref={svgRef}>
      <defs>
        <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={COLORS.accent} stopOpacity="0.8" />
          <stop offset="50%" stopColor={COLORS.primary} stopOpacity="0.6" />
          <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.4" />
        </linearGradient>
        
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Linha conectando do card ao mouse */}
      <path
        d={`M ${cardPos.x} ${cardPos.y} Q ${(cardPos.x + mousePos.x) / 2} ${(cardPos.y + mousePos.y) / 2 + 50} ${mousePos.x} ${mousePos.y}`}
        stroke="url(#connectionGradient)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        filter="url(#glow)"
        opacity="0.7"
      />

      {/* Linha conectando do mouse ao intestino */}
      <path
        d={`M ${mousePos.x} ${mousePos.y} Q ${(mousePos.x + intestineX) / 2} ${(mousePos.y + intestineY) / 2} ${intestineX} ${intestineY}`}
        stroke={COLORS.secondary}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="5,5"
        filter="url(#glow)"
        opacity="0.5"
      />

      {/* Círculo brilhante no mouse */}
      <circle
        cx={mousePos.x}
        cy={mousePos.y}
        r="8"
        fill={COLORS.accent}
        filter="url(#glow)"
        opacity="0.8"
      />

      {/* Círculo brilhante no intestino */}
      <circle
        cx={intestineX}
        cy={intestineY}
        r="6"
        fill={COLORS.secondary}
        filter="url(#glow)"
        opacity="0.6"
      />
    </SVGOverlay>
  );
};

export default InteractiveConnections;
