import styled from 'styled-components';
import { motion } from 'framer-motion';
import { COLORS } from '../../utils/constants';
import { useParallax } from '../../hooks';
import { WORKSHOP_INFO } from '../../utils/constants';
import Button from '../common/Button';
import Highlight from '../common/Highlight';
import Particles from './Particles';
import Container from '../common/Container';

const HeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(135deg, ${COLORS.dark} 0%, #2d3561 100%);
`;

const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 20% 80%, rgba(102, 126, 234, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(118, 75, 162, 0.1) 0%, transparent 50%);
  pointer-events: none;
`;

const IntestineBackground = styled.div`
  position: absolute;
  top: 50%;
  right: -10%;
  width: 600px;
  height: 600px;
  transform: translateY(-50%);
  opacity: 0.2;
  pointer-events: none;
  background: url('/intestine-3d.png') no-repeat center;
  background-size: contain;
  z-index: 1;

  @media (max-width: 1024px) {
    width: 400px;
    height: 400px;
    right: -5%;
  }

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
    right: -15%;
    opacity: 0.1;
  }
`;

const HeroContent = styled(Container)`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
`;

const HeroTitle = styled(motion.h1)`
  color: ${COLORS.white};
  font-size: clamp(2.5rem, 10vw, 5rem);
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 30px;
  text-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);

  background: linear-gradient(135deg, ${COLORS.white} 0%, #c3cfe2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const HeroSubtitle = styled(motion.p)`
  color: ${COLORS.gray300};
  font-size: clamp(1rem, 3vw, 1.3rem);
  max-width: 700px;
  margin-bottom: 40px;
  line-height: 1.6;
  font-weight: 400;

  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

const DateBadge = styled(motion.div)`
  display: inline-block;
  padding: 12px 30px;
  background: rgba(243, 156, 18, 0.2);
  border: 1px solid ${COLORS.accent};
  border-radius: 50px;
  color: ${COLORS.accent};
  font-weight: 600;
  font-size: 0.95rem;
  margin-bottom: 40px;
  backdrop-filter: blur(10px);
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-bottom: 80px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    margin-bottom: 60px;
  }
`;

const SocialProofWrapper = styled(motion.div)`
  display: flex;
  gap: 50px;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 30px;
    margin-bottom: 60px;
  }
`;

const ProofItem = styled.div`
  text-align: center;

  .number {
    font-size: 2.2rem;
    font-weight: 900;
    color: ${COLORS.accent};
    line-height: 1;
    margin-bottom: 5px;
  }

  .label {
    color: ${COLORS.gray300};
    font-size: 0.9rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  @media (max-width: 768px) {
    .number {
      font-size: 1.8rem;
    }
    .label {
      font-size: 0.85rem;
    }
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  cursor: pointer;

  svg {
    width: 30px;
    height: 30px;
    stroke: ${COLORS.white};
    stroke-width: 2;
    fill: none;
  }
`;

const Hero = () => {
  const offset = useParallax();

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.2, ease: 'easeOut' },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.4, ease: 'easeOut' },
    },
  };

  const proofVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.5, ease: 'easeOut' },
    },
  };

  const scrollVariants = {
    animate: {
      y: [0, 10, 0],
      transition: { duration: 2, repeat: Infinity },
    },
  };

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <HeroSection>
      <Particles count={20} />
      <BackgroundOverlay style={{ transform: `translateY(${offset * 0.5}px)` }} />
      <IntestineBackground style={{ transform: `translateY(${offset * 0.3}px)` }} />
      
      <HeroContent>
        <DateBadge
          initial="hidden"
          animate="visible"
          variants={subtitleVariants}
        >
          {WORKSHOP_INFO.date}
        </DateBadge>

        <HeroTitle
          initial="hidden"
          animate="visible"
          variants={titleVariants}
        >
          {WORKSHOP_INFO.title}
        </HeroTitle>

        <HeroSubtitle
          initial="hidden"
          animate="visible"
          variants={subtitleVariants}
        >
          Um workshop ao vivo para quem já entendeu que o intestino não funciona sozinho e quer aprender a <Highlight>pensar de forma integrativa</Highlight>.
        </HeroSubtitle>

        <SocialProofWrapper
          initial="hidden"
          animate="visible"
          variants={proofVariants}
        >
          <ProofItem>
            <div className="number">200+</div>
            <div className="label">Profissionais Inscritos</div>
          </ProofItem>
          <ProofItem>
            <div className="number">45</div>
            <div className="label">Vagas Disponíveis</div>
          </ProofItem>
          <ProofItem>
            <div className="number">4.9⭐</div>
            <div className="label">Avaliação Média</div>
          </ProofItem>
        </SocialProofWrapper>

        <ButtonContainer
          initial="hidden"
          animate="visible"
          variants={buttonVariants}
        >
          <Button 
            size="large" 
            rounded
            onClick={() => {
              const form = document.getElementById('lead-form');
              form?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            GARANTIR MINHA VAGA
          </Button>
          <Button 
            variant="outline" 
            size="large"
            rounded
          >
            Saber mais →
          </Button>
        </ButtonContainer>
      </HeroContent>

      <ScrollIndicator
        animate="animate"
        variants={scrollVariants}
        onClick={handleScrollDown}
      >
        <svg viewBox="0 0 24 24">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </ScrollIndicator>
    </HeroSection>
  );
};

export default Hero;
