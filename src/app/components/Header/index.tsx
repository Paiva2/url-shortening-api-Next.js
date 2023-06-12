"use client";

import React from "react";
import {
  Header,
  HeaderButtonsWrapper,
  HeaderSectionsWrapper,
  LoginHeaderButton,
  LogoWrapper,
  SignUpHeaderButton,
} from "./styles";
import ShortlyLogo from "../icons/ShortlyLogo";

const HeaderComponent = () => {
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

        <HeaderButtonsWrapper>
          <LoginHeaderButton>Login</LoginHeaderButton>
          <SignUpHeaderButton>Sign Up</SignUpHeaderButton>
        </HeaderButtonsWrapper>
      </HeaderSectionsWrapper>
    </Header>
  );
};

export default HeaderComponent;
