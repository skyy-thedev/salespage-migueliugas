import { createGlobalStyle } from 'styled-components';
import { COLORS } from '../utils/constants';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    scrollbar-width: thin;
    scrollbar-color: ${COLORS.primary} ${COLORS.light};

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background: ${COLORS.light};
    }

    &::-webkit-scrollbar-thumb {
      background: ${COLORS.primary};
      border-radius: 4px;

      &:hover {
        background: ${COLORS.secondary};
      }
    }
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-size: 16px;
    line-height: 1.6;
    color: ${COLORS.text};
    background-color: ${COLORS.white};
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 1.2;
    font-weight: 700;
  }

  h1 {
    font-size: clamp(2.5rem, 8vw, 4.5rem);
    font-weight: 900;
  }

  h2 {
    font-size: clamp(2rem, 6vw, 3.5rem);
  }

  h3 {
    font-size: clamp(1.5rem, 4vw, 2.5rem);
  }

  p {
    font-size: clamp(0.9rem, 2vw, 1.1rem);
    font-weight: 400;
  }

  button {
    font-family: 'Inter', sans-serif;
    cursor: pointer;
    border: none;
    background: none;
    transition: all 0.3s ease;

    &:focus {
      outline: none;
    }
  }

  input, textarea, select {
    font-family: 'Inter', sans-serif;
    font-size: 1rem;

    &:focus {
      outline: none;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: all 0.3s ease;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  section {
    position: relative;
    width: 100%;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    h3 {
      font-size: 1.2rem;
    }

    p {
      font-size: 0.95rem;
    }
  }
`;

export default GlobalStyle;
