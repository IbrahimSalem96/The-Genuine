import "./approvedBy.css";
import { Container, Image } from "react-bootstrap";

// Image
// import approvedBTitleIcony from "../../assets/approvedBTitleIcony.svg";
import approvedByImage1 from "../../assets/ApprovedBy/ApprovedByImage1.svg";
import approvedByImage2 from "../../assets/ApprovedBy/ApprovedByImage2.svg";
import approvedByImage3 from "../../assets/ApprovedBy/ApprovedByImage3.svg";
import approvedByImage4 from "../../assets/ApprovedBy/ApprovedByImage4.png";

const ApprovedBy = () => {
  return (
    <Container>
      <div className="approvedBySection">
        <div className="titleSection">
          <h2>Approved <span>By</span></h2>
          {/* <Image src={approvedBTitleIcony} alt="image Fixed Selling Price" /> */}
        </div>

        <div className="boxContentImage">
          <Image src={approvedByImage1} alt="image approved By 1" />
          <Image src={approvedByImage2} alt="image approved By 2" />
          <Image src={approvedByImage3} alt="image approved By 3" />
          <Image src={approvedByImage4} alt="image approved By 4" />
        </div>
      </div>
    </Container>
  );
};

export default ApprovedBy;
