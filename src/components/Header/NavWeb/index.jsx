import BoxNavWeb from "./NavWeb_style"

import iconApp from '../../../assets/app.png'
import iconDelivery from '../../../assets/app-delivery.png'

export default function NavWeb() {
    return (
        <BoxNavWeb>
            <a>
                <img src={iconApp} alt="icon download app mac" />
                <p>Baixe o App</p>
            </a>

            <a>
                <p>Peça seu Méqui</p>
                <img src={iconDelivery} alt="icon delivery" />
            </a>
        </BoxNavWeb>
    )
}