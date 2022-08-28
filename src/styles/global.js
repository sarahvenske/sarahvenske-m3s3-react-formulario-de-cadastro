import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root{
        --color-primary: #FF577F;
        --color-primary-focus: #FF427F;
        --color-primary-negative: #59323F;
        --color-grey-0: #F8F9FA;
        --color-grey-1: #868E96;
        --color-grey-2: #343B41; 
        --color-grey-3: #212529;
        --color-grey-4: #121214;
        --color-success: #3FE864;
        --color-negative: #E83F5B; 
        --color-white: #FFFFFF;
        --color-black: #000000;    
    }
    
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    .window{
        overflow: auto;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        font-family: 'Inter', sans-serif;
        background-color: var(--color-black);
        padding-top: 10px;
    }
    
    .boxLogin{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }

    .boxRegister{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }

    @media (max-height: 490px) {
        .boxLogin{
            justify-content: flex-start;
        }
    }
    
    @media (min-height: 980px) {
        .boxRegister{
            justify-content: flex-start;
        }
    }
`;

