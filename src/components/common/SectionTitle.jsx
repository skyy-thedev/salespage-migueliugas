import styled from 'styled-components';
import { COLORS } from '../../utils/constants';

export const SectionTitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const TitleMain = styled.h2`
  color: ${COLORS.dark};
  margin-bottom: 16px;
  font-weight: 900;
  background: linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.secondary} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const TitleSubtitle = styled.p`
  color: ${COLORS.textLight};
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
`;

const SectionTitle = ({ children, subtitle, ...props }) => {
  return (
    <SectionTitleWrapper {...props}>
      <TitleMain>{children}</TitleMain>
      {subtitle && <TitleSubtitle>{subtitle}</TitleSubtitle>}
    </SectionTitleWrapper>
  );
};

export default SectionTitle;
