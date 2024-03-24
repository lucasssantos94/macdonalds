import Container from "../container";
import { BoxCards, BoxImage, BoxMain, BoxProduct, BoxProducts, BoxPromotion, BoxText, Card, IntroProduct, Modal } from "./Main_style";
import { useEffect, useState } from "react";

import bigMac from '../../assets/bigmac.svg'
import batata from '../../assets/batata.png'
import sorvete from '../../assets/sorvete.png'
import card1 from '../../assets/card1.png'
import card2 from '../../assets/card2.png'
import card3 from '../../assets/card3.png'
import imageModal from '../../assets/cupom.png'
import imageMobileModal from '../../assets/cupom-mobile.png'
import closeModal from '../../assets/close.svg'

export default function Main() {
    const products = [bigMac, batata, sorvete]
    const [selectProduct, setSelectProduct] = useState(bigMac)
    const [renderModal, setRenderModal] = useState(false)

    const handleProduct = (event) => setSelectProduct(event.target.src)

    const infoCards = [
        {
            image: card1,
            title: 'Que tal um #MéquiNoSofá?'
        },
        {
            image: card2,
            title: 'venha conhecer nossa nova loja'
        },
        {
            image: card3,
            title: 'Confira as medidas que o Méqui adotou!'
        }
    ]

    const handleModal = () => {
        setRenderModal(false)
        document.body.classList.remove('open-modal')
    }

    useEffect(() => {
        setTimeout(() => {
            setRenderModal(true)
            document.body.classList.add('open-modal')
        }, 3000)

    }, [])

    // document.body.style.opacity = 0.2
    return (
        <BoxMain>
            {renderModal ? <Modal>
                <img src={closeModal} alt="" className="closeModal" onClick={handleModal} />
                {window.innerWidth < 540 ? <img src={imageMobileModal} alt="" /> : <img src={imageModal} alt="" />}

            </Modal> : null}
            <IntroProduct>
                <Container>
                    <BoxImage>
                        <img src={selectProduct} alt="" />
                    </BoxImage>

                    <BoxText>
                        <h1>
                            BATEU AQUELA <span>#FOME</span> DE <span>MÉQUI?</span>
                        </h1>
                    </BoxText>
                </Container>

                <BoxProducts>
                    {products.map((product, index) => (
                        <BoxProduct key={index}>
                            <img src={product} alt="" onClick={handleProduct} />
                        </BoxProduct>
                    ))}
                </BoxProducts>
            </IntroProduct>

            <BoxPromotion>
                <Container>
                    <h2>Promoção</h2>

                    <BoxCards>
                        {infoCards.map((card, index) => (
                            <Card key={index}>
                                <img src={card.image} alt="" />
                                <h3>{card.title}</h3>

                                <button>Clique aqui</button>
                            </Card>
                        ))}
                    </BoxCards>
                </Container>
            </BoxPromotion>
        </BoxMain>
    )
}