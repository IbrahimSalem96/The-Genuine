import "./footer.css";
import { Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

// Image
import logo from "../../assets/LogoSite.svg";
//import arrow from "../../assets/arrow.svg";

import InstagramIcon from "../../assets/Instagram.svg";
import LinkedinIcon from "../../assets/LinkedinFill.svg";
import FacebookIcon from "../../assets/FacebookFooter.svg";
import phoneIcon from "../../assets/landlineIcon.png";
import whatsappIcon from "../../assets/whatsapp.png";
import emailIcon from "../../assets/emailIcon.svg";

const Footer = () => {
  return (
    <div className="footer" id="footerID">
      <Container>
        <div className="FlexSection">
          <div className="logoSection">
            <Image className="logoFooter" src={logo} alt="Logo footer" />
            <p>Register Now and Unlock Exclusive Benefits!</p>

            <div className="formEmail">
              {/* <input type="text" placeholder="Your email address" />
              <span>
                <Image className="logoFooter" src={arrow} alt="Logo footer" />
              </span> */}

              <Link to={"/joiningForm"}>Join Us</Link>
            </div>
          </div>

          <div className="LinkSite LinkSiteMobile">
            <div className="contentBox contentBoxContentPhones">
              <h5>contact us</h5>
              <ul>
                <li>
                  <Link to="https://wa.me/97142560500" target="_blank">
                    <Image src={whatsappIcon} alt="whatsapp Icon" />
                    <p>+971 425 60 500</p>
                  </Link>
                </li>

                <li>
                  <Image src={phoneIcon} alt="Telephone Icon" />
                  <p>+971 425 60 500</p>
                </li>
                <li>
                  <Image src={emailIcon} alt="Email Icon" />
                  <p>info@thegenuine.ae</p>
                </li>
              </ul>
            </div>

            <div className="contentBox">
              <h5>Head Office</h5>
              <ul>
                <li>
                  <p>Tamani Arts Offices </p>
                </li>

                <li>
                  <p>Business Bay</p>
                </li>

                <li>
                  <p>Dubai, United Arab Emirates</p>
                </li>
              </ul>
            </div>

            {/* <div className="contentBox">
              <h5>Sitemap</h5>
              <ul>
                <li>
                  <Link to={"/"}>Home</Link>
                </li>

                <li>
                  <Link to={"/sell"}>Sell</Link>
                </li>

                <li>
                  <Link to={"/buy"}>Buy</Link>
                </li>
              </ul>
            </div> */}
          </div>

          <div className="LinkSiteDeskTop">
            <div className="LinkSite sectionTop">
              {/* <div className="contentBox">
                <h5>Sitemap</h5>
                <ul>
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>

                  <li>
                    <Link to={"/sell"}>Sell</Link>
                  </li>

                  <li>
                    <Link to={"/buy"}>Buy</Link>
                  </li>
                </ul>
              </div> */}

              <div className="contentBox">
                <h5>Head Office</h5>
                <ul>
                  <li>
                    <p>Tamani Arts Offices </p>
                  </li>

                  <li>
                    <p>Business Bay</p>
                  </li>

                  <li>
                    <p>Dubai, United Arab</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="contentBoxDeskTop contentBoxContentPhones">
              <ul>
                <li>
                  <Link to="https://wa.me/97142560500" target="_blank">
                    <Image src={whatsappIcon} alt="whatsapp Icon" />
                    <p>+971 425 60 500</p>
                  </Link>
                </li>

                <li>
                  <Image src={phoneIcon} alt="Telephone Icon" />
                  <p>+971 425 60 500</p>
                </li>

                <li>
                  <Link to="mailto:info@thegenuine.ae">
                    <Image src={emailIcon} alt="Email Icon" />
                    <p>info@thegenuine.ae</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footerSocialMedia">
          <ul className="linkIcone">
            <li>
              <Link
                to={"https://www.instagram.com/thegenuine.ae/"}
                target="_blank"
              >
                <Image src={InstagramIcon} alt="image instagram icon" />
              </Link>
            </li>

            <li>
              <Link
                to={"https://www.linkedin.com/company/thegenuine/"}
                target="_blank"
              >
                <Image src={LinkedinIcon} alt="image instagram icon" />
              </Link>
            </li>

            <li>
              <Link
                to={"https://www.facebook.com/TheGenuine.Ae"}
                target="_blank"
              >
                <Image src={FacebookIcon} alt="image instagram icon" />
              </Link>
            </li>
          </ul>

          <p className="sectionCopyright">The Genuine Website.</p>
          <p className="sectionCopyright">Copyright © 2024 The Genuine.</p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
