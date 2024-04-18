import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'

import { Column, Container, PoliticasText, JaPossuoText, Row, Title, TitleLogin, Wrapper, SubTitleLogin, LinkText } from './styles'
import { iFormData } from './types'
import { useAuth } from '../../hooks/useAuth'

const schema = Yup.object({
    name: Yup.string().required('Este campo é obrigatório'),
    email: Yup.string().email('Digite um e-mail válido').required('Este campo é obrigatório'),
    password: Yup.string().min(3, 'minimo de 3 caracteres').required()
}).required()

const Cadastro = () => {

    const { handleLogin  } = useAuth()

    const { control, handleSubmit, formState: { errors }} = useForm<iFormData>({
        resolver: yupResolver(schema),
        mode: 'onChange',
    })

    const onSubmit = async (formData: iFormData )=> {
        handleLogin(formData)
    }

    return (
        <div>
            <Header/>
            <Container>
                <Column>
                    <Title>
                        A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                    </Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleLogin>
                            Comece agora grátis
                        </TitleLogin>
                        <SubTitleLogin>
                            Crie sua conta e make the change._
                        </SubTitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input name="nome" errorMessage={errors?.name?.message} control={control} placeholder='nome'/>
                            <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder='E-mail'/>
                            <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder='Senha' type='password'/>
                            <Button title="Criar minha conta" variant='secondary' type="submit" />
                        </form>
                        <Row>
                            <PoliticasText>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</PoliticasText>
                        </Row>
                        <Row>
                            <JaPossuoText>Já tenho conta. <LinkText href="http://localhost:3000/login">Fazer login</LinkText></JaPossuoText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </div>
    )
}

export { Cadastro }