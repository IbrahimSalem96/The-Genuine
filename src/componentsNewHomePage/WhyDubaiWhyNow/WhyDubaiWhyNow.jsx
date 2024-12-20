import "./whyDubaiWhyNow.css";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";

// Image
import listPointers from "../../assets/shape.svg";

import iconNumer1 from "../../assets/NewHomePage/WhyDubaiWhyNow.svg";
import iconNumer2 from "../../assets/NewHomePage/WhyDubaiWhyNow1.svg";
import iconNumer3 from "../../assets/NewHomePage/WhyDubaiWhyNow2.svg";

const WhyDubaiWhyNow = () => {
  return (
    <Container>
      <div className="whyDubaiWhyNowAll">
        {/* <p className="subTitle">Why Now ?</p> */}

        <div className="titleSection">
          <h2>Why Dubai? Why Now?</h2>
          <Image src={listPointers} alt="image Fixed Selling Price" />
        </div>

        <div className="cardItems">
          <div className="contenCard">
            <div className="imageSectiom">
              <Image src={iconNumer1} alt="image label section" />
            </div>
            <p>Dubai’s booming real estate market offers great potential for local and international investors.</p>
          </div>

          <div className="contenCard">
            <div className="imageSectiom">
              <Image src={iconNumer2} alt="image label section" />
            </div>
            <p>Enjoy a tax-free environment, world-class infrastructure, and a prime location.</p>
          </div>

          <div className="contenCard contenCardMarginBottom">
            <div className="imageSectiom">
              <Image src={iconNumer3} alt="image label section" />
            </div>
            <p>The Genuine helps you navigate the market effortlessly to grow your portfolio.</p>
          </div>
        </div>

      </div>
    </Container>
  );
};

export default WhyDubaiWhyNow;
