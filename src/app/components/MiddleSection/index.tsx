import {
  AdvancedStatistics,
  BoostYourLinks,
  CopyButton,
  GetStartedButton,
  GetStartedContainer,
  GetStartedTitleWrapper,
  GetStartedWrapper,
  InformationCards,
  InformationCardsWrapper,
  MainContainer,
  MiddleContainer,
  ShortenALinkContainer,
  ShortenLinkResultsContainer,
  ShortenLinkWrapper,
} from "./styles";
import { useRef, useState } from "react";
import { apiMethod } from "../../lib/axios";
import IllustrationWorking from "../icons/IllustrationWorking";
import BrandRecognitionIcon from "../icons/BrandRecognitionIcon";
import DetailedRecordsIcon from "../icons/DetailedRecordsIcon";
import FullyCustomizableIcon from "../icons/FullyCustomizableIcon";

interface SearchedLinksInterface {
  originalLink: string;
  shortenLink: string;
}

const MiddleSection = () => {
  const [shortenItInput, setShortenItInput] = useState("");
  const [searchedLinks, setSearchedLinks] = useState<Array<SearchedLinksInterface>>(
    []
  );
  const [inputHasError, setInputHasError] = useState(false);
  const encurtLinkInputRef = useRef<HTMLInputElement>(null);

  const handleGetUrl = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!shortenItInput) {
      return setInputHasError(true);
    }

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
    setInputHasError(false);
  };

  function copyShortenLink(e: React.MouseEvent<HTMLButtonElement>, url: string) {
    if (navigator) {
      navigator.clipboard.writeText(url);

      e.currentTarget.disabled = true;
      e.currentTarget.textContent = "Copied!";
    }
  }

  return (
    <MainContainer>
      <GetStartedContainer>
        <GetStartedWrapper>
          <GetStartedTitleWrapper>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
              }}
            >
              <p>More than just shorter links</p>
              <p>
                Build your brand's recognition and get detailed insights on how your
                links are performing.
              </p>
            </div>
            <span>
              <GetStartedButton>Get Started</GetStartedButton>
            </span>
          </GetStartedTitleWrapper>
        </GetStartedWrapper>
          <IllustrationWorking />
      </GetStartedContainer>

      <MiddleContainer>
        <ShortenALinkContainer onSubmit={handleGetUrl}>
          <input
            ref={encurtLinkInputRef}
            className={inputHasError ? "error" : ""}
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

        <InformationCardsWrapper>
          <InformationCards>
            <div>
              <BrandRecognitionIcon />
            </div>
            <h1>Brand Recognition</h1>
            <p>
              Boost your brand recognition with each click. Generic links dont mean a
              thing. Branded links help instil confidence in your content.
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
        </InformationCardsWrapper>
      </MiddleContainer>

      <BoostYourLinks>
        <p>Boost your links today</p>
        <button>Get Started</button>
      </BoostYourLinks>
    </MainContainer>
  );
};

export default MiddleSection;
