import "./whyChooseTheGenuine.css";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";

// Image
// import moneyIcon from "../../assets/dolar.svg";
import whyChooseTheGenuine from "../../assets/NewHomePage/WhyChooseTheGenuine.png";

import MarketBasedPricing from "../../assets/MarketBasedPricing.svg";
import PreNegotiated from "../../assets/PreNegotiated.svg";
import HassleFree from "../../assets/HassleFree.svg";

const WhyChooseTheGenuine = () => {
  return (
    <Container>
      <div className="whyChooseTheGenuineNewHomePage">
        <p className="subTitle">Why us</p>

        <div className="titleSection">
          <h2>Why Choose The Genuine</h2>
          {/* <Image src={moneyIcon} alt="image Fixed Selling Price" /> */}
        </div>

        <div className="descSection">
          <p>
            <span>1) Real-Time Unit Availability – A First in Dubai </span>
            Unlike other platforms that provide only rough project prices, The
            Genuine delivers precise and up-to-date details on every unit.
          </p>
        </div>

        <div className="contentBoxAll">
          <div className="cardItems">
            <div className="contentBox">
              <div className="imageSectiom">
                <Image src={MarketBasedPricing} alt="image label section" />
              </div>
              <div className="contentDownImage">
                <h2>Daily Updates</h2>
                <p>
                  Access real-time availability of properties, refreshed every
                  day.
                </p>
              </div>
            </div>

            <div className="contentBox">
              <div className="imageSectiom">
                <Image src={PreNegotiated} alt="image label section" />
              </div>
              <div className="contentDownImage">
                <h2>Detailed Insights</h2>
                <p>
                  See exact unit prices, numbers, floors, and square footage for
                  each listing.
                </p>
              </div>
            </div>

            <div className="contentBox">
              <div className="imageSectiom">
                <Image src={HassleFree} alt="image label section" />
              </div>
              <div className="contentDownImage">
                <h2>Stay Ahead</h2>
                <p>
                  Make smarter, faster decisions with complete transparency in
                  Dubai’s dynamic property market
                </p>
              </div>
            </div>
          </div>

          <div className="fullImage">
            <Image src={whyChooseTheGenuine} alt="image label section" />
          </div>
        </div>

        <div className="descSection descSectionFontSize">
          <p>
            Our commitment to accuracy sets a new benchmark in the real estate
            industry, making us the preferred choice for buyers who value
            clarity and reliability.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default WhyChooseTheGenuine;
