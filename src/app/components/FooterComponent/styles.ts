import { styled } from "styled-components";

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
