import React, {useState} from 'react';

import Button from '../../atoms/Button';
import {Container, SmallButton, Wrapper, Name, Test} from './styles';

const initialState = {
  collapsed: false,
};

export default () => {
  const [state, setState] = useState(initialState);

  const _handleClick = () => {
    setState({collapsed: !state.collapsed});
  };

  const openModal = () => {};

  return (
    <Container collapsed={state.collapsed}>
      <SmallButton onClick={_handleClick} />
      <Test collapsed={state.collapsed}>
        <Wrapper>
          <Button mode={false ? 'disabled' : 'default'} onClick={openModal}>
            Upload Report
          </Button>
          <Name>Oklahoma</Name>
        </Wrapper>
      </Test>
    </Container>
  );
};
