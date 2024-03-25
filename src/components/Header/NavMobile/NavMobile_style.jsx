import styled from "styled-components";
import { flex, responsive } from "../../../styles/mixins";

const BoxNavMobile = styled.nav`
    div{
        position:fixed;
        top: 10vh;
        left: 0;
        z-index: 999;
        overflow: hidden;
        width: 100%;
        height: 100vh;
        background: rgba(0,0,0,0.9);
        ${flex}
        flex-direction: column;
        justify-content: start;
        gap: 4rem;
        padding: 4rem;
        display: ${props => props.$active ? 'flex' : 'none'};
        a {
            font-size: 2rem;
            font-weight: bold;
            color: #FFC72C;
            padding: 1rem;
        }
        ${responsive.mobileSmall`
            top: 15vh
        `}
    }
`
export default BoxNavMobile