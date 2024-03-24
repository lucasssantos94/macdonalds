import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Inter", sans-serif;
    }

    html {
        font-size: 62.5%;
    }

    body{
        color: #fff;
    }

    img {
        max-width: 100%;
    }

    a{
        text-decoration: none;
    }

    .open-modal {
        overflow: hidden;
    }


`

export default GlobalStyle