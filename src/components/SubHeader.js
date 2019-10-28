import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

function Stickyable({ className, children }) {

  var ele = useRef();
  const [position, setPosition] = useState('absolute');

  useEffect(function sticky() {
    requestAnimationFrame(function setPositionHandler() {
      window.scrollY > 60 ? setPosition('fixed') : setPosition('absolute')
      requestAnimationFrame(setPositionHandler);
    });
  },
  // run once
  []);

  return <div style={{height: 56}}><div
    ref={ele}
    style={position === 'fixed' ? {
      position,
      top: 0,
    } : {
      position,
      top: 60,
      }}
    className={className}>{children}</div></div>
}

const SubHeader = styled(Stickyable)`
  background: rgb(57, 57, 57);
  color: white;
  font-size: 20px;
  text-shadow: 1px 1px 2px #666666;

  z-index: 1;
  right: 0;
  left: 0;

  height: 56px;
  display:flex;
  align-items: center;

  box-shadow: 0px 2px 5px rgba(0,0,0,0.3);

  @media (min-width: 769px) {
    font-size: 25px;
  }
`;

export default SubHeader;
