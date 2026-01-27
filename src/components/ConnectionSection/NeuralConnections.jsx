import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { COLORS } from '../../utils/constants';

const SVGOverlay = styled.svg`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
`;

const NeuralConnections = ({ activeIntestine, intestinePos, systemPositions = [] }) => {
  // Se não está ativo ou não temos posição do intestino, não renderiza
  if (!activeIntestine || !intestinePos || systemPositions.length === 0) {
    return null;
  }

  const intestineX = intestinePos.x;
  const intestineY = intestinePos.y;

  return (
    <SVGOverlay>
      <defs>
        {/* Gradiente principal para as conexões neurais */}
        <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={COLORS.secondary} stopOpacity="1" />
          <stop offset="50%" stopColor={COLORS.primary} stopOpacity="0.8" />
          <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" />
        </linearGradient>

        {/* Gradiente com brilho para efeito pulsante */}
        <radialGradient id="pulseGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={COLORS.primary} stopOpacity="1" />
          <stop offset="100%" stopColor={COLORS.primary} stopOpacity="0" />
        </radialGradient>

        {/* Filtro com blur e glow para efeito neural */}
        <filter id="neuralGlow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Filtro com shadow */}
        <filter id="neuralShadow">
          <feDropShadow dx="0" dy="0" stdDeviation="6" floodOpacity="0.6" floodColor={COLORS.primary} />
        </filter>
      </defs>

      {/* Renderizar uma conexão para cada sistema */}
      {systemPositions.map((systemPos, index) => {
        const cardX = systemPos.x;
        const cardY = systemPos.y;

        // Calcular ponto intermediário para curva suave
        const midX = (intestineX + cardX) / 2;
        const midY = (intestineY + cardY) / 2 + (index % 2 === 0 ? 80 : -80);

        // Criar path com quadratic curve para efeito neural
        const pathData = `M ${intestineX} ${intestineY} Q ${midX} ${midY} ${cardX} ${cardY}`;

        return (
          <g key={`neural-${index}`}>
            {/* Linha base mais grossa no início, afinando no meio */}
            <motion.path
              d={pathData}
              stroke="url(#neuralGradient)"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#neuralGlow)"
              initial={{ strokeDasharray: 500, strokeDashoffset: 500, opacity: 0 }}
              animate={{
                strokeDashoffset: 0,
                opacity: 0.8,
                transition: {
                  delay: index * 0.15,
                  duration: 1.2,
                  ease: 'easeInOut',
                  repeat: Infinity,
                  repeatType: 'reverse',
                  repeatDelay: 0.5,
                },
              }}
            />

            {/* Linha principal com animação de stroke-dasharray */}
            <motion.path
              d={pathData}
              stroke="url(#neuralGradient)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#neuralGlow)"
              initial={{ strokeDasharray: 500, strokeDashoffset: 500, opacity: 0 }}
              animate={{
                strokeDashoffset: 0,
                opacity: 1,
                transition: {
                  delay: index * 0.15,
                  duration: 1.2,
                  ease: 'easeInOut',
                  repeat: Infinity,
                  repeatType: 'reverse',
                  repeatDelay: 0.5,
                },
              }}
            />

            {/* Linha secundária com efeito pulsante */}
            <motion.path
              d={pathData}
              stroke={COLORS.secondary}
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.4"
              initial={{ strokeDasharray: 500, strokeDashoffset: 500 }}
              animate={{
                strokeDashoffset: -500,
                transition: {
                  delay: index * 0.15 + 0.3,
                  duration: 1.5,
                  ease: 'linear',
                  repeat: Infinity,
                },
              }}
            />

            {/* Partículas brilhantes viajando pela conexão */}
            {[0, 0.33, 0.66].map((offset) => (
              <motion.circle
                key={`particle-${index}-${offset}`}
                cx={intestineX}
                cy={intestineY}
                r="4"
                fill={COLORS.primary}
                filter="url(#neuralGlow)"
                initial={{
                  offsetDistance: '0%',
                  opacity: 0,
                }}
                animate={{
                  offsetDistance: '100%',
                  opacity: [0, 1, 1, 0],
                  transition: {
                    delay: index * 0.15 + offset * 0.4,
                    duration: 1.2,
                    ease: 'linear',
                    repeat: Infinity,
                    repeatDelay: 0.5,
                  },
                }}
                style={{
                  offsetPath: `path('${pathData}')`,
                }}
              />
            ))}

            {/* Ponto de chegada no card com pulsação e crescimento */}
            <motion.circle
              cx={cardX}
              cy={cardY}
              r="8"
              fill={COLORS.secondary}
              filter="url(#neuralGlow)"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{
                scale: [0.5, 1.2, 0.5],
                opacity: [0, 1, 0.5],
                transition: {
                  delay: index * 0.15 + 0.8,
                  duration: 1.2,
                  ease: 'easeInOut',
                  repeat: Infinity,
                  repeatDelay: 0.5,
                },
              }}
            />
          </g>
        );
      })}

      {/* Ponto central do intestino com pulsação intensa */}
      <motion.circle
        cx={intestineX}
        cy={intestineY}
        r="12"
        fill={COLORS.primary}
        filter="url(#neuralGlow)"
        initial={{ scale: 0.8, opacity: 0.5 }}
        animate={{
          scale: [0.8, 1.2, 0.8],
          opacity: [0.7, 1, 0.7],
          transition: {
            duration: 1.2,
            ease: 'easeInOut',
            repeat: Infinity,
          },
        }}
      />

      {/* Anel externo pulsante */}
      <motion.circle
        cx={intestineX}
        cy={intestineY}
        r="20"
        fill="none"
        stroke={COLORS.primary}
        strokeWidth="2"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{
          scale: [0.5, 1.2],
          opacity: [0.8, 0],
          transition: {
            duration: 1.5,
            ease: 'easeOut',
            repeat: Infinity,
            repeatDelay: 0.3,
          },
        }}
      />
    </SVGOverlay>
  );
};

export default NeuralConnections;
