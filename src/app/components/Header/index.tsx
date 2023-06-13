"use client"

import React, { useState } from "react"
import {
  Header,
  HeaderButtonsWrapper,
  HeaderSectionsWrapper,
  LoginHeaderButton,
  LogoWrapper,
  MobileButtonsWrapper,
  MobileMenuNavWrapper,
  MobileModalMenuContainer,
  SignUpHeaderButton,
} from "./styles"
import ShortlyLogo from "../icons/ShortlyLogo"

const HeaderComponent = () => {
  const [hamburguerMenu, setHamburguerMenu] = useState(false)

  const handleToggleMenu = () => {
    setHamburguerMenu(!hamburguerMenu)
  }

  return (
    <Header>
      <HeaderSectionsWrapper>
        <LogoWrapper>
          <ShortlyLogo color={"#34313D"} />
          <nav>
            <a href="#">Features</a>
          </nav>
          <nav>
            <a href="#">Pricing</a>
          </nav>
          <nav>
            <a href="#">Resources</a>
          </nav>
        </LogoWrapper>

        <HeaderButtonsWrapper
          className={`header__hamburger ${hamburguerMenu && "click"}`}
          onClick={handleToggleMenu}
        >
          <div>
            <div className="bar hamburger__bar1"></div>
            <div className="bar hamburger__bar2"></div>
            <div className="bar hamburger__bar3"></div>
          </div>
          <LoginHeaderButton>Login</LoginHeaderButton>
          <SignUpHeaderButton>Sign Up</SignUpHeaderButton>
        </HeaderButtonsWrapper>
      </HeaderSectionsWrapper>

      <MobileModalMenuContainer className={hamburguerMenu ? "active" : "inactive"}>
        <MobileMenuNavWrapper>
          <nav>
            <a href="#">Features</a>
          </nav>
          <nav>
            <a href="#">Pricing</a>
          </nav>
          <nav>
            <a href="#">Resources</a>
          </nav>
        </MobileMenuNavWrapper>
        <MobileButtonsWrapper>
          <LoginHeaderButton>Login</LoginHeaderButton>
          <SignUpHeaderButton>Sign Up</SignUpHeaderButton>
        </MobileButtonsWrapper>
      </MobileModalMenuContainer>
    </Header>
  )
}

export default HeaderComponent
