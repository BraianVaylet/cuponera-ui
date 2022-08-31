import Link from "next/link"

import ROUTES from "@/utils/routes"

import { Button } from "@/components/Button"
import { UserIconSax, WalletIconSax } from "@/components/Icon"
import { LogoAccessNavbarStyled, NavbarStyled, UserAccessNavbarStyled } from "@/components/Navbar/Navbar.styled"

const Navbar = () => {
  return (
    <NavbarStyled>
      <Link href={ROUTES.home}>
        <LogoAccessNavbarStyled>LOGO</LogoAccessNavbarStyled>
      </Link>
      <UserAccessNavbar />
    </NavbarStyled>
  )
}

const UserAccessNavbar = () => {
  return (
    <UserAccessNavbarStyled>
      <Button>
        <UserIconSax size='32' />
      </Button>
      <Button>
        <WalletIconSax size='32' />
      </Button>
    </UserAccessNavbarStyled>
  )
}

export default Navbar