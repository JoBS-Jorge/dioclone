import { Link, useNavigate } from 'react-router-dom'
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
import { useAuth } from '../../hooks/useAuth'

const Header = () => {

    const navigate = useNavigate()
    const { user, handleSignOut  } = useAuth()

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
            <Link to='/' >
                <img src={logo} width="57" alt='Logo Dio' />   
            </Link> 
                
                {user.id? (
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
                {user.id ? (
                    <>
                        <p> {user.name} </p>
                        <UserPicture src='https://avatars.githubusercontent.com/u/127455593?v=4' />
                        <a href='#' onClick={handleSignOut}>sair</a>
                    </>
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