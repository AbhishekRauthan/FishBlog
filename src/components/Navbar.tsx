import React, { useState } from "react"
import tw from "twin.macro"
import { Link } from "gatsby"

interface Props {
  to: string
  text: string
}

const NavContainer = tw.nav`fixed w-full mx-auto flex flex-wrap flex-row items-center justify-between bg-darkBlue lg:px-6 text-base lg:pl-10 shadow-lg z-10`

const NavTitle = tw.div`font-title uppercase lg:text-3xl text-crimson`

const NavList = tw.div`flex justify-between lg:pr-4`

const NavItem = ({ to, text }: Props) => {
  return (
    <Link
      tw="text-2xl capitalize text-slate lg:py-4 hover:text-white border-b-2 border-transparent hover:border-crimson lg:px-4 transition duration-300 mr-5"
      to={`/${to}`}
    >
      {text}
    </Link>
  )
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <NavContainer>
      <NavTitle>
        <Link to="/">Fish Blog</Link>
      </NavTitle>
      <NavList>
        <NavItem to="about" text="about" />
        <NavItem to="contact" text="contact" />
      </NavList>
    </NavContainer>
  )
}

export default Navbar
