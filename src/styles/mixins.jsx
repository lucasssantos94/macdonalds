import { css } from "styled-components"

const devices = {
    desktop: '1440px',
    laptop: '1140px',
    tablet: '960px',
    mobile: '540px'
}

export const responsive = {
    // resolução maiores que 1440px
    desktop: (...args) => css`
        @media screen and (min-width: ${devices.desktop}){
            ${css(...args)}
        }
    `,
    // resolução entre 1140px e 1440px
    laptop: (...args) => css`
        @media screen and (max-width: ${devices.desktop}) and (min-width: ${devices.laptop}){
            ${css(...args)}
        }
    `,
    // resolução entre 960px e 1140px
    tabletLarge: (...args) => css`
        @media screen and (max-width: ${devices.laptop}) and (min-width: ${devices.tablet}){
            ${css(...args)}
        }
    `,
    // resolução entre 540px e 960px
    tablet: (...args) => css`
        @media screen and (max-width: ${devices.tablet}) and (min-width: ${devices.mobile}){
            ${css(...args)}
        }
    `,

    // resolução até 540px
    mobile: (...args) => css`
        @media screen and (max-width: ${devices.mobile}){
            ${css(...args)}
        }
    `
}

export const flex = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
`