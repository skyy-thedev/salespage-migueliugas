import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { COLORS } from '../../utils/constants';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import Highlight from '../common/Highlight';
import { useInView } from '../../hooks';
import { WORKSHOP_INFO } from '../../utils/constants';
import NeuralConnections from './NeuralConnections';

const ConnectionSectionWrapper = styled.section`
  position: relative;
  padding: 100px 20px;
  background: linear-gradient(135deg, #f5f7fa 0%, ${COLORS.gray300} 100%);

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const Content = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SystemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 30px;
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 60dvw;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 60dvw;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-top: 40px;
    max-width: 90dvw;
  }
`;

const SystemCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.8);
  border: 2px solid ${COLORS.primary};
  border-radius: 16px;
  padding: 25px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;

  ${props => props.$active && `
    border: 3px solid ${COLORS.secondary};
    box-shadow: 0 0 30px ${COLORS.secondary}60, 0 0 50px ${COLORS.primary}40;
    transform: scale(1.02);
  `}

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, ${COLORS.primary}, ${COLORS.secondary});
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &:hover {
    border-color: ${COLORS.secondary};
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(102, 126, 234, 0.2);

    &::before {
      transform: scaleX(1);
    }
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const SystemEmoji = styled.div`
  font-size: 3rem;
  margin-bottom: 12px;
`;

const SystemName = styled.p`
  color: ${COLORS.text};
  font-weight: 600;
  font-size: 1rem;
`;

const IntestineCenter = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`;

const IntestineCircle = styled(motion.div)`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.secondary} 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  box-shadow: 0 20px 60px rgba(102, 126, 234, 0.3);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 140px;
    height: 140px;
    border: 2px solid ${COLORS.primary};
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.2;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 0.3;
    }
    50% {
      transform: translate(-50%, -50%) scale(1.1);
      opacity: 0.1;
    }
    100% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 0.3;
    }
  }
`;

const CenterTitle = styled.h3`
  color: ${COLORS.primary};
  font-size: 1.4rem;
  margin-top: 0vh;
  margin-bottom: 5vh;
  font-weight: 700;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ConnectionText = styled.p`
  color: ${COLORS.text};
  font-size: 1.25rem;
  text-align: center;
  margin-top: 40px;
  max-width: 600px;
  line-height: 1.8;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ConnectionSection = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const [activeIntestine, setActiveIntestine] = useState(false);
  const [intestinePos, setIntestinePos] = useState(null);
  const [systemPositions, setSystemPositions] = useState([]);
  const intestineCircleRef = useRef(null);
  const systemCardsRef = useRef([]);

  const handleIntestineHover = () => {
    // Pegar posição do intestino
    if (intestineCircleRef.current) {
      const intestineRect = intestineCircleRef.current.getBoundingClientRect();
      setIntestinePos({
        x: intestineRect.left + intestineRect.width / 2,
        y: intestineRect.top + intestineRect.height / 2,
      });
    }

    // Pegar posições de todos os cards
    const positions = systemCardsRef.current
      .filter(el => el !== null)
      .map(el => {
        const rect = el.getBoundingClientRect();
        return {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        };
      });

    setSystemPositions(positions);
    setActiveIntestine(true);
  };

  const handleIntestineLeave = () => {
    setActiveIntestine(false);
    setIntestinePos(null);
    setSystemPositions([]);
  };

  const intestineVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const systemCardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <ConnectionSectionWrapper ref={ref}>
      <Content>
        <SectionTitle>
          O INTESTINO NÃO É UM ALVO. <br/> É UM PONTO DE ENCONTRO.
        </SectionTitle>

          <CenterTitle>O intestino conversa o tempo todo com:</CenterTitle>

        <IntestineCenter
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={intestineVariants}
        >
          <IntestineCircle
            ref={intestineCircleRef}
            onMouseEnter={handleIntestineHover}
            onMouseLeave={handleIntestineLeave}
            style={{ cursor: 'pointer' }}
          >
          </IntestineCircle>
        </IntestineCenter>

        <SystemsGrid>
          {WORKSHOP_INFO.systems.map((system, index) => (
            <SystemCard
              key={system.name}
              ref={(el) => (systemCardsRef.current[index] = el)}
              custom={index}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={systemCardVariants}
              $active={activeIntestine}
            >
              <SystemEmoji>{system.emoji}</SystemEmoji>
              <SystemName>{system.name}</SystemName>
            </SystemCard>
          ))}
        </SystemsGrid>

        <ConnectionText>
          Quando essa <Highlight>comunicação falha</Highlight>, surgem sintomas que parecem desconectados, mas não são.
        </ConnectionText>
      </Content>

      <NeuralConnections activeIntestine={activeIntestine} intestinePos={intestinePos} systemPositions={systemPositions} />
    </ConnectionSectionWrapper>
  );
};

export default ConnectionSection;
