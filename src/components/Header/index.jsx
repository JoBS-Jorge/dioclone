import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logodio.png'
import { Button } from '../Button'
import { 
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
 } from './styles'

const Header = ({autenticado}) => {

    const navigate = useNavigate()

    const handleClickSign = () => {
        navigate('/login')
    }

    const handleClickSignUp = () => {
        navigate('/cadastro')
    }

  return (
    <Wrapper>
        <Container>
        <Row>
                <img src={logo} width="57" alt='Logo Dio' />
                {autenticado? (
                    <>
                        <BuscarInputContainer>
                        <Input placeholder='Buscar...' />
                        </BuscarInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                    </>
                    ) : null}

            </Row>
            <Row>
                {autenticado ? (
                    <UserPicture src='https://avatars.githubusercontent.com/u/127455593?v=4' />
                ): (
                    <>
                    <MenuRight href='http://localhost:3000/'>
                    Home
                    </MenuRight>
                    <Button title="Entrar" onClick={handleClickSign}/>
                    <Button title="Cadastrar" onClick={handleClickSignUp}/>
                    </>
                )}

            </Row>
        </Container>
    </Wrapper>
  )
}

export { Header}