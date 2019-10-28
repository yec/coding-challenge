import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const Text = styled.div`
  display: flex;
  flex: 1;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${props => props.cardTitle && `
    margin-top: 4px;
    font-size: 14px;
  `}
  ${props => props.large && `
    font-size: 24px;
    font-weight: bold;
    text-transform: uppercase;
  `}
  ${props => props.centered && `
    justify-content: center;
    align-items: center;
  `}
  ${props => props.white && `
    color: white;
  `}
`;

/**
 * Lazy load image implementation. add elements to an array and prevent image loading
 * as they become visible allow the image to load
 */
const imgLoaderRefs = {};

function checkVisible() {
  Object.values(imgLoaderRefs).forEach(ref => {
    if (
      ref.current.getBoundingClientRect().top < window.innerHeight
      && ref.current.getBoundingClientRect().top > 0
    ) {
      // setting src triggers img element to start loading
      if (!ref.current.imgRef.current.src) {
        ref.current.imgRef.current.src = ref.current.imageUrl;
      }
    }
  });
  requestAnimationFrame(checkVisible);
}

requestAnimationFrame(checkVisible);

function Tile({ title = "", titleCompact, url = "", children = "", images, ...props }) {

  // set title if no images
  if (!images) {
    children = <Text large centered white>{titleCompact}</Text>
  }

  return <Card key={title} to={url}>
    <ImgLoader imageUrl={images && images['Poster Art'].url}>{children}</ImgLoader>
    <Text cardTitle>{title}</Text>
  </Card>
}

const Card = styled(Link)`

display: flex;
flex-direction: column;
width: 67px;
// height: 120px;
margin: 5px;

@media (min-width: 769px) {
  width: 134px;
  // height: 220px;
  margin: 10px;
}
`

const ImgLoader = ({ imageUrl, children }) => {
  const imgLoaderRef = useRef();
  const imgRef = useRef();

  useEffect(function updateRefs() {
    if (imageUrl) {
      imgRef.current.classList.add("loading");

      imgRef.current.onload = function () {
        if (imgRef.current) {
          imgRef.current.classList.remove("loading");
          imgRef.current.classList.add("loaded");
        }
      };

      if (!imgLoaderRefs[imageUrl]) {
        imgLoaderRef.current.imageUrl = imageUrl;
        imgLoaderRef.current.imgRef = imgRef;
        imgLoaderRefs[imageUrl] = imgLoaderRef;
      }
    }

    // cleanup
    return () => {
      // remove the tile
      delete imgLoaderRefs[imageUrl];
    };
  },
    // only run useeffect imageUrl change
    [imageUrl]);

  if (imageUrl) {
    children = <img style={{ width: '100%', height: '100%' }} ref={imgRef} />;
  }
  return <Img ref={imgLoaderRef} size='200%' imageUrl="assets/placeholder.png">{children}</Img>
}

const Img = styled.div`
animation: fadeInFromNone 0.5s ease-out;
display: flex;
background: rgba(0,0,0,0.9);
width: 67px;
height: 100px;

background-image: url(${props => props.imageUrl});
background-size: ${props => props.size};
background-repeat: no-repeat;
background-position: center;

@media (min-width: 769px) {
  width: 134px;
  height: 200px;
}
`;

export default Tile;
