import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { loadTopPage } from '../../../actions/pages';

const Container = styled.div`
  margin: auto;
  width: 80%;

  & pre {
    background: #333;
    color: #f5f5f5;
    padding: 4px 12px;
    overflow: auto;
  }
`;

export const Top: React.FC = () => {
  const dispatch = useDispatch();

  dispatch(loadTopPage());

  return (
    <section>
      <Container>
        <div>Hello World</div>
      </Container>
    </section>
  );
};
