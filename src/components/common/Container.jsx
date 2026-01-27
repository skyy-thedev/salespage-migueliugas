import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
  max-width: ${props => props.maxWidth || '1200px'};
  margin: 0 auto;
  padding: ${props => props.padding || '0 20px'};
  
  @media (max-width: 768px) {
    padding: ${props => props.mobilePadding || '0 16px'};
  }
`;

const Container = ({ children, maxWidth, padding, mobilePadding, ...props }) => {
  return (
    <StyledContainer 
      maxWidth={maxWidth}
      padding={padding}
      mobilePadding={mobilePadding}
      {...props}
    >
      {children}
    </StyledContainer>
  );
};

export default Container;
