import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'

import { Column, Container, EsqueciText, CriarText, Row, Title, TitleLogin, Wrapper, SubTitleLogin } from './styles'
import { iFormData } from './types'
import { useAuth } from '../../hooks/useAuth'

const schema = Yup.object({
    email: Yup.string().email('Digite um e-mail válido').required('Este campo é obrigatório'),
    password: Yup.string().min(3, 'minimo de 3 caracteres').required()
}).required()

const Login = () => {
    const { handleLogin } = useAuth()

    const { control, handleSubmit, formState: { errors }} = useForm<iFormData>({
        resolver: yupResolver(schema),
        mode: 'onChange',
    })

    const onSubmit = async (formData: iFormData) => {
        handleLogin(formData)
    }

    return (
        <div>
            <Header/>
            <Container>
                <Column>
                    <Title>
                        A plataforma para você aprender com experts, dominar as principas tecnologias e entrar mais rápido nas empresas mais desejadas.
                    </Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleLogin>
                            Acesse a sua conta
                        </TitleLogin>
                        <SubTitleLogin>
                            Faça seu Login e make the change._
                        </SubTitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder='E-mail'/>
                            <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder='Senha' type='password'/>
                            <Button title="Entrar" variant='secondary' type="submit" />
                        </form>
                        <Row>
                            <EsqueciText>Esqueci minha senha</EsqueciText>
                            <CriarText href='http://localhost:3000/cadastro'>criar conta</CriarText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </div>
    )
}

export { Login }