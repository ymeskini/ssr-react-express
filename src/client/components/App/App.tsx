import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { loadAppProcess } from '../../actions/pages';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Muli', sans-serif;
    font-size: 62.5%;
    margin: 0;
  }
`;

const Container = styled.div`
  margin: 15px 30px;
  font-size: 1rem;
`;

export const App: React.FC = ({ children }) => {
  const dispatch = useDispatch();

  if (!process.env.IS_BROWSER) {
    dispatch(loadAppProcess());
  } else {
    useEffect(() => {
      dispatch(loadAppProcess());
    }, []);
  }

  return (
    <>
      <GlobalStyle />
      <Container>{children}</Container>
    </>
  );
};
