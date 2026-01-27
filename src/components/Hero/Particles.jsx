import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../utils/constants';

const ParticlesContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
`;

const Particle = styled.div`
  position: absolute;
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
  background: radial-gradient(circle, ${COLORS.primary} 0%, transparent 70%);
  border-radius: 50%;
  opacity: ${props => props.$opacity};
  animation: float ${props => props.$duration}s infinite ease-in-out;

  @keyframes float {
    0%, 100% {
      transform: translate(${props => props.$x}px, ${props => props.$y}px);
      opacity: ${props => props.$opacity};
    }
    50% {
      transform: translate(${props => props.$x + props.$offsetX}px, ${props => props.$y + props.$offsetY}px);
      opacity: ${props => props.$opacity * 0.5};
    }
  }
`;

const Particles = ({ count = 15 }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: count }).map((_, i) => ({
        id: i,
        size: Math.random() * 50 + 10,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        offsetX: (Math.random() - 0.5) * 100,
        offsetY: (Math.random() - 0.5) * 100,
        duration: Math.random() * 15 + 20,
        opacity: Math.random() * 0.3 + 0.1,
      }));
      setParticles(newParticles);
    };

    generateParticles();

    const handleResize = () => {
      generateParticles();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [count]);

  return (
    <ParticlesContainer>
      {particles.map(particle => (
        <Particle
          key={particle.id}
          $size={particle.size}
          $x={particle.x}
          $y={particle.y}
          $offsetX={particle.offsetX}
          $offsetY={particle.offsetY}
          $duration={particle.duration}
          $opacity={particle.opacity}
        />
      ))}
    </ParticlesContainer>
  );
};

export default Particles;
