import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaChartLine } from 'react-icons/fa';
import { FaClock } from 'react-icons/fa';
import { FaBolt } from 'react-icons/fa';
import { COLORS } from '../../utils/constants';
import Container from '../common/Container';
import Button from '../common/Button';
import Highlight from '../common/Highlight';
import { useInView } from '../../hooks';
import { WORKSHOP_INFO } from '../../utils/constants';

const InvestmentSectionWrapper = styled.section`
  position: relative;
  padding: 120px 20px;
  background: linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.secondary} 100%);
  overflow: hidden;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(243, 156, 18, 0.1) 0%, transparent 50%);
    pointer-events: none;
    animation: rotate 20s linear infinite;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 768px) {
    padding: 80px 20px;
    min-height: auto;
  }
`;

const Content = styled(Container)`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const SectionSubtitle = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.5rem;
  margin-bottom: 30px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const PriceWrapper = styled(motion.div)`
  margin-bottom: 40px;
`;

const Currency = styled.span`
  color: rgba(255, 255, 255, 0.8);
  font-size: 2rem;
  font-weight: 700;
`;

const Price = styled.div`
  font-size: clamp(3.5rem, 15vw, 7rem);
  font-weight: 900;
  color: ${COLORS.white};
  line-height: 1;
  text-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  margin: 10px 0;
`;

const Cents = styled.span`
  font-size: 2.5rem;
  margin-left: 10px;
  font-weight: 700;
`;

const Description = styled.p`
  color: rgba(255, 255, 255, 0.95);
  font-size: 1.3rem;
  max-width: 550px;
  margin-bottom: 50px;
  line-height: 1.8;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const BenefitsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-bottom: 60px;
  max-width: 1200px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const BenefitCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 25px;
  text-align: center;
  color: white;

  h4 {
    font-size: 1.3rem;
    font-weight: 900;
    margin-bottom: 12px;
    color: ${COLORS.accent};
  }

  p {
    font-size: 0.95rem;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.9);
    margin: 0;
  }
`;

const GuaranteeSticker = styled.div`
  background: ${COLORS.success};
  color: white;
  padding: 15px 25px;
  border-radius: 50px;
  font-weight: 900;
  font-size: 0.95rem;
  margin-bottom: 40px;
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 10px 30px rgba(39, 174, 96, 0.3);
`;

const ButtonWrapper = styled(motion.div)`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const InvestmentSection = () => {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  const priceVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.2 },
    },
  };

  const benefitVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.3 + i * 0.1 },
    }),
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.6 },
    },
  };

  return (
    <InvestmentSectionWrapper ref={ref}>
      <Content>
        <SectionSubtitle>INVESTIMENTO</SectionSubtitle>

        <PriceWrapper
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={priceVariants}
        >
          <Price>
            <Currency>R$</Currency>
            150
            <Cents>,00</Cents>
          </Price>
        </PriceWrapper>

        <Description
          as={motion.p}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={descriptionVariants}
        >
          Um valor <Highlight>acessível</Highlight> para quem quer <Highlight>clareza, organização</Highlight> e <Highlight>base sólida</Highlight> antes da prática clínica.
        </Description>

        <BenefitsWrapper>
          <BenefitCard
            custom={1}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={benefitVariants}
          >
            <h4><FaClock /> 3 Horas que Transformam</h4>
            <p>Economiza meses de estudo confuso com conteúdo desorganizado</p>
          </BenefitCard>

          <BenefitCard
            custom={2}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={benefitVariants}
          >
            <h4><FaBolt /> Impacto Imediato</h4>
            <p>Aplique o conhecimento na primeira consulta da semana</p>
          </BenefitCard>
        </BenefitsWrapper>

        <GuaranteeSticker>
          ✓ Garantia 100% - 30 dias de satisfação garantida
        </GuaranteeSticker>

        <ButtonWrapper
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={buttonVariants}
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
            QUERO ME INSCREVER AGORA →
          </Button>
        </ButtonWrapper>
      </Content>
    </InvestmentSectionWrapper>
  );
};

export default InvestmentSection;
