import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { COLORS } from '../../utils/constants';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import Highlight from '../common/Highlight';
import { useInView } from '../../hooks';
import { WORKSHOP_INFO } from '../../utils/constants';

const LearningSectionWrapper = styled.section`
  position: relative;
  padding: 100px 20px;
  background: ${COLORS.white};

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-bottom: 40px;
  }
`;

const LearningCard = styled(motion.div)`
  background: ${COLORS.white};
  border-left: 5px solid ${COLORS.primary};
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::after {
    content: '✓';
    position: absolute;
    top: 15px;
    right: 20px;
    font-size: 1.5rem;
    color: ${COLORS.success};
    opacity: 0;
    transform: scale(0);
    transition: all 0.3s ease;
    font-weight: bold;
  }

  &:hover {
    box-shadow: 0 15px 40px rgba(102, 126, 234, 0.15);
    transform: translateY(-8px);
    border-left-color: ${COLORS.accent};

    &::after {
      opacity: 1;
      transform: scale(1);
    }
  }

  @media (max-width: 768px) {
    padding: 24px;
  }
`;

const CardIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 15px;
  line-height: 1;
`;

const CardTitle = styled.p`
  color: ${COLORS.text};
  font-weight: 600;
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 0 0 10px 0;
`;

const CardSubtitle = styled.p`
  color: ${COLORS.textLight};
  font-size: 0.9rem;
  line-height: 1.5;
  font-weight: 400;
  margin: 0;
`;

const BottomText = styled(motion.p)`
  color: ${COLORS.textLight};
  font-size: 1.25rem;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  font-style: italic;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.05rem;
  }
`;

const LearningSection = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const cardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <LearningSectionWrapper ref={ref}>
      <Container>
        <SectionTitle>O QUE VOCÊ VAI APRENDER</SectionTitle>

        <CardsGrid>
          {WORKSHOP_INFO.learningTopics.map((topic, index) => (
            <LearningCard
              key={topic.title}
              custom={index}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={cardVariants}
            >
              <CardIcon>{topic.icon}</CardIcon>
              <CardTitle>{topic.title}</CardTitle>
              <CardSubtitle>{topic.description}</CardSubtitle>
            </LearningCard>
          ))}
        </CardsGrid>

        <BottomText
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={textVariants}
        >
          Aqui você aprende a <Highlight>pensar</Highlight>. A aplicação vem depois.
        </BottomText>
      </Container>
    </LearningSectionWrapper>
  );
};

export default LearningSection;
