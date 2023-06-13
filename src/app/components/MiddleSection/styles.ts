import { styled } from "styled-components";

export const GetStartedContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 750px;
  overflow: hidden;

  @media (max-width: 950px) {
    gap: 30px;
    padding: 1.25rem;
    flex-direction: column-reverse;
    min-height: 1115px;

    svg {
      position: unset !important;
    }
  }

  svg {
    position: absolute;
    right: -150px;
  }
`;

export const GetStartedWrapper = styled.div`
  display: flex;
  width: 85%;
  align-items: center;

  @media (max-width: 950px) {
    width: 100%;
  }
`;

export const GetStartedTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
  width: 41%;

  @media (max-width: 950px) {
    width: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;

    span {
      width: 100%;
      display: flex;
      justify-content: center;
      text-align: center;
      align-items: center;
    }

    p:first-child {
      font-size: 2.8125rem !important;
    }
  }

  p:first-child {
    color: hsl(255, 11%, 22%);
    font-size: 5rem;
    line-height: 1.1;
    font-weight: 700;
  }

  p:last-child {
    font-size: 1.375rem;
    color: hsl(257, 7%, 63%);
  }
`;

export const GetStartedButton = styled.button`
  all: unset;
  font-size: 1rem;
  background-color: hsl(180, 66%, 49%);
  color: #fff;
  border-radius: 6.25rem;
  padding: 0.9375rem;
  width: 25%;
  font-weight: 700;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: all 0.2s ease;

  @media (max-width: 950px) {
    width: 50%;
  }

  &:hover {
    background-color: #9ce2e2;
  }
`;

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MiddleContainer = styled.div`
  background-color: #eff1f7;
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 1.875rem;

  @media (max-width: 880px) {
    padding: 1.25rem;
    gap: 4.875rem;
  }
`;

export const ShortenALinkContainer = styled.form`
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsl(257, 27%, 26%);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1110' height='168'%3E%3Cpath fill='%234B3F6B' fill-rule='evenodd' d='M647-93.924c0 52.724 15.5 90.486 73 114.877 57.5 24.391 113.055 2.134 168.786 14.894 55.731 12.76 55.731 94.962 108.214 145.549s163.142 62.874 253.12 11.552c89.976-51.322 130.765-171.152 103.88-241.807C1327.115-119.515 1275.593-184 1027-184c-248.593 0-380 37.353-380 90.076zm-781 213c0 52.724 15.5 90.486 73 114.877 57.5 24.391 113.055 2.134 168.786 14.894 55.731 12.76 55.731 94.962 108.214 145.549s163.142 62.874 253.12 11.552C559.095 354.626 599.884 234.796 573 164.141 546.115 93.485 494.593 29 246 29c-248.593 0-380 37.353-380 90.076z'/%3E%3C/svg%3E");
  margin-top: -4.375rem;
  padding: 2.5rem;
  gap: 1.25rem;
  background-size: 100% 100%;
  -o-background-size: 100% 100%;
  -webkit-background-size: 100% 100%;
  background-size: cover;
  border-radius: 10px;
  z-index: 1000;

  @media (max-width: 880px) {
    flex-direction: column;
    padding: 1.25rem;
    width: 100%;
    margin-top: -6.25rem;
    
    input {
      width: 100%;
      padding: 0.9375rem;
    }

    button {
      padding: 0;
      width: 100%;
      height: 50px;
    }
  }

  input {
    width: 70%;
    padding: 1.25rem;
    padding-left: 0.9375rem;
    border-radius: 0.625rem;
    font-size: 1.125rem;
    border: 0;

    @media (max-width: 880px) {
      width: 100%;
      padding: 0.9375rem;
    }

    &.error {
      border: 3px solid hsl(0, 87%, 67%);

      &::placeholder {
        color: hsl(0, 87%, 67%);
      }
    }
  }

  button {
    all: unset;
    background-color: hsl(180, 66%, 49%);
    color: #fff;
    padding: 1.25rem;
    border-radius: 10px;
    font-weight: 700;
    width: 10%;
    text-align: center;
    cursor: pointer;
    transition: all 0.2s ease;

    @media (max-width: 880px) {
      padding: 0;
      width: 100%;
      height: 50px;
    }

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
  padding: 2.5rem;
  gap: 1.25rem;
  border-radius: 10px;
  font-size: 1.25rem;

  p {
    word-break: break-all;
  }
`;

export const ShortenLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: hsl(180, 66%, 49%);
  gap: 1.25rem;

  a:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const CopyButton = styled.button`
  all: unset;
  background-color: hsl(180, 66%, 49%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 0.625rem;
  width: 6.25rem;
  height: 1.5625rem;
  border-radius: 10px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover:not(:disabled) {
    background-color: #9ce2e2;
  }

  &:disabled {
    background-color: #4b3f6b;
    cursor: unset;
  }
`;

export const AdvancedStatistics = styled.div`
  width: 25%;
  text-align: center;

  @media (max-width: 880px) {
    width: 100%;
  }

  p:first-child {
    font-size: 2.8125rem;
    font-weight: 700;
    color: hsl(260, 8%, 14%);
  }

  p:last-child {
    font-size: 1.125rem;
    color: hsl(257, 7%, 63%);
  }
`;

export const InformationCardsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 3.125rem;
  gap: 2.5rem;

  @media (min-width: 3850px) {
    height: 100vh;
  }

  @media (max-width: 880px) {
    gap: 0;
    flex-direction: column;
  }
`;

export const InformationCards = styled.div`
  max-width: 380px;
  padding: 1.875rem;
  background: #fff;
  position: relative;

  @media (max-width: 880px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  h1 {
    color: hsl(260, 8%, 14%);
    margin-top: 0.9375rem;
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

    margin-top: -4.375rem;
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

      @media (max-width: 880px) {
        right: 49%;
        top: 100%;
        width: 0.5rem;
        height: 3.5rem;
      }
    }
  }

  &:nth-child(2) {
    margin-top: 5rem;

    &::after {
      content: "";
      position: absolute;
      width: 2.5rem;
      height: 0.5rem;
      background-color: hsl(180, 66%, 49%);
      right: -40px;
      top: 50%;

      @media (max-width: 880px) {
        right: 49%;
        top: 100%;
        width: 0.5rem;
        height: 3.5rem;
      }
    }
  }

  &:nth-child(3) {
    margin-top: 10rem;

    @media (max-width: 880px) {
      margin-top: 5rem;
  }
`

export const BoostYourLinks = styled.div`
  width: 100%;
  display: flex;
  min-height: 300px;
  gap: 1.25rem;
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
    font-size: 2.8125rem;
    font-weight: 700;
  }

  @media (max-width: 550px) {
    p {
      font-size: 25px;
    }
  }

  button {
    all: unset;
    text-align: center;
    border-radius: 9999px;
    font-size: 1.125rem;
    padding: 0.625rem;
    width: 9.375rem;
    height: 1.5625rem;
    cursor: pointer;
    background-color: hsl(180, 66%, 49%);
    transition: all 0.2s ease;

    &:hover {
      background-color: #9ce2e2;
    }
  }
`;
