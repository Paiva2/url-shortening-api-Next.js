import React from "react";
import { Footer, Sections, SectionsWrapper, SocialMediasWrapper } from "./styles";
import ShortlyLogo from "../icons/ShortlyLogo";
import { ImFacebook2, ImPinterest, ImTwitter } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";

const FooterComponent = () => {
  return (
    <Footer>
      <Sections>
        <SectionsWrapper>
          <ShortlyLogo color="#fff" />

          <div>
            <p>Features</p>

            <p>Link Shortening</p>
            <p>Branded Links</p>
            <p>Analytics</p>
          </div>

          <div>
            <p>Resources</p>

            <p>Blog</p>
            <p>Developers</p>
            <p>Support</p>
          </div>

          <div>
            <p>Company</p>

            <p>About</p>
            <p>Our Team</p>
            <p>Careers</p>
            <p>Contact</p>
          </div>

          <SocialMediasWrapper>
            <ImFacebook2 />
            <ImTwitter />
            <ImPinterest />
            <BsInstagram />
          </SocialMediasWrapper>
        </SectionsWrapper>
      </Sections>
    </Footer>
  );
};

export default FooterComponent;
