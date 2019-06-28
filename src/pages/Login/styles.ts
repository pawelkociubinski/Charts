import styled from 'styled-components';
import Button from '../../components/atoms/Button';

export const Container = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

export const Wrapper = styled.div`
  align-items: center;
  background-color: #ffffff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  height: 460px;
  justify-content: center;
  padding: 50px;
  width: 500px;
  justify-content: space-between;
`;

export const Submit = styled(Button)`
  margin: 30px auto 10px;
  display: block;
`;

export const Error = styled.div`
  background-color: #d64242;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  text-align: center;
`;

export const Headline = styled.h1`
  margin: 0;
  padding: 0;
`;

export const Form = styled.div`
  width: 100%;
`;
