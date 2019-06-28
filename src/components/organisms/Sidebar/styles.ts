import styled from 'styled-components';
import Icon from '../../atoms/Icon';

interface ContainerProps {
  collapsed: boolean;
}

export const Container = styled.div<ContainerProps>`
  background-color: #586573;
  display: block;
  height: 100%;
  position: relative;
  transition: all 0.2s linear;
  width: ${({collapsed}) => (collapsed ? '50px' : '300px')};
`;

export const Test = styled.div`
  overflow: hidden;
  transition: width 0.2s linear;
  width: ${({collapsed}) => (collapsed ? '0' : '100%')};
`;

export const SmallButton = styled.div`
  background-color: #3b434d;
  border-radius: 50%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);
  cursor: pointer;
  height: 30px;
  padding: 7px;
  position: absolute;
  right: -15px;
  top: 70px;
  transition: all 0.3s ease;
  width: 30px;
  z-index: 1;
`;

export const Wrapper = styled.div`
  padding: 25px;
  flex-direction: column;
  transition: opacity 0.2s linear;
  overflow: hidden;
  width: 300px;
  display: flex;
`;

export const Name = styled.h2`
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  margin: 24px 0;
  text-align: center;
`;

export const List = styled.ul`
  list-style: none;
  margin: 0 0 0 24px;
  padding: 0;
`;

export const NavItem = styled.li`
  align-items: center;
  background-color: ${props => (props.isActive ? '#f5f6f8' : 'transparent')};
  border-radius: 4px 0 0 4px;
  color: ${props => (props.isActive ? '#4d5a68' : '#dde0e3')};
  cursor: pointer;
  display: flex;
  font-size: 16px;
  height: 35px;
  padding-left: 16px;
  transition: all 0.3s;
`;

export const SwitchIcon = styled(Icon)`
  color: #ffffff;
`;
