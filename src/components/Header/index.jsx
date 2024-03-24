import { useEffect, useState } from "react";

import Container from "../container";
import { BoxHeader } from "./Header_style";
import NavWeb from "./NavWeb";
import NavMobile from "./NavMobile";

import logo from '../../assets/logo.svg'


export default function Header() {
    const [screenSize, setScreenSize] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            setScreenSize(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }

    }, [])

    return (
        <BoxHeader>
            <Container>
                <a href="/">
                    <img src={logo} alt="Logo MacDonald´s" />
                </a>

                {screenSize < 540 ? <NavMobile /> : <NavWeb />}

            </Container>
        </BoxHeader>
    )
}