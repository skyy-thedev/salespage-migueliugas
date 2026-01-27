import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../utils/constants';

const IntestineImageWrapper = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
  transition: transform 0.3s ease;
  padding: 20px;

  &:hover {
    transform: scale(1.08);
  }

  img {
    width: 100%;
    height: auto;
    display: block;
    filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.15));
    transition: filter 0.3s ease;
    max-width: 200px;
  }

  &:hover img {
    filter: drop-shadow(0 16px 32px ${COLORS.primary}40);
  }
`;

const IntestineImage = ({ onMouseEnter, onMouseLeave, size = '150px' }) => {
  return (
    <IntestineImageWrapper
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <img
        src="/intestine-3d.png"
        alt="Intestino - Sistema Digestivo"
        style={{ width: size, height: 'auto' }}
      />
    </IntestineImageWrapper>
  );
};

export default IntestineImage;
