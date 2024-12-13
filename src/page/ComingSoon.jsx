import "../css/pages/commingSoon.css";

import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

// Image
import logoSite from "../assets/NewLogoComming.svg";
import burgerMenu from "../assets/barSoMobile.svg";
import facebookIcon from "../assets/Facebook.svg";
import LinkedinIcon from "../assets/LinkedinFill.svg";
import instagramIcon from "../assets/Instagram.svg";
// import logoSiteRight from "../assets/logoSiteRight.png";
// import logoSiteCenter from "../assets/logoSiteCenter.png";
// import logoSiteLeft from "../assets/logoSiteLeft.png";

import { NewHomePage } from "./index";

import { ScrollSown } from "../components/index";

const ComingSoon = () => {
  const [socialMediaIcon, setSocialMediaIcon] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  const showBurgerMenu = () => {
    setSocialMediaIcon(!socialMediaIcon);
  };

  useEffect(() => {
    const targetDate = new Date("2025-01-01T00:00:00");
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

      setTimeRemaining({ days, hours, minutes });

      if (difference < 0) {
        clearInterval(timer);
        setTimeRemaining({ days: 0, hours: 0, minutes: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="commingSoonPageBox">
        <Container>
          <div className="ContnetPage">
            <div className="burgerMenu">
              <Image
                onClick={() => showBurgerMenu()}
                src={burgerMenu}
                alt="Logo Site"
              />

              <div
                className={`socialMediaIcon flex-column ${
                  socialMediaIcon ? "active" : ""
                }`}
              >
                <Link
                  to="https://www.instagram.com/thegenuine.ae/"
                  target="_blank"
                >
                  <Image src={instagramIcon} alt="Instagram icon" />
                </Link>
                <Link
                  to="https://www.linkedin.com/company/thegenuine/"
                  target="_blank"
                >
                  <Image src={LinkedinIcon} alt="Linkedin icon" />
                </Link>
                <Link
                  to="https://www.facebook.com/TheGenuine.Ae"
                  target="_blank"
                >
                  <Image src={facebookIcon} alt="Facebook icon" />
                </Link>
              </div>
            </div>
          </div>

          <div className="d-flex align-items-center flex-column contentTex gap-3 gap-lg-2">
            <Image className="LogoSite" src={logoSite} alt="Logo Site" />

            <h1>
              The only platform in Dubai having the available off-plan units
              updated on daily basis
            </h1>

            {/* <div className="btnLinkBuyAndSell">
              <Link to="/buy">Buy</Link>
              <Link to="/sell">Sell</Link> 

              <Link to="/buy" className="contentBox">
                <div className="imageSectiom">
                  <Image src={logoSiteRight} alt="Logo site section left" />
                </div>
                <h2>Buying</h2>
                <p>Learn More About buying Benefits</p>
              </Link>  

               <Link to="/sell" className="contentBox">
                <div className="imageSectiom">
                  <Image src={logoSiteLeft} alt="Logo site section right" />
                </div>
                <h2>Selling</h2>
                <p>Discover Selling Advantages</p>
              </Link>  
            </div> */}

            {/* <h3>Join Now Before Launching and Unlock Exclusive Benefits!</h3> */}

            <div className="comingSoonCount">
              <h2>Coming Soon</h2>

              <div className="count">
                <div className="fixedForEveryone NumberOfDaysRemaining">
                  <span>
                    {String(timeRemaining.days).padStart(2, "0").charAt(0)}
                  </span>
                  <span>
                    {String(timeRemaining.days).padStart(2, "0").charAt(1) ||
                      "0"}
                  </span>
                </div>
                <span>:</span>
                <div className="fixedForEveryone NumberOfHoursRemaining">
                  <span>
                    {String(timeRemaining.hours).padStart(2, "0").charAt(0)}
                  </span>
                  <span>
                    {String(timeRemaining.hours).padStart(2, "0").charAt(1) ||
                      "0"}
                  </span>
                </div>
                <span>:</span>
                <div className="fixedForEveryone NumberOfMinutesRemaining">
                  <span>
                    {String(timeRemaining.minutes).padStart(2, "0").charAt(0)}
                  </span>
                  <span>
                    {String(timeRemaining.minutes).padStart(2, "0").charAt(1) ||
                      "0"}
                  </span>
                </div>
              </div>
            </div>

            <p className="desTopBtn">
              Join Now Before Launching and Unlock Exclusive Benefits!
            </p>

            <div className="btnLinkBuyAndSell">
              {/* <Link to="/joiningForm" className="joinNowStyle">
                Join Now
              </Link> */}

              <Link to="/joiningForm" className="contentBox marginTopCenter">
                <h2>Join Now</h2>
              </Link>
            </div>
          </div>
        </Container>

        {/* <Image className="imageDownSite" src={cityBack} alt="bg city Site" /> */}

        <ScrollSown />

        <div className="socialMediaIconDesktop">
          <p>Follow us</p>
          <Link to="https://www.instagram.com/thegenuine.ae/" target="_blank">
            <Image src={instagramIcon} alt="Instagram icon" />
          </Link>
          <Link
            to="https://www.linkedin.com/company/thegenuine/"
            target="_blank"
          >
            <Image src={LinkedinIcon} alt="Linkedin icon" />
          </Link>
          <Link to="https://www.facebook.com/TheGenuine.Ae" target="_blank">
            <Image src={facebookIcon} alt="Facebook icon" />
          </Link>
        </div>
      </div>

      <NewHomePage />
    </>
  );
};

export default ComingSoon;
