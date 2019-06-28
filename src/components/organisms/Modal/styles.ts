import styled from 'styled-components';
import Icon from '../../atoms/Icon';

export const Background = styled.div`
  background: rgba(64, 81, 91, 0.8);
  bottom: 0;
  left: 0;
  overflow: auto;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  background-color: white;
  border-radius: 5px;
  max-width: 100%;
`;

export const Head = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

export const X = styled(Icon)`
  cursor: pointer;
  position: absolute;
  right: 24px;
  top: 24px;
  path {
    fill: #40515b;
  }
`;

export const H1 = styled.h1`
  color: #40515b;
  font-size: 24px;
  font-weight: 400;
  margin: 24px 0;
`;
