import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';
import background from '../assets/images/background.svg';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');

    * {
      margin: 0;
      padding:0;
      outline: 0;
      box-sizing:border-box;
      font-family: Roboto, sans-serif;
    }

    html, body, #root {
      min-height: 100%;
    }

    body{
      background: #0D2020 url(${background}) no-repeat center top;
      -webkit-font-smoothing: antialiased !important;
    }

    #root {
      max-width: 1020px;
      margin: 0 auto;
      padding: 0 20px 50px;
    }

    border-style, -moz-user-input, button {
      color: #222;
      font-size: 14px;
      font-family: Roboto, sans-serif;
    }

    button{
      cursor: pointer;
    }
`;
