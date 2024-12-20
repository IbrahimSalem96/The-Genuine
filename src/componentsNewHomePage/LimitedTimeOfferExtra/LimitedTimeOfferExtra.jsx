import "./limitedTimeOfferExtra.css";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

// Image
const LimitedTimeOfferExtra = () => {
  return (
    <div className="LimitedTimeOfferExtraNewHomePage">
      <div className="bgWhiteMobile">
        <div className="mobileView">
          <Container>
            <h2>Limited-Time Offer: Extra 1% Discount!</h2>

            <Link to={"/registration/buyer"}>Join Now</Link>

            <p>
              For a short time only, enjoy an{" "}
              <span>additional 1% discount</span> on top of market prices and
              standard developer discounts—exclusive to The Genuine users. This
              saving comes directly from our pocket. Sign up now to secure this
              deal before it’s gone!
            </p>
          </Container>
        </div>

        <div className="mobileViewDownSection">
          <h2>Don’t Miss Out—These Offers Won’t Last!</h2>

          <p>Terms and Conditions apply.</p>
        </div>
      </div>

      <div className="desktopView">
        <div className="contentBox">
          <h2>Limited-Time Offer: Extra 1% Discount!</h2>

          <Link to={"/joiningForm"}>Join Now</Link>

          <p className="descOne">
            For a short time only, enjoy an <span>additional 1% discount</span>
            on top of market prices and standard developer discounts—exclusive
            to The Genuine users. This saving comes directly from our pocket.
            Sign up now to secure this deal before it’s gone!
          </p>

          <h3>Don’t Miss Out—These Offers Won’t Last!</h3>

          <p className="termsAndConditions">Terms and Conditions apply.</p>
        </div>
      </div>
    </div>
  );
};

export default LimitedTimeOfferExtra;
