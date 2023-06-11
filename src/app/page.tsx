"use client";

import { ImFacebook2, ImTwitter, ImPinterest } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import IllustrationWorking from "./components/icons/IllustrationWorking";
import BrandRecognitionIcon from "./components/icons/BrandRecognitionIcon";
import DetailedRecordsIcon from "./components/icons/DetailedRecordsIcon";
import FullyCustomizableIcon from "./components/icons/FullyCustomizableIcon";
import {
  AdvancedStatistics,
  BoostYourLinks,
  GetStartedButton,
  GetStartedContainer,
  GetStartedTitleWrapper,
  GetStartedWrapper,
  Header,
  HeaderButtonsWrapper,
  HeaderSectionsWrapper,
  InformationCards,
  LoginHeaderButton,
  LogoWrapper,
  ShortenALinkContainer,
  SignUpHeaderButton,
} from "./styles";
import HeaderLogo from "./components/icons/HeaderLogo";

export default function Home() {
  return (
    <>
      <Header>
        <HeaderSectionsWrapper>
          <LogoWrapper>
            <HeaderLogo />
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

      <div>
        <GetStartedContainer>
          <GetStartedWrapper>
            <GetStartedTitleWrapper>
              <div>
                <p>More than just shorter links</p>
                <p>
                  Build your brand's recognition and get detailed insights on how
                  your links are performing.
                </p>
              </div>
              <span>
                <GetStartedButton>Get Started</GetStartedButton>
              </span>
            </GetStartedTitleWrapper>
          </GetStartedWrapper>

          <IllustrationWorking />
        </GetStartedContainer>

        <div
          style={{
            backgroundColor: "#EFF1F7",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            gap: "30px",
          }}
        >
          <ShortenALinkContainer>
            <input type="text" placeholder="Shorten a link here..." />
            <button>Shorten it!</button>
          </ShortenALinkContainer>

          <AdvancedStatistics>
            <p>Advanced Statistics</p>
            <p>
              Track how your links are performing across the web with our advanced
              statistics dashboard.
            </p>
          </AdvancedStatistics>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
              gap: "40px",
            }}
          >
            <InformationCards>
              <div>
                <BrandRecognitionIcon />
              </div>
              <h1>Brand Recognition</h1>
              <p>
                Boost your brand recognition with each click. Generic links dont mean
                a thing. Branded links help instil confidence in your content.
              </p>
            </InformationCards>

            <InformationCards>
              <div>
                <DetailedRecordsIcon />
              </div>
              <h1>Detailed Records</h1>
              <p>
                Gain insights into who is clicking your links. Knowing when and where
                people engage with your content helps inform better decisions.
              </p>
            </InformationCards>

            <InformationCards>
              <div>
                <FullyCustomizableIcon />
              </div>
              <h1>Fully Customizable</h1>
              <p>
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </InformationCards>
          </div>
        </div>

        <BoostYourLinks>
          <h1>Boost your links today</h1>
          <button>Get Started</button>
        </BoostYourLinks>

        <footer>
          <h2>Shortly</h2>

          <div>
            <div>
              <h3>Features</h3>

              <p>Link Shortening</p>
              <p>Branded Links</p>
              <p>Analytics</p>
            </div>

            <div>
              <h3>Resources</h3>

              <p>Blog</p>
              <p>Developers</p>
              <p>Support</p>
            </div>

            <div>
              <h3>Company</h3>

              <p>About</p>
              <p>Our Team</p>
              <p>Careers</p>
              <p>Contact</p>
            </div>

            <div>
              <ImFacebook2 />
              <ImTwitter />
              <ImPinterest />
              <BsInstagram />
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
