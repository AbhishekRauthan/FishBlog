import React from "react"
import tw from "twin.macro"
import styled, { css } from "styled-components"

const Background = styled.section(() => [
  tw`flex md:flex-row items-center justify-center`,

  css`
    & {
      height: 100vh;
      background-image: url("./images/bg-img.jpg");
      background-size: cover;
      background-position: top;
    }
  `,
])

const GlassContainer = styled.div(() => [
  tw`container lg:pt-10`,
  css`
    & {
      background-color: rgba(255, 255, 255, 0.7);
    }
    @supports (
      (-webkit-backdrop-filter: blur(4rem)) or (backdrop-filter: blur(4rem))
    ) {
      & {
        background-color: rgba(255, 255, 255, 0.7 +'
        ');
        -webkit-backdrop-filter: blur(8rem);
        backdrop-filter: blur(4rem);
      }
    }
  `
])

const Hero = () => {
  return (
    <Background>
      <GlassContainer>
        <h1 tw="text-4xl text-center ">👋 Greetings, fellow enthusiast</h1>
      </GlassContainer>
    </Background>
  )
}

export default Hero
