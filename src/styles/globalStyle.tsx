import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset}

    :root {
        --color-bg : #ADD8E6;
    }

    *, *::before, *::after {
        box-sizing: border-box;
    }

    html {
        height : 100%;
    }

    body {
        display: flex;
        justify-content: center;
        align-items: center;

        margin: 0;

        width: 100vw;
        height : 100vh;

        font-size: 1.2rem;
        background-color: #ffffff;

    }

    #root {
        display: flex;
        width: 100%;
        height: 100%;
        overflow-y: auto;
    }

 
`;
