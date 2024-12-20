import "./fixedSellingPriceBuyDownAll.css";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";

// Image
import PriceComparisonIcon from "../../assets/PriceComparisonIcon.svg";
import PriceComparisonIcon2 from "../../assets/RefineYourSearch.svg";

const FixedSellingPriceBuyDownAll = () => {
  return (
    <Container>
      <div className="fixedSellingPriceBuyDownAll">
        <div className="descSection">
          <p>2) Unbiased Property Search – Tailored to You</p>
        </div>

        <div className="cardItems">
          <div className="contentBox">
            <div className="imageSectiom">
              <Image src={PriceComparisonIcon} alt="image label section" />
            </div>
            <h2>Explore with Freedom</h2>
            <p>
              Discover Dubai’s top developers and projects on a platform that
              empowers you to compare options without bias.
            </p>
          </div>

          <div className="contentBox">
            <div className="imageSectiom">
              <Image src={PriceComparisonIcon2} alt="image label section" />
            </div>
            <h2>Refine Your Search</h2>
            <p>
              Use advanced filters or seek guidance from expert consultants to
              find the perfect investment opportunity tailored to your needs.
            </p>
          </div>
        </div>

        {/* <div className="descSectionDown">
          <p>
            This concise two-step structure makes the information clear and easy
            to digest.
          </p>
        </div> */}
      </div>
    </Container>
  );
};

export default FixedSellingPriceBuyDownAll;
