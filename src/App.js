import React, {useState, useEffect} from 'react';
import Heading from '../src/components/Heading';
import Loader from '../src/components/Loader';
import UnsplashImage from '../src/components/UnsplashImage';

import axios from 'axios';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';


// Style 
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
  }
`;

const WrapperImage = styled.section`
  max-width: 70rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 300px;
`;

function App() {
  const [images, setImages] = useState([])

  useEffect(() => {
    // const apiRoot = "https://api.unsplash.com";
    const apiRoot = "https://api.pexels.com/v1/";
    const accessKey = process.env.REACT_APP_ACCESSKEY;
    
    axios
      .get(`${apiRoot}/search?query=people`, {
        headers: {
          'Authorization': `${accessKey}`
        }
      })
      .then(res => setImages([...images, ...res.data]))
  })

  return (
    <div className="App">
      <Heading />
      <GlobalStyle />
      <Loader />
      <WrapperImage>
        {images.map(image => (
          <UnsplashImage url={image.src.large} key={image.id} />
        ))}
      </WrapperImage>
    </div>
  );
}


export default App;
