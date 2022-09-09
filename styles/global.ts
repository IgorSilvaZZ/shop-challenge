import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;500;600;700;800&display=swap');

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: Montserrat, sans-serif;
    }

    body {
        overflow-x: hidden;
    }
`;
