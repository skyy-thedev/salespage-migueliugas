import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { COLORS } from '../../utils/constants';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import { useInView } from '../../hooks';
import { WORKSHOP_INFO } from '../../utils/constants';

const FormatSectionWrapper = styled.section`
  position: relative;
  padding: 100px 20px;
  background: ${COLORS.white};

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const FormatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 25px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const FormatItem = styled(motion.div)`
  background: ${COLORS.white};
  border: 2px solid ${COLORS.gray200};
  border-radius: 16px;
  padding: 30px;
  text-align: center;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 200px;

  &:hover {
    transform: scale(1.05);
    border-color: ${COLORS.primary};
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.15);
  }

  @media (max-width: 768px) {
    padding: 25px;
    min-height: 160px;
  }
`;

const FormatIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 15px;
`;

const TimeBadge = styled.div`
  background: linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.secondary} 100%);
  color: ${COLORS.white};
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 12px;
  display: inline-block;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.2);
`;

const FormatTitle = styled.h3`
  color: ${COLORS.text};
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 10px;
`;

const FormatDescription = styled.p`
  color: ${COLORS.textLight};
  font-size: 0.95rem;
  margin: 0;
`;

const FormatSection = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const itemVariants = {
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
    <FormatSectionWrapper ref={ref}>
      <Container>
        <SectionTitle>FORMATO DO WORKSHOP</SectionTitle>

        <FormatGrid>
          {WORKSHOP_INFO.formatItems.map((item, index) => (
            <FormatItem
              key={item.title}
              custom={index}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={itemVariants}
            >
              <TimeBadge>{item.time}</TimeBadge>
              <FormatIcon>{item.icon}</FormatIcon>
              <FormatTitle>{item.title}</FormatTitle>
              <FormatDescription>{item.description}</FormatDescription>
            </FormatItem>
          ))}
        </FormatGrid>
      </Container>
    </FormatSectionWrapper>
  );
};

export default FormatSection;
