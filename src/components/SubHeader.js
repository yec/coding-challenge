import React, { useState, useRef } from 'react';
import styled from 'styled-components';

function Stickyable({ className, children }) {

  var ele = useRef();
  const [position, setPosition] = useState('relative');

  // requestAnimationFrame(function setPositionHandler() {
  //   window.scrollY > ele.current.parentElement.getBoundingClientRect().top ? setPosition('fixed') : setPosition('relative')
  //   requestAnimationFrame(setPositionHandler);
  // });

  return <div
    ref={ele}
    style={position == 'fixed' ? {
      position,
      top: 0,
      right: 0,
      left: 0,
    } : {

      }}
    className={className}>{children}</div>
}

const SubHeader = styled(Stickyable)`
  background: rgb(57, 57, 57);
  color: white;
  font-size: 20px;
  text-shadow: 1px 1px 2px #666666;
  padding-top: 10px;
  padding-bottom: 10px;

  // height: 50px;
  // display:flex;
  // alignItems: flex-start;
  // justifyContent: start;
  box-shadow: 0px 2px 2px rgba(0,0,0,0.2);
`;

export default SubHeader;
