import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { COLORS } from '../../utils/constants';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import Highlight from '../common/Highlight';
import { useInView } from '../../hooks';
import { WORKSHOP_INFO } from '../../utils/constants';

const InstructorsSectionWrapper = styled.section`
  position: relative;
  padding: 50px 20px;
  background: ${COLORS.light};

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const InstructorsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const InstructorCard = styled(motion.div)`
  background: ${COLORS.white};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-15px);
    box-shadow: 0 20px 50px rgba(102, 126, 234, 0.2);
  }
`;

const CardHeader = styled.div`
  background: linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.secondary} 100%);
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 15px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 1;
  border: 3px solid ${COLORS.white};
`;

const InstructorName = styled.h3`
  color: ${COLORS.white};
  font-size: 1.5rem;
  font-weight: 900;
  margin: 0;
`;

const InstructorTitle = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1rem;
  font-weight: 600;
  margin: 8px 0 0 0;
`;

const CardBody = styled.div`
  padding: 30px;
`;



const Biography = styled.p`
  color: ${COLORS.text};
  font-size: 1rem;
  line-height: 1.8;
  margin: 0 0 15px 0;
  text-align: justify;
`;

const SocialLink = styled.a`
  display: inline-block;
  color: ${COLORS.primary};
  font-weight: 600;
  margin-top: 15px;
  transition: all 0.3s ease;

  &:hover {
    color: ${COLORS.secondary};
    transform: translateX(5px);
  }
`;

const BottomText = styled(motion.p)`
  color: ${COLORS.text};
  font-size: 1.25rem;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 1.05rem;
  }
`;

const InstructorsSection = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
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
      transition: { duration: 0.6, delay: 0.4 },
    },
  };

  return (
    <InstructorsSectionWrapper ref={ref}>
      <Container>
        <SectionTitle>QUEM CONDUZ O WORKSHOP</SectionTitle>

        <InstructorsGrid>
          {WORKSHOP_INFO.instructors.map((instructor, index) => (
            <InstructorCard
              key={instructor.name}
              custom={index}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={cardVariants}
            >
              <CardHeader>
                <Avatar src={instructor.image} alt={instructor.name} />
                <InstructorName>{instructor.name}</InstructorName>
                <InstructorTitle>{instructor.profession}</InstructorTitle>
              </CardHeader>
              <CardBody>
                <Biography>{instructor.bio}</Biography>
                <SocialLink href={`https://instagram.com/${instructor.instagram.slice(1)}`} target="_blank" rel="noopener noreferrer">
                  {instructor.instagram} ↗
                </SocialLink>
              </CardBody>
            </InstructorCard>
          ))}
        </InstructorsGrid>

        <BottomText
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={textVariants}
        >
          Juntos, unem <Highlight>visão sistêmica</Highlight> + <Highlight>lógica clínica</Highlight>.
        </BottomText>
      </Container>
    </InstructorsSectionWrapper>
  );
};

export default InstructorsSection;
