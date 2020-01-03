import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
`;

export const Home: React.FC = () => {
  return (
    <Container>
      <div>Hello World</div>
    </Container>
  );
};
