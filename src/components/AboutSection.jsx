import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../assets/css/AboutSection.css";
import ImageAbout from "../assets/img/image-about.svg";
import { FaArrowRightLong } from "react-icons/fa6";
import { ButtonStyle } from "./StyledComponents";

function AboutSection() {
  return (
    <section
      className="about container-fluid ps-4 pe-4 ps-sm-5 ps-sm-5 d-flex flex-column flex-sm-row pt-3 pb-5 pb-sm-0 justify-content-between align-items-center gap-5"
      id="about"
    >
      <div className="image-about ps-3 pe-3 ps-sm-1 pe-sm-1 ps-lg-5 pe-lg-5">
        <img src={ImageAbout} alt="about" />
      </div>
      <div className="content-about d-flex flex-column gap-3 ps-lg-5 pe-lg-5 m-lg-5 ">
        <h2 className="fs-2 fw-bold">
          <span>About</span> Us
        </h2>
        <p>
          We are a leading parcel delivery service provider that prioritizes
          speed, security, and convenience in every delivery process. With
          advanced technology and a wide-reaching network, we ensure your items
          arrive at their destination on time and in perfect condition.
        </p>
        <div className="button-container">
          <ButtonStyle
            padding={"10px 25px"}
            className="button-about d-flex justify-content-around align-items-center"
            onClick={() => (window.location.href = "/support")}
          >
            Support <FaArrowRightLong />
          </ButtonStyle>
        </div>
      </div>
    </section>
  );
}
export default AboutSection;
