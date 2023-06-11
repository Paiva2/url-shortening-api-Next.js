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

export const BoostYourLinks = styled.div``;
