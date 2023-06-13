import { styled } from "styled-components";

export const Header = styled.header`
  width: 100%;
  display: flex;
  font-size: 1.125rem;
  align-items: center;
  justify-content: space-around;
  padding-top: 3.125rem;
`;

export const HeaderSectionsWrapper = styled.div`
  display: flex;
  width: 85%;
  justify-content: space-between;
`;

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
`;

export const HeaderButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.875rem;

  @media (max-width: 750px) {
    button {
      display: none;
    }
  }
`;

export const LoginHeaderButton = styled.button`
  all: unset;
  color: hsl(257, 7%, 63%);
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: #9ce2e2;
  }
`;

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
`;
