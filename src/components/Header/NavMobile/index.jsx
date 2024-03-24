import { useState } from "react";

import BoxNavMobile from "./NavMobile_style";

import menuIcon from '../../../assets/menu-mobile.svg'
import closeMenuIcon from '../../../assets/close.svg'

export default function NavMobile() {
    const [menuActive, setMenuActive] = useState(false)

    const handleMenu = () => {
        setMenuActive(!menuActive)

        document.body.classList.toggle('open-modal')
    }
    return (
        <BoxNavMobile $active={menuActive}>
            {menuActive ? <img src={closeMenuIcon} alt="" onClick={handleMenu} /> : <img src={menuIcon} alt="icone menu mobile" onClick={handleMenu} />
            }

            <div>
                <a href="#">Baixe o App</a>
                <a href="#">Peça seu Méqui</a>
                <a href="#">Cardapio</a>
                <a href="#">Lançamentos</a>
            </div>
        </BoxNavMobile>
    )
}