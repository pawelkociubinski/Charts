import React, {useState} from 'react';

import Button from '../../atoms/Button';
import {Icon} from '../../atoms/Icon';
import {push} from 'connected-react-router';
import {
  Container,
  SmallButton,
  Wrapper,
  Name,
  Test,
  SwitchIcon,
} from './styles';
import {useActions} from '../../../helpers/redux-helpers';

const initialState = {
  collapsed: false,
};

export default () => {
  const [state, setState] = useState(initialState);
  const actions = useActions({push});
  const inProgress = false;

  const _handleClick = () => {
    setState({collapsed: !state.collapsed});
  };

  const openModal = () => {
    actions.push('/dashboard/upload', {modal: true});
  };

  return (
    <Container collapsed={state.collapsed}>
      <SmallButton onClick={_handleClick}>
        <SwitchIcon icon={state.collapsed ? Icon.ARROW_LEFT : Icon.MENU} />
      </SmallButton>
      <Test collapsed={state.collapsed}>
        <Wrapper>
          <Button
            mode={inProgress ? 'disabled' : 'default'}
            onClick={openModal}
          >
            Upload Report
          </Button>
          <Name>Oklahoma</Name>
        </Wrapper>
      </Test>
    </Container>
  );
};
