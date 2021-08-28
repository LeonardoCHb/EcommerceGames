import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #252836;
        --white: #FFFFFFFF;
    }

    * {
        margin: 0;
        padding: 0;
    }

    html, body {
        height: 100%;
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
    }

    h1,h2,h3,h4,h5,h6, strong {
        font-weight: 500;
    }

    button {
        cursor: pointer;
    }

`
