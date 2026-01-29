import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { COLORS } from '../utils/constants';

const PageWrapper = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.secondary} 100%);
  padding: 40px 20px;
`;

const ContentCard = styled(motion.div)`
  background: ${COLORS.white};
  border-radius: 24px;
  padding: 60px 50px;
  max-width: 600px;
  width: 100%;
  text-align: center;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    padding: 40px 25px;
  }
`;

const SuccessIcon = styled(motion.div)`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${COLORS.success} 0%, #2ecc71 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 30px;
  box-shadow: 0 10px 40px rgba(39, 174, 96, 0.4);

  svg {
    width: 50px;
    height: 50px;
    stroke: ${COLORS.white};
    stroke-width: 3;
    fill: none;
  }
`;

const Title = styled.h1`
  color: ${COLORS.dark};
  font-size: 2.5rem;
  font-weight: 900;
  margin-bottom: 15px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Subtitle = styled.p`
  color: ${COLORS.text};
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const HighlightBox = styled.div`
  background: rgba(102, 126, 234, 0.1);
  border: 2px solid ${COLORS.primary};
  border-radius: 16px;
  padding: 25px;
  margin-bottom: 30px;
`;

const HighlightTitle = styled.h3`
  color: ${COLORS.primary};
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 10px;
`;

const HighlightText = styled.p`
  color: ${COLORS.text};
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
`;

const UserName = styled.span`
  color: ${COLORS.primary};
  font-weight: 700;
`;

const StepsList = styled.ul`
  text-align: left;
  list-style: none;
  padding: 0;
  margin: 0 0 30px 0;
`;

const StepItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 15px;
  padding: 15px 0;
  border-bottom: 1px solid ${COLORS.gray200};

  &:last-child {
    border-bottom: none;
  }
`;

const StepNumber = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${COLORS.primary};
  color: ${COLORS.white};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  flex-shrink: 0;
`;

const StepText = styled.span`
  color: ${COLORS.text};
  font-size: 1rem;
  line-height: 1.5;
`;

const BackButton = styled.a`
  display: inline-block;
  padding: 16px 40px;
  background: linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.secondary} 100%);
  color: ${COLORS.white};
  text-decoration: none;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(102, 126, 234, 0.5);
  }
`;

const ThankYouPage = () => {
  const [leadData, setLeadData] = useState(null);

  useEffect(() => {
    // Retrieve lead data from localStorage
    const storedData = localStorage.getItem('leadData');
    if (storedData) {
      setLeadData(JSON.parse(storedData));
    }
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const iconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { delay: 0.3, type: 'spring', stiffness: 200 },
    },
  };

  const firstName = leadData?.name?.split(' ')[0] || 'Aluno';

  return (
    <PageWrapper>
      <ContentCard
        initial="hidden"
        animate="visible"
        variants={cardVariants}
      >
        <SuccessIcon
          initial="hidden"
          animate="visible"
          variants={iconVariants}
        >
          <svg viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </SuccessIcon>

        <Title>Obrigado pela Compra!</Title>
        
        <Subtitle>
          Parabéns, <UserName>{firstName}</UserName>! Sua inscrição no Workshop Saúde Integrativa foi confirmada com sucesso.
        </Subtitle>

        <HighlightBox>
          <HighlightTitle>📧 Confirmação Enviada</HighlightTitle>
          <HighlightText>
            Enviamos um e-mail para <strong>{leadData?.email || 'seu e-mail cadastrado'}</strong> com todos os detalhes da sua compra e instruções para acessar o workshop.
          </HighlightText>
        </HighlightBox>

        <StepsList>
          <StepItem>
            <StepNumber>1</StepNumber>
            <StepText>Verifique sua caixa de entrada (e também o spam) para o e-mail de confirmação</StepText>
          </StepItem>
          <StepItem>
            <StepNumber>2</StepNumber>
            <StepText>Você receberá o link de acesso ao workshop no dia do evento via e-mail e WhatsApp</StepText>
          </StepItem>
          <StepItem>
            <StepNumber>3</StepNumber>
            <StepText>Prepare-se para uma experiência transformadora na saúde integrativa!</StepText>
          </StepItem>
        </StepsList>

        <BackButton href="/">
          ← Voltar ao Início
        </BackButton>
      </ContentCard>
    </PageWrapper>
  );
};

export default ThankYouPage;
