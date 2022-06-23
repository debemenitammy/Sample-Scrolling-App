import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  max-width: 70rem;
  margin: 2rem auto;
  text-align: center;
`;

const H1 = styled.h1`
  font-family: 'Oswald', sans-serif;
  margin-bottom: 1em;
`;

const Heading = () => {
  return (
    <Header>
      <H1>Photo Album</H1>
      <p>An infinite scroll of high resolution images.</p>
      <p>Images shot by the world's best photographers.</p>
    </Header>
  )
}

export default Heading
