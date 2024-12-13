import "./yourSmartSolutionfor.css";
import { Container, Image } from "react-bootstrap";

// Image
import bgSectionLeft from "../../assets/NewHomePage/WelcometoTheGenuine.svg";

const YourSmartSolutionfor = () => {
  return (
    <Container>
      <div className="yourSmartSolutionforNewHomePage">
        <div className="flexContent">
          <div className="rightSection">
            <p className="subTitle">Welcome to The Genuine</p>
            <h2>Your Smart Solution for Dubai Real Estate</h2>
            <p>Looking to invest in Dubai’s booming real estate market?</p>

            <p>
              Discover The Genuine, the ultimate platform for buying properties
              directly from Dubai’s top developers.
            </p>

            <p>
              With advanced features, daily updates, and exclusive discounts,
              we’re here to revolutionize your real estate journey.
            </p>
          </div>

          <div className="leftSection">
            <Image src={bgSectionLeft} alt="backgroun image section" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default YourSmartSolutionfor;
