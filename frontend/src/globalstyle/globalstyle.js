import { createGlobalStyle } from "styled-components";

const Globalstyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .App{
    background-color: #000;
  }
  :root {
    --font10 : 10px;
    --font12 : 12px;
    --font14 : 14px;
    --font16 : 16px;
    --font20 : 20px;
    --font24 : 24px;
    --font32 : 32px;
    --font36 : 36px;
    --font48 : 48px;

    --background : #000;
    --font : #fff;
    --green : #25BF62;
    --red : #E36D6B;
    --homepage : #81A7DD;
    --border : #25BF62;
    --small-font : #BABABA;
    --address : #5A5A5A;
    --book-mark : #D9D9D9;
  }
`;

export default Globalstyle;