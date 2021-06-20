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
  tw`container lg:mx-52 lg:py-10 text-center text-white`,
  css`
    & {
      background-color: rgba(205, 211, 208, 0.3);
      backdrop-filter: blur(4px);
    }
  `,
])

const Hero = () => {
  return (
    <Background>
      <GlassContainer>
        <h1 tw="text-5xl capitalize">hey there! 👋</h1>
        <p tw="text-xl lg:mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi doloribus nam aliquam cum dolorum. Provident quis eveniet magnam sed aut vel, beatae voluptate quisquam corporis labore sequi, vitae esse exercitationem.
        Nihil minima eos aliquid iusto, enim cum architecto, doloribus porro quo expedita reprehenderit? Corporis minima, et saepe necessitatibus, a sint totam quas ea quos, libero optio? Cum maiores fuga voluptatum.
        </p>
      </GlassContainer>
    </Background>
  )
}

export default Hero
