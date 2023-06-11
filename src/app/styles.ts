import { styled } from "styled-components";

export const Header = styled.header`
  width: 100%;
  display: flex;
  font-size: 18px;
  align-items: center;
  justify-content: space-around;
  padding-top: 50px;
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
  border-radius: 100px;
  padding: 8px;
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

export const GetStartedContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 630px;
  overflow: hidden;

  svg {
    position: absolute;
    right: -150px;
    top: 0;
  }
`;

export const GetStartedWrapper = styled.div`
  display: flex;
  width: 85%;
  align-items: center;
`;

export const GetStartedTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 41%;

  p:first-child {
    color: hsl(255, 11%, 22%);
    font-size: 80px;
    line-height: 1.1;
    font-weight: 700;
  }

  p:last-child {
    font-size: 22px;
    color: hsl(257, 7%, 63%);
  }
`;

export const GetStartedButton = styled.button`
  all: unset;
  font-size: 16px;
  background-color: hsl(180, 66%, 49%);
  color: #fff;
  border-radius: 100px;
  padding: 15px;
  width: 25%;
  font-weight: 700;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #9ce2e2;
  }
`;

export const ShortenALinkContainer = styled.div`
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsl(257, 27%, 26%);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1110' height='168'%3E%3Cpath fill='%234B3F6B' fill-rule='evenodd' d='M647-93.924c0 52.724 15.5 90.486 73 114.877 57.5 24.391 113.055 2.134 168.786 14.894 55.731 12.76 55.731 94.962 108.214 145.549s163.142 62.874 253.12 11.552c89.976-51.322 130.765-171.152 103.88-241.807C1327.115-119.515 1275.593-184 1027-184c-248.593 0-380 37.353-380 90.076zm-781 213c0 52.724 15.5 90.486 73 114.877 57.5 24.391 113.055 2.134 168.786 14.894 55.731 12.76 55.731 94.962 108.214 145.549s163.142 62.874 253.12 11.552C559.095 354.626 599.884 234.796 573 164.141 546.115 93.485 494.593 29 246 29c-248.593 0-380 37.353-380 90.076z'/%3E%3C/svg%3E");
  margin-top: -70px;
  padding: 40px;
  gap: 20px;
  background-size: 100% 100%;
  -o-background-size: 100% 100%;
  -webkit-background-size: 100% 100%;
  background-size: cover;
  border-radius: 10px;
  z-index: 1000;

  input {
    width: 70%;
    padding: 20px;
    padding-left: 15px;
    border-radius: 10px;
    font-size: 18px;
    border: 0;
  }

  button {
    all: unset;
    background-color: hsl(180, 66%, 49%);
    color: #fff;
    padding: 20px;
    border-radius: 10px;
    font-weight: 700;
    width: 10%;
    text-align: center;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      background-color: #9ce2e2;
    }
  }
`;

export const ShortenLinkResultsContainer = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 40px;
  gap: 20px;
  border-radius: 10px;
  font-size: 20px;
`;

export const ShortenLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: hsl(180, 66%, 49%);
  gap: 20px;

  a:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

interface CopyButton {
  copied?: boolean;
}

export const CopyButton = styled.button<CopyButton>`
  all: unset;
  background-color: ${({ copied }) => (copied ? "#4b3f6b" : "hsl(180, 66%, 49%)")};
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 10px;
  width: 100px;
  height: 25px;
  border-radius: 10px;
  font-weight: 700;
  text-align: center;
  cursor: ${({ copied }) => (copied ? "unset" : "pointer")};
  transition: background-color 0.2s ease-in-out;

  &:hover:not(:disabled) {
    background-color: #9ce2e2;
  }
`;

export const AdvancedStatistics = styled.div`
  width: 25%;
  text-align: center;

  p:first-child {
    font-size: 45px;
    font-weight: 700;
    color: hsl(260, 8%, 14%);
  }

  p:last-child {
    font-size: 18px;
    color: hsl(257, 7%, 63%);
  }
`;

