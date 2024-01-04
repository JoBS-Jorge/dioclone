import React from 'react'

import { CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture } from './styles'

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src='https://img.olhardigital.com.br/wp-content/uploads/2019/07/20190722050633.jpg'/>
        <Content>
            <UserInfo>
                <UserPicture src='https://avatars.githubusercontent.com/u/127455593?v=4'/>
                <div>
                    <h4>Jorge Braz</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso de HTML e CSS</h4>
                <p>Projeto feito no curso de HTML e CSS no bootcamp dio do global avanade... <strong>saiba mais</strong> </p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #JAVASCRIPT</h4>
                <p>
                    10 curtidas
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export { Card }