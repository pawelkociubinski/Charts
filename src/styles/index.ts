import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  html, body {
    font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #F5F6F8;
  }

  .fade-enter {
    opacity: 0;
    z-index: 1;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
  }
`;
