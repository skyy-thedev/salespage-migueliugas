import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { COLORS } from '../../utils/constants';
import Container from '../common/Container';
import { useInView } from '../../hooks';

const AlertSectionWrapper = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 50px 20px;
  background: linear-gradient(135deg, #f5f7fa 0%, ${COLORS.gray300} 100%);
  min-height: auto;
  
  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const AlertCardContainer = styled(Container)`
  max-width: 75dvw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 70px;
  align-items: center;

  @media (max-width: 1024px) {
    gap: 50px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 50px;
  }
`;

const ProblemCard = styled(motion.div)`
  background: linear-gradient(135deg, rgba(64, 64, 64, 0.1) 0%, rgba(46, 46, 46, 0.05) 100%);
  border: 2px solid ${COLORS.gray200};
  border-radius: 16px;
  padding: 3vh 50px;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 3vh 35px;
  }
`;

const SolutionCard = styled(motion.div)`
  background: linear-gradient(250deg, #764ba2 0%, #667eeaff 100%);
  border: 2px solid ${COLORS.primary};
  border-radius: 16px;
  padding: 3vh 50px;
  position: relative;
  overflow: hidden;
  transform: translateY(20px);

  @media (max-width: 768px) {
    padding: 3vh 35px;
    transform: translateY(0);
  }
`;

const CardHeader = styled.h4`
  color: ${props => props.$error ? COLORS.gray : COLORS.white};
  font-size: 1.6rem;
  font-weight: 900;
  margin-bottom: 15px;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 25px;
  }
`;

const CardList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    padding-left: 40px;
    margin-bottom: 12px;
    position: relative;
    font-size: 1.15rem;
    line-height: 1.8;
    color: ${props => props.$error ? COLORS.gray : COLORS.white};
    font-weight: 500;

    &:last-child {
      margin-bottom: 0;
    }

    &::before {
      content: '→';
      position: absolute;
      left: 0;
      color: ${props => props.$error ? COLORS.gray : COLORS.white};
      font-weight: bold;
      font-size: 1.4rem;
    }
  }
`;

const AlertTitle = styled.h3`
  color: ${COLORS.primary};
  font-size: 3rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  text-align: center;
  grid-column: 1 / -1;

  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 35px;
  }
`;

const AlertSubtitle = styled.p`
  color: ${COLORS.primary};
  font-size: 2.4rem;
  max-width: 25dvw;
  margin: 0 auto;
  font-weight: 600;
  text-align: center;
  grid-column: 1 / -1;
  font-style: italic;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 35px;
      max-width: 60dvw;
  }
`;

const TransitionArrow = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 2.5rem;
  color: ${COLORS.accent};

  @media (max-width: 768px) {
    display: none;
  }
`;

const AlertSection = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const problemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: 0.2, ease: 'easeOut' },
    },
  };

  const solutionVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: 0.3, ease: 'easeOut' },
    },
  };

  return (
    <AlertSectionWrapper ref={ref}>
      <AlertCardContainer>
        <AlertTitle
          as={motion.h3}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={titleVariants}
        >
          ANTES VS DEPOIS DO WORKSHOP
        </AlertTitle>

        <AlertSubtitle
          as={motion.p}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={titleVariants}
        >
          Transforme seu método de trabalho em 3 horas
        </AlertSubtitle>

        <ProblemCard
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={problemVariants}
        >
          <CardHeader $error>ANTES:</CardHeader>
          <CardList $error>
            <li>Pula direto para <strong>protocolos sem estrutura</strong></li>
            <li>Escolhe suplementos pelo <strong>achismo</strong></li>
            <li>Trata microbiota, inflamação e cérebro <strong>separadamente</strong></li>
            <li><strong>Medo</strong> de errar na orientação</li>
            <li><strong>Falta raciocínio sistêmico</strong> na prática</li>
          </CardList>
        </ProblemCard>

        <SolutionCard
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={solutionVariants}
        >
          <CardHeader>DEPOIS:</CardHeader>
          <CardList>
            <li>Estrutura clara de <strong>raciocínio sistêmico</strong></li>
            <li>Diagnostica <strong>antes de receitar</strong></li>
            <li>Conecta <strong>todos os sistemas</strong> naturalmente</li>
            <li><strong>Confiança total</strong> na orientação</li>
            <li>Aplicação clínica <strong>sem confusão</strong></li>
          </CardList>
        </SolutionCard>

      </AlertCardContainer>
    </AlertSectionWrapper>
  );
};

export default AlertSection;
