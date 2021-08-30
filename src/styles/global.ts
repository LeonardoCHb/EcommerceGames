import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #e8f1ff;
        --secondaryColor: #f5f9ff;
        --barColor: #1b3357;
        --blue: #00379e;
    }

    * {
        margin: 0;
        padding: 0;
        text-decoration: none;
    }

    html, body {
        height: 100%;
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Montserrat', sans-serif;
        font-weight: 300;
    }

    h1,h2,h3,h4,h5,h6, strong {
        font-weight: 500;
    }
    a, a:visited, a:hover, a:active {
        color: inherit;
    }

    button {
        cursor: pointer;
    }

    ul {
        list-style-type: none;
    }


`
