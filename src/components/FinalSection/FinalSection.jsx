import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { COLORS } from '../../utils/constants';
import Container from '../common/Container';
import Button from '../common/Button';
import Highlight from '../common/Highlight';
import { useInView } from '../../hooks';

const FinalSectionWrapper = styled.section`
  position: relative;
  padding: 100px 20px 60px;
  background: linear-gradient(135deg, ${COLORS.dark} 0%, #2d3561 100%);
  color: ${COLORS.white};

  @media (max-width: 768px) {
    padding: 60px 20px 40px;
  }
`;

const Content = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const SectionTitle = styled(motion.h2)`
  color: ${COLORS.white};
  font-size: 3rem;
  font-weight: 900;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
`;

const IntroText = styled(motion.p)`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.6rem;
  max-width: 600px;
  margin-bottom: 0vh;
  line-height: 3;

  @media (max-width: 768px) {
    font-size: 1.05rem;
  }
`;

const QuoteBox = styled(motion.div)`
  background: rgba(243, 156, 18, 0.1);
  border-left: 5px solid ${COLORS.accent};
  border-radius: 8px;
  padding: 30px;
  margin: 50px 0;
  max-width: 600px;

  @media (max-width: 768px) {
    padding: 25px;
    margin: 40px 0;
  }
`;

const QuoteTitle = styled.p`
  color: ${COLORS.accent};
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 15px;
`;

const QuoteText = styled.p`
  color: rgba(255, 255, 255, 0.95);
  font-size: 1.15rem;
  line-height: 1.9;
  font-style: italic;
  max-width: 25vw;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    max-width: 60vw
  }
`;

const FinalCTA = styled(motion.div)`
  margin-bottom: 60px;
`;

const Footer = styled.footer`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 40px;
  margin-top: 60px;
`;

const FooterTitle = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 30px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

const SocialLink = styled.a`
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  font-size: 1rem;

  &:hover {
    color: ${COLORS.accent};
    transform: translateY(-2px);
  }
`;

const Copyright = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.85rem;
  text-align: center;
`;

const FinalSection = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const introVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.1 },
    },
  };

  const quoteVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.2 },
    },
  };

  const ctaVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: 0.3 },
    },
  };

  return (
    <FinalSectionWrapper ref={ref}>
      <Content>
        <SectionTitle
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={titleVariants}
        >
          ESSE WORKSHOP É O PRIMEIRO PASSO
        </SectionTitle>

        <IntroText
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={introVariants}
        >
          Ele não é o fim. É o <Highlight>mapa</Highlight>. <br/> Depois dele, a <Highlight>aplicação clínica</Highlight> faz sentido. <br/> Sem confusão. Sem exageros. <br/> Sem virar refém de modismos.
        </IntroText>

        <QuoteBox
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={quoteVariants}
        >
          <QuoteTitle>ANTES DA COLHEITA, VEM O PREPARO DO TERRENO</QuoteTitle>
          <QuoteText>
            "Modular o intestino é como plantar. Se o solo está em colapso, nenhum suplemento faz milagre. Antes da colheita, vem o <Highlight>preparo do terreno</Highlight>."
          </QuoteText>
        </QuoteBox>

        <FinalCTA
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={ctaVariants}
        >
          <Button
            variant="primary"
            size="large"
            rounded
            onClick={() => {
              const form = document.getElementById('lead-form');
              form?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            QUERO PREPARAR MEU TERRENO →
          </Button>
        </FinalCTA>

        <Footer>
          <FooterTitle>Programa de Formação em Saúde Integrativa</FooterTitle>
          <SocialLinks>
            <SocialLink href="https://instagram.com/migueliugas" target="_blank" rel="noopener noreferrer">
              @migueliugas
            </SocialLink>
            <span style={{ color: 'rgba(255, 255, 255, 0.3)' }}>|</span>
            <SocialLink href="https://instagram.com/sofinutrir" target="_blank" rel="noopener noreferrer">
              @sofinutrir
            </SocialLink>
          </SocialLinks>
          <Copyright>
            © 2026 - Programa de Formação em Saúde Integrativa. Todos os direitos reservados.
          </Copyright>
        </Footer>
      </Content>
    </FinalSectionWrapper>
  );
};

export default FinalSection;
