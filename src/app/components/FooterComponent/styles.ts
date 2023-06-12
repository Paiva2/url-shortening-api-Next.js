import { styled } from "styled-components";

export const Footer = styled.footer`
  width: 100%;
  background: hsl(260, 8%, 14%);
  color: #fff;
  font-size: 1.125rem;
  padding-top: 3.125rem;
  padding-bottom: 3.125rem;
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
    gap: 0.3125rem;

    p {
      cursor: pointer;
      transition: all 0.2s ease;

      &:hover {
        color: hsl(180, 66%, 49%);
      }
    }

    p:first-child {
      font-weight: 700;
      margin-bottom: 0.9375rem;
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
  gap: 1.25rem !important;

  svg {
    width: 1.375rem;
    height: 1.375rem;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      color: hsl(180, 66%, 49%);
    }
  }
`;
