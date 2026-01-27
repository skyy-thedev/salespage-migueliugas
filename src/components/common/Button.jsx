import styled from 'styled-components';
import { COLORS } from '../../utils/constants';

export const StyledButton = styled.button`
  padding: ${props => props.$size === 'large' ? '20px 50px' : '12px 30px'};
  font-size: ${props => props.$size === 'large' ? '1.1rem' : '1rem'};
  font-weight: 600;
  border-radius: ${props => props.$rounded ? '60px' : '8px'};
  background: ${props => props.$variant === 'outline' 
    ? 'transparent' 
    : props.$variant === 'secondary'
    ? `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.secondary} 100%)`
    : COLORS.accent};
  color: ${props => props.$variant === 'outline' ? COLORS.accent : COLORS.white};
  border: ${props => props.$variant === 'outline' ? `2px solid ${COLORS.accent}` : 'none'};
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${props => props.$variant === 'outline' 
      ? `0 10px 20px rgba(243, 156, 18, 0.2)` 
      : props.$variant === 'secondary'
      ? `0 10px 30px rgba(102, 126, 234, 0.3)`
      : `0 10px 30px rgba(243, 156, 18, 0.4)`};
  }

  &:active {
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 768px) {
    padding: ${props => props.size === 'large' ? '16px 40px' : '10px 24px'};
    font-size: ${props => props.size === 'large' ? '1rem' : '0.9rem'};
  }
`;

const Button = ({ children, variant = 'primary', size = 'medium', rounded = false, ...props }) => {
  return (
    <StyledButton 
      $variant={variant} 
      $size={size} 
      $rounded={rounded}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
