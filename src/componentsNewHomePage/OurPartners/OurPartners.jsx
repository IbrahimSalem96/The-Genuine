import "./ourPartners.css";
import { Container, Image } from "react-bootstrap";

import ourPartnersImage1 from "../../assets/OurPartners/logo1.svg";
import ourPartnersImage2 from "../../assets/OurPartners/logo2.svg";
import ourPartnersImage3 from "../../assets/OurPartners/logo3.svg";
import ourPartnersImage4 from "../../assets/OurPartners/logo4.svg";
import ourPartnersImage5 from "../../assets/OurPartners/logo5.svg";
import ourPartnersImage6 from "../../assets/OurPartners/logo6.svg";
import ourPartnersImage7 from "../../assets/OurPartners/logo7.svg";
import ourPartnersImage8 from "../../assets/OurPartners/logo8.svg";
import ourPartnersImage9 from "../../assets/OurPartners/logo9.svg";
import ourPartnersImage10 from "../../assets/OurPartners/logo10.svg";
import ourPartnersImage11 from "../../assets/OurPartners/logo11.svg";
import ourPartnersImage12 from "../../assets/OurPartners/logo12.svg";
import ourPartnersImage13 from "../../assets/OurPartners/logo13.svg";
import ourPartnersImage14 from "../../assets/OurPartners/logo14.svg";
import ourPartnersImage15 from "../../assets/OurPartners/logo15.svg";
import ourPartnersImage16 from "../../assets/OurPartners/logo16.svg";
import ourPartnersImage17 from "../../assets/OurPartners/logo17.svg";
import ourPartnersImage18 from "../../assets/OurPartners/logo18.svg";
import ourPartnersImage19 from "../../assets/OurPartners/logo19.svg";
import ourPartnersImage20 from "../../assets/OurPartners/logo20.svg";
import ourPartnersImage21 from "../../assets/OurPartners/logo21.svg";
import ourPartnersImage22 from "../../assets/OurPartners/logo22.svg";
import ourPartnersImage23 from "../../assets/OurPartners/logo23.svg";
import ourPartnersImage24 from "../../assets/OurPartners/logo24.svg";
import ourPartnersImage25 from "../../assets/OurPartners/logo25.svg";
import ourPartnersImage26 from "../../assets/OurPartners/logo26.svg";
import ourPartnersImage27 from "../../assets/OurPartners/logo27.svg";

const partnersImages = [
  { src: ourPartnersImage1, alt: "our partners image 1" },
  { src: ourPartnersImage2, alt: "our partners image 2" },
  { src: ourPartnersImage3, alt: "our partners image 3" },
  { src: ourPartnersImage4, alt: "our partners image 4" },
  { src: ourPartnersImage5, alt: "our partners image 5" },
  { src: ourPartnersImage6, alt: "our partners image 6" },
  { src: ourPartnersImage7, alt: "our partners image 7" },
  { src: ourPartnersImage8, alt: "our partners image 8" },
  { src: ourPartnersImage9, alt: "our partners image 9" },
  { src: ourPartnersImage10, alt: "our partners image 10" },
  { src: ourPartnersImage11, alt: "our partners image 11" },
  { src: ourPartnersImage12, alt: "our partners image 12" },
  { src: ourPartnersImage13, alt: "our partners image 13" },
  { src: ourPartnersImage14, alt: "our partners image 14" },
  { src: ourPartnersImage15, alt: "our partners image 15" },
  { src: ourPartnersImage16, alt: "our partners image 16" },
  { src: ourPartnersImage17, alt: "our partners image 17" },
  { src: ourPartnersImage18, alt: "our partners image 18" },
  { src: ourPartnersImage19, alt: "our partners image 19" },
  { src: ourPartnersImage20, alt: "our partners image 20" },
  { src: ourPartnersImage21, alt: "our partners image 21" },
  { src: ourPartnersImage22, alt: "our partners image 22" },
  { src: ourPartnersImage23, alt: "our partners image 23" },
  { src: ourPartnersImage24, alt: "our partners image 24" },
  { src: ourPartnersImage25, alt: "our partners image 25" },
  { src: ourPartnersImage26, alt: "our partners image 26" },
  { src: ourPartnersImage27, alt: "our partners image 27" },
];

const OurPartners = () => {
  return (
    <Container>
      <div className="ourPartnersSection">
        <div className="titleSection">
          <h2>
            Our <span>Partners</span>
          </h2>
        </div>

        <div className="boxContentImage">
          {partnersImages.map((partner, index) => (
            <Image key={index} src={partner.src} alt={partner.alt} />
          ))}
        </div>
      </div>

      <div className="ourPartnersSection">
        <div className="titleSection">
          <h2>
            Our <span>Partners</span>
          </h2>
        </div>

        <div className="boxContetSlider">
          <div className="tickerTrack">
            {partnersImages.map((partner, index) => (
              <div key={index} className="tickerItem">
                <img src={partner.src} alt={partner.alt} />
              </div>
            ))}

            {partnersImages.map((partner, index) => (
              <div key={`duplicate-${index}`} className="tickerItem">
                <img src={partner.src} alt={partner.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default OurPartners;
