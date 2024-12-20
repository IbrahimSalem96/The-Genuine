import "./footerForm.css";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

// Image
import footerIcon from "../../../assets/footerIconeMass.svg";

const FooterForm = () => {
  return (
    <div className="footerFormection">
      <Container>
        <ul>
          <li className="imageSection">
            <Link to="https://wa.me/97142560500" target="_blank">
              <Image src={footerIcon} alt="icon massenger" />
            </Link>
          </li>

          <li>
            <p>Copyright © 2024 The Genuine.<br /> Powered by The Genuine</p>
          </li>

          <li>
            <Link to={"/terms-and-conditions"}>Terms & Conditions</Link>
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default FooterForm;
