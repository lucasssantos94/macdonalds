import Container from "../container";
import { BoxCopy, BoxFooter, BoxStores } from "./Footer.style";

import logo from '../../assets/logo.svg'
import googlePlay from '../../assets/google-play.png'
import appStore from '../../assets/apple-store.png'

export default function Footer() {
    return (
        <BoxFooter>
            <Container>
                <BoxCopy>
                    <div className="logo-footer">
                        <img src={logo} alt="" />
                    </div>

                    <p>© McDonald’s 2024</p>
                </BoxCopy>

                <BoxStores>
                    <a href="https://play.google.com/store/apps/details?id=com.mcdo.mcdonalds" target="_blank"><img src={googlePlay} alt="" /></a>
                    <a href="https://apps.apple.com/br/app/mcdonalds-cupons-e-delivery/id1114009187" target="_blank"><img src={appStore} alt="" /></a>
                </BoxStores>
            </Container>
        </BoxFooter>
    )
}