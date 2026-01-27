import styled from 'styled-components';
import { motion } from 'framer-motion';
import { COLORS } from '../../utils/constants';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import Highlight from '../common/Highlight';
import { useInView } from '../../hooks';
import { WORKSHOP_INFO } from '../../utils/constants';

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
  margin-top: 7vh;
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

        <IntestineCenter
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={intestineVariants}
        >
          <IntestineCircle>🌿</IntestineCircle>
          <CenterTitle>O intestino conversa o tempo todo com:</CenterTitle>
        </IntestineCenter>

        <SystemsGrid>
          {WORKSHOP_INFO.systems.map((system, index) => (
            <SystemCard
              key={system.name}
              custom={index}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={systemCardVariants}
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
    </ConnectionSectionWrapper>
  );
};

export default ConnectionSection;
