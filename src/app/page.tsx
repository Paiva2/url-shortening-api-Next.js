import Image from "next/image";


import IllustrationWorking from "./components/icons/IllustrationWorking";
import BrandRecognitionIcon from "./components/icons/BrandRecognitionIcon";
import DetailedRecordsIcon from "./components/icons/DetailedRecordsIcon";
import FullyCustomizableIcon from "./components/icons/FullyCustomizableIcon";
import { ImFacebook2, ImTwitter, ImPinterest } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";

export default function Home() {
  return (
    <>
    <header>
      <h1>Shortly</h1>

      <nav>Features</nav>
      <nav>Pricing</nav>
      <nav>Resources</nav>

      <div>
        <button>Login</button>
        <button>Sign Up</button>
      </div>
    </header> 

    <div>
      <div>
        <h1>More than just shorter links</h1>

        <p>Build your brand's recognition and get detailed insights on how
            your links are performing.
        </p>

        <button>Get Started</button>
      </div>

      <span>
        <IllustrationWorking />
      </span>

      <div>
        <input type="text" placeholder="Shorten a link here..." />

        <button>Shorten it!</button>
      </div>

        <div>
          <h1>Advanced Statistics</h1>
          <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
        </div>

        <div>

          <div>
          <BrandRecognitionIcon />
            <h1>Brand Recognition</h1>
            <p></p>
          </div>

          <div>
            <DetailedRecordsIcon />
            <h1>Detailed Records</h1>
            <p></p>
          </div>

          <div>
            <FullyCustomizableIcon />
            <h1>Fully Customizable</h1>
            <p></p>
          </div>
        </div>

        <div>
          <h1>Boost your links today</h1>
          <button>Get Started</button>
        </div>

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
  )
}
