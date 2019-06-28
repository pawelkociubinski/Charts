// Dependencies
import React, {useEffect, createRef} from 'react';
import {createPortal} from 'react-dom';

// Styles
import {Background, Container, Head, X, H1} from './styles';
import console = require('console');

export default props => {
  const portalNode = document.getElementById('portal');
  const modal = document.createElement('div');
  const container = createRef();

  const _handleMouseClickOutside = event => {
    if (container.current.contains(event.target)) {
      return;
    }

    props.onExit();
  };

  const _handleClick = () => {
    props.onExit();
  };

  useEffect(() => {
    document.addEventListener('mousedown', _handleMouseClickOutside);
    portalNode.appendChild(modal);

    return () => {
      document.removeEventListener('mousedown', _handleMouseClickOutside);
      portalNode.removeChild(modal);
    };
  });

  return createPortal(
    <Background>
      <Container ref={container}>
        <Head>
          {/* <X icon="X" onClick={_handleClick} /> */}
          <H1>{props.title}</H1>
        </Head>
        {props.children}
      </Container>
    </Background>,
    modal
  );
};
