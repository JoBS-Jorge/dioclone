import { useNavigate } from 'react-router-dom'

import bannerImage from '../../assets/banner.png'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'

import { Container, TextContent, Title, TitleHighLight } from './styles'

const Home = () => {

    const navigate = useNavigate()

    const handleClickSign = () => {
        navigate('/login')
    }

    return (
        <div>
            <Header/>
            <Container>
                <div>
                    <Title>
                        <TitleHighLight>
                            Implemente
                            <br/>
                        </TitleHighLight>
                        O seu futuro global agora!
                    </Title>
                    <TextContent>
                        Domine as tecnologias utilizadas pelas empresas mais inovdoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
                    </TextContent>
                    <Button title="Começar agora" variant='secondary' onClick={handleClickSign}/>
                </div>
                <div>
                    <img src={bannerImage} alt='Imagem Principal' width="600"/>
                </div>
            </Container>
        </div>
    )
}

export { Home }