import styled from "styled-components";
import { flex, responsive } from "../../styles/mixins";

export const BoxMain = styled.main`
    background-color: #FFC72C;
`

export const IntroProduct = styled.section`
    & > :first-child {
        ${flex}
        ${responsive.mobile`
            flex-direction: column-reverse
        `}
    }
`

export const BoxImage = styled.div`
    width: 100%;
    max-width: 32.4rem;
`
export const BoxText = styled.div`
    width: 100%;
    max-width: 53rem;
    h1{
        font-size: 5rem;
        span{
            color: red;
        }
        ${responsive.mobile`
            font-size: 4rem;
            text-align: center;
            margin-bottom: 4rem
        `}
            ${responsive.tablet`
            font-size: 4.2rem;
        `}
    }
    ${responsive.tablet`
        max-width: 40rem;
    `}
`

export const BoxProducts = styled.div`
    width: 100%;
    max-width: 40rem;
    ${flex}
    gap: 4rem;
    margin: 6rem auto;
    ${responsive.mobile`
       justify-content: space-around;
       margin: 4rem auto;
    `}
`

export const BoxProduct = styled.div`
    width: 40vw;
    cursor: pointer;
`

export const BoxPromotion = styled.section`
    background-color: #FEB706;
    h2 {
        text-align: center;
        font-size: 3.6rem;
    }
`

export const BoxCards = styled.div`
    width: 100%;
    ${flex}
    margin-top: 7rem;
    ${responsive.mobile`
        margin-top: 4rem;
        flex-direction: column;
        gap: 4rem;
    `}
      ${responsive.tablet`
        margin-top: 4rem;
        gap: 2rem;
    `}

`

export const Card = styled.div`
    width: 100%;
    max-width: 25rem;
    height: 30rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: start;
    gap: 2rem;
    background: #fff;
    border-radius: 2rem;
    img{
        border-radius: 1rem 1rem 0 0;
    }
    h3 {
        font-size: 2rem;
        color: #000;
        padding-left: 1rem;
    }
    button{
        background: #FFBC0D;
        border: none;
        border-radius: 1rem;
        padding: 1rem 2rem;
        cursor: pointer;
        
    }
`

export const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 2rem;
  background: rgba(0,0,0,0.8);
  position: fixed;
  top: 0;
  left: 0;
  padding: 2rem;
  z-index: 1000;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  .closeModal {
    cursor: pointer;
    position: absolute;
    right: 3rem;
    top: 1rem;
  }
`