import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

 * {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
 }

 *:focus {
   outline: 0;
 }

 html, body, #root {
   height: 100%;
 }

 body {
   -webkit-font-smoothing: antialiased;
 }

 body, input, button {
   font: 14px 'Roboto', sans-serif;
 }

 a {
   text-decoration: none;
 }

 ul {
   list-style: none;
 }

 button {
   cursor: pointer;
 }

 /* scroll */

 ::-webkit-scrollbar {
  width: 7px;
  height: 7px;
}
::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}
::-webkit-scrollbar-thumb {
  background: #636269;
  border: 0px none #ffffff;
  border-radius: 50px;
}
::-webkit-scrollbar-thumb:hover {
  background: #636269;
}
::-webkit-scrollbar-thumb:active {
  background: #636269;
}
::-webkit-scrollbar-track {
  background: #fff;
  border: 0px none #ffffff;
  border-radius: 50px;
}
::-webkit-scrollbar-track:hover {
  background: #fff;
}
::-webkit-scrollbar-track:active {
  background: #fff;
}
::-webkit-scrollbar-corner {
  background: transparent;
}
/* style editor */
.ce-block__content {
    position: relative;
    max-width: 750px;
    text-align: left;
    margin: 0 50px;
}
.ce-toolbar__content {
    max-width: 100vw;
    margin-left: 50px;
}
/* embed */
.embed-tool__content {
    width: 700px !important;
    height: 394px !important;
  }
  .ce-block__content {
    max-width: 700px !important;
  }
`;
