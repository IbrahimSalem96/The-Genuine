import "./luxuryMeetsConvenience.css";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";

// Image
import iconNumer1 from "../../assets/Validation_ logo.svg";
import iconNumer2 from "../../assets/Validation_ logo1.svg";
import iconNumer3 from "../../assets/Validation_ logo2.svg";
import iconNumer4 from "../../assets/Validation_ logo3.svg";

const LuxuryMeetsConvenience = () => {
  return (
    <Container>
      <div className="LuxuryMeetsConvenience">
        {/* <p className="subTitle">Trusted Developers</p> */}

        <div className="titleSection">
          <h2>4) Luxury Meets Convenience</h2>
        </div>

        <div className="descSection descSectionFontSize">
          <p>
            We go beyond the ordinary to make your property-buying experience
            seamless and enjoyable:
          </p>
        </div>

        <div className="cardItem">
          <div className="sizeBox">
            <div className="contentBox">
              <div className="imageHover">
                <Image src={iconNumer1} alt="number of item 1" />
              </div>
              <h3>Effortless Booking</h3>
              <p>Schedule online or arrange a physical visit to the developer</p>
            </div>

            <div className="contentBox">
              <div className="imageHover">
                <Image src={iconNumer2} alt="number of item 2" />
              </div>
              <h3>Free Luxury Transportation</h3>
              <p>
              Enjoy complimentary chauffeured transportation from your home or office to the developer’s site
              </p>
            </div>

            <div className="contentBox">
              <div className="imageHover">
                <Image src={iconNumer3} alt="number of item 3" />
              </div> 
              <h3>Smart Viewing Slots</h3>
              <p>Select convenient time slots for stress-free property viewings.</p>
            </div>

            <div className="contentBox">
              <div className="imageHover">
                <Image src={iconNumer4} alt="number of item 4" />
              </div> 
              <h3>Exclusive Discounts</h3>
              <p>Unlock better prices and additional savings negotiated exclusively for you.</p>
            </div>

 
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LuxuryMeetsConvenience;
