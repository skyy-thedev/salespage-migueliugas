import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../utils/constants';

const HighlightedText = styled.span`
  color: ${props => props.$color || COLORS.accent};
  font-weight: 700;
  position: relative;
  
  ${props => props.$underline && `
    border-bottom: 3px solid ${props.$color || COLORS.accent};
    padding-bottom: 2px;
  `}
`;

/**
 * Componente para destacar palavras-chave importantes
 * @param {string} children - Texto a destacar
 * @param {string} color - Cor do destaque (default: accent/laranja)
 * @param {boolean} underline - Adicionar underline (default: false)
 */
const Highlight = ({ children, color, underline = false }) => {
  return (
    <HighlightedText $color={color} $underline={underline}>
      {children}
    </HighlightedText>
  );
};

export default Highlight;
