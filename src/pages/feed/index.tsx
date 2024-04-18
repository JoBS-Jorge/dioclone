import { useContext } from 'react'
import { Card } from '../../components/Card'
import { Header } from '../../components/Header'
import { UserInfo } from '../../components/UserInfo'

import { Container, Column, Title, TitleHighLight } from './styles'

const Feed = () => {

    return (
        <>
            <Header />
            <Container>
                <Column flex={3}>
                    <Title>Feed</Title>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Column>
                <Column flex={1} >
                    <TitleHighLight># RANKING 5 TOP DA SEMANA</TitleHighLight>            
                    <UserInfo percentual={35} nome="Jorge Braz" image="https://avatars.githubusercontent.com/u/127455593?v=4" />
                    <UserInfo percentual={80} nome="Jorge Braz" image="https://avatars.githubusercontent.com/u/127455593?v=4" />
                    <UserInfo percentual={100} nome="Jorge Braz" image="https://avatars.githubusercontent.com/u/127455593?v=4" />
                </Column>                
            </Container>
        </>
    )
}

export { Feed }