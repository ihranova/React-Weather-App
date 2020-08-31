import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    box-sizing:border-box;
}
body{
    font-size:20px;
    font-family: "AvertaStd-Thin";
    background:#fff;
    margin:0;
    padding:0;
    line-height:1;
}`;
export default GlobalStyle;