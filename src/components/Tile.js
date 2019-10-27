import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import TilesStyled from './Tiles';

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
const tileRefs = [];

// function checkVisible() {
//   var visible = window.innerHeight + window.scrollY;
//   tileRefs.forEach(ref => {
//     if (ref.current.getBoundingClientRect().top < visible) {
//       // make visible
//       if (!ref.current.loaded) {
//         ref.current.setLoaded(true);
//       }
//     }
//   });
//   requestAnimationFrame(checkVisible);
// }

// requestAnimationFrame(checkVisible);

function Tile({ title = "", titleCompact, url = "", children = "", images, ...props }) {

  const element = useRef();
  const [loaded, setLoaded] = useState(false);

  useEffect(function updateRefs() {
    if (tileRefs.indexOf(element) < 0) {
      element.current.setLoaded = setLoaded;
      element.current.loaded = loaded;
      tileRefs.push(element);
    }

    // cleanup
    return () => {
      // remove the tile
      if (tileRefs.indexOf(element) >= 0) {
        tileRefs.splice(tileRefs.indexOf(element), 1);
      }
    };
  });

  // set title if no images

  if (!images) {
    children = <Text large centered white>{titleCompact}</Text>
  }


  return <Card ref={element} imageUrl={loaded && images && images['Poster Art'].url} key={title} to={url}>
    <Image>{children}</Image>
    <Text cardTitle>{title}</Text>
  </Card>
}

const Card = styled(Link)`

&:link > *,
&:hover > *,
&:visited > *,
&:active > * {
  color: initial;
}

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

const Image = styled.div`

display: flex;
background-color: rgba(0,0,0,0.8);
width: 67px;
height: 100px;
${({ imageUrl }) => {
    return imageUrl
      ? `
  background-image: url(assets/placeholder.png), url(${imageUrl});
  background-size: contain, cover;
  background-repeat: no-repeat;
  background-position: center;
`
      : `
  background-image: url(assets/placeholder.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`
  }}

@media (min-width: 769px) {
  width: 134px;
  height: 200px;
}
`;

export default Tile;

// "title": "Wolf Creek",
// "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
// "programType": "series",
// "images": {
//   "Poster Art": {
//     "url": "https://streamcoimg-a.akamaihd.net/000/128/61/12861-PosterArt-ec32a81986a45eac7e080112075ab466.jpg",
//     "width": 1000,
//     "height": 1500
//   }
// },
// "releaseYear": 2016
