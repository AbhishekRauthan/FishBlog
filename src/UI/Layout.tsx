import React, { Children, FC } from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import "../style.css"

interface Props {}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
