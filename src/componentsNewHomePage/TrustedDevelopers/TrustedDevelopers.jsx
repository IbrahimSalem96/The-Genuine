import "./trustedDevelopers.css";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";

// Image
import fixdPriceCity from "../../assets/NewHomePage/TrustedDevelopersZeroRiskInvestment.png";

import iconNumer1 from "../../assets/Validation_ logo.svg";
import iconNumer2 from "../../assets/Validation_ logo1.svg";
import iconNumer3 from "../../assets/Validation_ logo2.svg";
import iconNumer4 from "../../assets/Validation_ logo3.svg";

const TrustedDevelopers = () => {
  return (
    <Container>
      <div className="trustedDevelopersAll">
        <p className="subTitle">Trusted Developers</p>

        <div className="titleSection">
          <h2>3) Trusted Developers – Zero Risk Investment</h2>
        </div>

        <div className="contentBoxAll">
          <div className="cardItems">
            <div className="contentBox">
              <div className="imageSectiom">
                <Image src={iconNumer1} alt="image label section" />
              </div>
              <p className="contentDownImage">
                We thoroughly vet every developer to ensure they meet the
                highest standards of reliability.
              </p>
            </div>

            <div className="contentBox">
              <div className="imageSectiom">
                <Image src={iconNumer2} alt="image label section" />
              </div>
              <p className="contentDownImage">
                Each project listed is carefully reviewed for quality and
                trustworthiness.
              </p>
            </div>

            <div className="contentBox">
              <div className="imageSectiom">
                <Image src={iconNumer3} alt="image label section" />
              </div>
              <p className="contentDownImage">
                All listings are officially registered with the Real Estate
                Regulatory Authority (RERA).
              </p>
            </div>

            <div className="contentBox">
              <div className="imageSectiom">
                <Image src={iconNumer4} alt="image label section" />
              </div>
              <p className="contentDownImage">
                Every project adheres to Dubai's stringent legal and regulatory
                standards.
              </p>
            </div>
          </div>

          <div className="fullImage">
            <li>With The Genuine, you invest in projects with minimal to zero risk, offering complete peace of mind.</li>
            <Image src={fixdPriceCity} alt="image label section" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TrustedDevelopers;
