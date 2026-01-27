import styled from 'styled-components';
import { motion } from 'framer-motion';
import { COLORS } from '../../utils/constants';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import Highlight from '../common/Highlight';
import { useInView } from '../../hooks';

const AudienceSectionWrapper = styled.section`
  position: relative;
  padding: 100px 20px;
  background: linear-gradient(135deg, ${COLORS.dark} 0%, #2d3561 100%);
  color: ${COLORS.white};

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const AudienceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 40px;
  margin-top: 60px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
    margin-top: 40px;
  }
`;

const AudienceBox = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 40px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(255, 255, 255, 0.2);
    transform: scale(1.02);
    background: rgba(255, 255, 255, 0.08);
  }

  @media (max-width: 768px) {
    padding: 30px;
  }
`;

const BoxTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 25px;
  font-weight: 900;
  display: flex;
  align-items: center;
  gap: 12px;

  span {
    font-size: 1.8rem;
  }
`;

const BoxList = styled.ul`
  list-style: none;

  li {
    padding-left: 30px;
    margin-bottom: 16px;
    position: relative;
    font-size: 1rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.9);

    &:last-child {
      margin-bottom: 0;
    }

    &::before {
      content: '${props => props.icon}';
      position: absolute;
      left: 0;
      font-size: 1.2rem;
    }
  }
`;

const AudienceSection = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const boxVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <AudienceSectionWrapper ref={ref}>
      <Container>
        <SectionTitle>PARA QUEM É (E NÃO É) ESSE WORKSHOP</SectionTitle>

        <AudienceGrid>
          <AudienceBox
            custom={0}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={boxVariants}
          >
            <BoxTitle>
              PARA QUEM É
            </BoxTitle>
            <BoxList icon="✓">
              <li><Highlight>Profissionais da saúde</Highlight></li>
              <li>Nutricionistas, médicos, farmacêuticos, terapeutas</li>
              <li>Estudantes avançados</li>
              <li>Quem já estuda saúde integrativa, mas <Highlight>sente que falta organização</Highlight></li>
              <li>Quem quer <Highlight>sair do protocolo</Highlight> e <Highlight>entrar no raciocínio</Highlight></li>
            </BoxList>
          </AudienceBox>

          <AudienceBox
            custom={1}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={boxVariants}
          >
            <BoxTitle>
              PARA QUEM NÃO É
            </BoxTitle>
            <BoxList icon="✕">
              <li>Quem busca <Highlight>receita pronta</Highlight></li>
              <li>Quem quer só <Highlight>"mais um suplemento"</Highlight></li>
              <li>Quem acredita que intestino se resolve <Highlight>isoladamente</Highlight></li>
              <li>Quem não está disposto a <Highlight>questionar</Highlight> o próprio modo de pensar</li>
            </BoxList>
          </AudienceBox>
        </AudienceGrid>
      </Container>
    </AudienceSectionWrapper>
  );
};

export default AudienceSection;
