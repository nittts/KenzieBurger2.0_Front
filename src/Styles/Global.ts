import { createGlobalStyle } from "styled-components";
import { IThemeData } from "../@Types/Styles";

const GlobalStyle = createGlobalStyle<IThemeData>`
   body {
        width: 100vw;
        min-height: 100vh;
        background-color: ${({ theme }) => {
          return theme.color[600];
        }};
    }

    * {
        box-sizing: border-box;
        transition: all 0.2s ease-in-out;
    }

    a, button {
        :hover {
            cursor: pointer;
        }
    }
    
    :root {
    /* ----------------------------------- // ----------------------------------- */
    /* Accent Colors */
    --color-primary-dark:#1f8b4d;
    --color-primary: #27ae60;
    --color-primary-light:#38d279;
    //
    --color-secondary-dark:#e41d1d;
    --color-secondary: #eb5757;
    --color-secondary-light:#f49f9f;


    /* ----------------------------------- // ---------------------------------- */
    /* Light mode colors */
    
    --light-color-1: #f5f5f5; //status Bar
    --light-color-2: #e0e0e0; //app Bar
    --light-color-3: #828282; //background
    --light-color-4: #333333; //cards/dialogs
   
    /* Dark mode colors */

    --dark-color-1: #000000 ; //status Bar
    --dark-color-2: #212121 ; //app Bar
    --dark-color-3: #303030 ; //background
    --dark-color-4: #f5f5f5 ; //cards/dialogs
        
    /* Feedback Pallete */
    
    --info: #155bcb;
    --success: #3FE864;
    --negative: #E83F5B;
    --warning: #ffcd07;    
    }   

    /* ----------------------------------- // ----------------------------------- */
    /* reset CSS */
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
    /* ----------------------------------- // ----------------------------------- */
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
    /* ----------------------------------- // ----------------------------------- */
`;

export default GlobalStyle;
