import "./launchingSoon.css";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";

// Image
import listPointers from "../../assets/shape.svg";

import { useState, useEffect } from "react";



const LaunchingSoon = () => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });


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
      <Container>
        <div className="launchingSoonll">
          <p className="subTitle">Coming Soon</p>

          <div className="titleSection">
            <h2>Launching Soon!</h2>
            <Image src={listPointers} alt="image Fixed Selling Price" />
          </div>

          <div className="descSection">
            <p>
              Be the first to experience Dubai’s most innovative real estate
              platform. Sign up today and start your journey with The Genuine.
            </p>
          </div>
        </div>
      </Container>

      <div className="fullImageBoxContentlaunchingSoonll">
        
      <div className="comingSoonCount">
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
      </div>
    </>
  );
};

export default LaunchingSoon;
