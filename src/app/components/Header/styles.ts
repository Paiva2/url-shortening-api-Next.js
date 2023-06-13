import { styled } from "styled-components"

export const Header = styled.header`
  width: 100%;
  display: flex;
  font-size: 1.125rem;
  align-items: center;
  justify-content: space-around;
  padding-top: 3.125rem;

  @media (max-width: 750px) {
    flex-direction: column;
    padding-top: 2.25rem;
  }
`

export const MobileModalMenuContainer = styled.div`
  display: none;
  transition: visibility 0.4s ease-in-out, opacity 0.4s ease-out;

  @media (max-width: 750px) {
    display: inline-block;
  }

  &.active {
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;
    background: hsl(257, 27%, 26%);
    width: 85%;
    padding: 1.875rem;
    border-radius: 10px;
    height: 100%;

    @media (max-width: 750px) {
      display: flex;
      opacity: 1;
      visibility: visible;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  &.inactive {
    transition: visibility 0.4s ease-in-out, opacity 0.4s ease-out;
    opacity: 0;
    visibility: hidden;
    min-height: 362px;

    div:last-child {
      opacity: 0 !important;
      visibility: hidden !important;

      button {
        opacity: 0 !important;
        visibility: hidden !important;
      }
    }
  }
`

export const MobileMenuNavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.875rem;
  color: #fff;
  font-weight: 700;
`

export const MobileButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.875rem;
  width: 100%;
  color: #fff;
  border-top: 1px solid hsl(257deg 22.69% 45.04%);
  padding-top: 1.25rem;

  button {
    color: #fff;

    &:last-child {
      width: 100%;
    }
  }
`

export const HeaderSectionsWrapper = styled.div`
  display: flex;
  width: 85%;
  justify-content: space-between;
`

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.875rem;

  @media (max-width: 750px) {
    a {
      display: none;
    }
  }

  a {
    color: hsl(257, 7%, 63%);
    font-weight: 700;

    &:hover {
      color: #000;
    }
  }
`

export const HeaderButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.875rem;

  @media (max-width: 750px) {
    &.header__hamburger {
      display: inline-block;
      gap: 0;
      justify-content: unset;
      align-items: unset;
      right: 0;
      padding: 3em;
    }

    &.header__hamburger > div {
      display: none;
      position: relative;

      @media (max-width: 750px) {
        display: initial !important;
      }

      .bar {
        position: absolute;
        width: 2.25rem;
        height: 0.1875rem;
        background-color: #000;
        transition: 0.5s;
      }

      .hamburger__bar1 {
        top: -8px;
      }
      .hamburger__bar3 {
        top: 8px;
      }
    }

    &.click .hamburger__bar1 {
      transform: rotate(-45deg);
      top: -7px !important;
    }

    &.click .hamburger__bar2 {
      opacity: 0;
    }

    &.click .hamburger__bar3 {
      transform: rotate(45deg);
      top: -6px !important;
    }

    button {
      display: none;
    }
  }
`

export const LoginHeaderButton = styled.button`
  all: unset;
  color: hsl(257, 7%, 63%);
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: #9ce2e2;
  }
`

export const SignUpHeaderButton = styled.button`
  all: unset;
  color: #fff;
  background-color: hsl(180, 66%, 49%);
  border-radius: 9999px;
  padding: 0.5rem;
  font-weight: 700;
  width: 5.3125rem;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #9ce2e2;
  }
`
