import styled from "styled-components";
import { flex, responsive } from "../../styles/mixins";

export const BoxFooter = styled.footer`
    & > div {
        height: 5vh;
        ${flex}
        ${responsive.mobile`
            height: 8vh;
            flex-direction: column;
            gap: 2rem;
        `}
    }
`
export const BoxCopy = styled.div`
        color: #000;
        ${flex}
        gap: 1.5rem;
        p {
            font-size: 1.6rem;
        }
        .logo-footer{
        width: 2.5rem;
    }
`

export const BoxStores = styled.div`
    display: flex;
    gap: 2rem;
    ${responsive.mobile`
        
        padding-bottom: 3rem;
    `}
`