import React from 'react';

import Modal from '../../components/organisms/Modal';
import {
  Container,
  Headline,
  Button,
  DropZone,
  Bold,
  Label,
  Upload,
} from './styles';
import {history} from '../../store';
import Button from '../../components/atoms/Button';

import {Icon} from '../../components/atoms/Icon';

export default () => {
  const _onExit = () => {
    history.goBack();
  };

  return (
    <Modal isOpen={true} onExit={_onExit}>
      <Container>
        <DropZone>
          <Upload icon={Icon.CLOUD} />
          <Label>
            <Bold>Chose a file</Bold> or drag it here.
          </Label>
        </DropZone>
        {/* <Headline>Upload Schema</Headline>
        <div></div>
        <Button>Send File</Button>
        <div>Last reports uploaded</div> */}
      </Container>
    </Modal>
  );
};
