import styled from "styled-components";

import { flex } from "../../../styles/mixins";

const BoxNavWeb = styled.nav`
        ${flex}
    gap: 4rem;
    & > a {
        color: #000;
        ${flex}
        gap: 1rem;
        padding: 1.5rem;
        border-radius: 0.8rem;
        font-size: 1.4rem;
        padding: 0.875rem 1.6rem;
        cursor: pointer;
        &:last-child{
            font-weight: 700;
            background-color: #FFC72C;
        }
        img {
            width: 3rem;
        }
    }
`

export default BoxNavWeb