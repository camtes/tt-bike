import React from "react"
import Header from "../Header/header"
import { Content, PageContainer } from "./styles"

const Footer = () => {
  return <span>Hecho por Carlos Campos</span>
}

const Layout = ({children} : any) => (
  <Content>
    <Header />
    <PageContainer>
      {children}
    </PageContainer>
    <Footer />
  </Content>
)

export default Layout
