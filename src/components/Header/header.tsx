import Link from "next/link"
import { HeaderContainer, MenuContainer, MenuItem, TitleContainer } from "./styles"

const Menu = () => {
  return (
    <>
      <MenuItem><Link href="/">Inicio</Link></MenuItem>
      <MenuItem><Link href="/events">Eventos</Link></MenuItem>
    </>
  )
}

const Header = () => {
  return (
    <HeaderContainer>
      <TitleContainer>TT-BIKE</TitleContainer>
      <MenuContainer>
        <Menu />
      </MenuContainer>
    </HeaderContainer>
  )
}

export default Header
