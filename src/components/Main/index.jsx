import { useEffect, useState } from "react";

import Container from "../container";
import * as Style from './Main_style'

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
        <Style.BoxMain>
            {renderModal ? <Style.Modal>
                <img src={closeModal} alt="" className="closeModal" onClick={handleModal} />
                {window.innerWidth < 540 ? <img src={imageMobileModal} alt="imagem desconto app" /> : <img src={imageModal} alt="imagem desconto app" />}

            </Style.Modal> : null}
            <Style.IntroProduct>
                <Container>
                    <Style.BoxImage>
                        <img src={selectProduct} alt="produto macdonalds" />
                    </Style.BoxImage>

                    <Style.BoxText>
                        <h1>
                            BATEU AQUELA <span>#FOME</span> DE <span>MÉQUI?</span>
                        </h1>
                    </Style.BoxText>
                </Container>

                <Style.BoxProducts>
                    {products.map((product, index) => (
                        <Style.BoxProduct key={index}>
                            <img src={product} alt="produto macdonalds" onClick={handleProduct} />
                        </Style.BoxProduct>
                    ))}
                </Style.BoxProducts>
            </Style.IntroProduct>

            <Style.BoxPromotion>
                <Container>
                    <h2>Promoção</h2>

                    <Style.BoxCards>
                        {infoCards.map((card, index) => (
                            <Style.Card key={index}>
                                <img src={card.image} alt="card macdonalds" />
                                <h3>{card.title}</h3>

                                <button>Clique aqui</button>
                            </Style.Card>
                        ))}
                    </Style.BoxCards>
                </Container>
            </Style.BoxPromotion>
        </Style.BoxMain>
    )
}