import styled from "styled-components";
import { flex, responsive } from "../../styles/mixins";

export const BoxHeader = styled.header`
    height: 15vh;
    background-color: #fff;
    & > div {
        height: 100%;
        ${flex}

    }
    ${responsive.desktop`
        height: 12vh;
    
    `}
    ${responsive.tablet`
        height: 10vh;
    `}
       ${responsive.mobile`
        height: 10vh;
    `}
    ${responsive.mobileSmall`
        height: 15vh;
    `}

`