export const InformationCards = styled.div`
  max-width: 380px;
  padding: 30px;
  background: #fff;
  position: relative;

  h1 {
    color: hsl(260, 8%, 14%);
    margin-top: 15px;
  }

  p {
    color: hsl(257, 7%, 63%);
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5rem;
    height: 5rem;
    border-radius: 99999px;
    background-color: #3b3054;

    margin-top: -70px;
  }

  &:nth-child(1) {
    &::after {
      content: "";
      position: absolute;
      width: 2.5rem;
      height: 0.5rem;
      background-color: hsl(180, 66%, 49%);
      right: -40px;
      top: 50%;
    }
  }

  &:nth-child(2) {
    margin-top: 80px;

    &::after {
      content: "";
      position: absolute;
      width: 2.5rem;
      height: 0.5rem;
      background-color: hsl(180, 66%, 49%);
      right: -40px;
      top: 50%;
    }
  }

  &:nth-child(3) {
    margin-top: 160px;
  }
`;

export const BoostYourLinks = styled.div`
  width: 100%;
  display: flex;
  min-height: 300px;
  gap: 20px;
  color: #fff;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: hsl(257, 27%, 26%);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1440' height='250'%3E%3Cg fill='%234B3F6B' fill-rule='evenodd'%3E%3Cpath d='M830-63.482C830 19.351 854.36 78.678 944.732 117c90.371 38.321 177.686 3.352 265.277 23.4 87.59 20.048 87.59 149.195 170.077 228.671 82.486 79.476 256.405 98.781 397.82 18.15 141.415-80.632 205.52-268.896 163.267-379.902C1898.919-103.687 1817.943-205 1427.236-205S830-146.314 830-63.482zM-263.351 570.909c29.685 77.331 73.689 123.988 171.79 127.377 98.102 3.39 167.085-60.547 256.043-73.22 88.958-12.674 135.24 107.895 240.73 152.532 105.488 44.638 274.775.333 377.9-125.622C886.24 526.021 878.62 327.29 799.392 238.798 720.162 150.307 608.257 84.743 243.5 224.76c-364.757 140.017-536.537 268.818-506.852 346.149zM-514-377.482c0 82.833 24.36 142.16 114.732 180.482 90.371 38.321 177.686 3.352 265.277 23.4 87.59 20.048 87.59 149.195 170.077 228.671 82.486 79.476 256.405 98.781 397.82 18.15 141.415-80.632 205.52-268.896 163.267-379.902C554.919-417.687 473.943-519 83.236-519S-514-460.314-514-377.482z'/%3E%3C/g%3E%3C/svg%3E");
  background-size: 100% 100%;
  -o-background-size: 100% 100%;
  -webkit-background-size: 100% 100%;
  background-size: cover;

  p {
    font-size: 45px;
    font-weight: 700;
  }

  button {
    all: unset;
    text-align: center;
    border-radius: 9999px;
    font-size: 18px;
    padding: 10px;
    width: 150px;
    height: 25px;
    cursor: pointer;
    background-color: hsl(180, 66%, 49%);
    transition: all 0.2s ease;

    &:hover {
      background-color: #9ce2e2;
    }
  }
`;

export const Footer = styled.footer`
  width: 100%;
  background: hsl(260, 8%, 14%);
  color: #fff;
  font-size: 18px;
  padding-top: 50px;
  padding-bottom: 50px;
`;

export const Sections = styled.div`
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SectionsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;

  div {
    display: flex;
    flex-direction: column;
    gap: 5px;

    p {
      cursor: pointer;
      transition: all 0.2s ease;

      &:hover {
        color: hsl(180, 66%, 49%);
      }
    }

    p:first-child {
      font-weight: 700;
      margin-bottom: 15px;
      cursor: unset !important;

      &:hover {
        color: #fff;
      }
    }
  }
`;

export const SocialMediasWrapper = styled.div`
  display: flex;
  flex-direction: row !important;
  gap: 20px !important;

  svg {
    width: 22px;
    height: 22px;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      color: hsl(180, 66%, 49%);
    }
  }
`;
