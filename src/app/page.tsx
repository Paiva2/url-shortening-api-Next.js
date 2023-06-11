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
  CopyButton,
  Footer,
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
  Sections,
  SectionsWrapper,
  ShortenALinkContainer,
  ShortenLinkResultsContainer,
  ShortenLinkWrapper,
  SignUpHeaderButton,
  SocialMediasWrapper,
} from "./styles";
import ShortlyLogo from "./components/icons/ShortlyLogo";
import { useRef, useState } from "react";
import { apiMethod } from "./lib/axios";

interface SearchedLinksInterface {
  originalLink: string;
  shortenLink: string;
}

export default function Home() {
  const [shortenItInput, setShortenItInput] = useState("");
  const [searchedLinks, setSearchedLinks] = useState<Array<SearchedLinksInterface>>(
    []
  );
  const encurtLinkInputRef = useRef<HTMLInputElement>(null);

  const handleGetUrl = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!shortenItInput) return alert("Insert a link!");

    apiMethod.get(`shorten?url=${shortenItInput}`).then((res) => {
      setSearchedLinks((oldLinks) => {
        return [
          ...oldLinks,
          {
            originalLink: res.data.result.original_link,
            shortenLink: res.data.result.full_short_link,
          },
        ];
      });
    });

    encurtLinkInputRef.current!.value = "";
    setShortenItInput("");
  };

  function copyShortenLink(e: React.MouseEvent<HTMLButtonElement>, url: string) {
    if (navigator) {
      navigator.clipboard.writeText(url);

      e.currentTarget.disabled = true;
      e.currentTarget.textContent = "Copied!";
    }
  }

  return (
    <>
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

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
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
          <ShortenALinkContainer onSubmit={handleGetUrl}>
            <input
              ref={encurtLinkInputRef}
              onChange={(e) => setShortenItInput(e.target.value)}
              type="text"
              placeholder="Shorten a link here..."
            />
            <button type="submit">Shorten it!</button>
          </ShortenALinkContainer>

          {searchedLinks.map((link) => {
            return (
              <ShortenLinkResultsContainer key={link.originalLink}>
                <p>{link.originalLink}</p>

                <ShortenLinkWrapper>
                  <a href={link.shortenLink}>{link.shortenLink}</a>
                  <CopyButton onClick={(e) => copyShortenLink(e, link.shortenLink)}>
                    Copy
                  </CopyButton>
                </ShortenLinkWrapper>
              </ShortenLinkResultsContainer>
            );
          })}

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
              paddingBottom: "50px",
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
          <p>Boost your links today</p>
          <button>Get Started</button>
        </BoostYourLinks>

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
      </div>
    </>
  );
}
