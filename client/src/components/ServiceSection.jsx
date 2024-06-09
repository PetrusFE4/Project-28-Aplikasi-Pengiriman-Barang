import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../assets/css/ServiceSection.css";
import { IoDocumentText } from "react-icons/io5";
import { FaTruckFast, FaTruckPlane } from "react-icons/fa6";

function ServiceSection() {
  return (
    <section className="service container-fluid pt-5 pb-5" id="service-section">
      <div className="container-service d-flex flex-column justify-content-center gap-5">
        <div className="header-service text-center">
          <h2 className="fs-2 fw-bold">
            Our <span>Service</span>
          </h2>
          <p>These are some of the service you will get</p>
        </div>
        <div className="content-service d-flex flex-wrap justify-content-around  ps-5 pe-5 mb-5 gap-5">
          <div className="card-service d-flex flex-column gap-3 rounded-3">
            <div className="icon-service p-2 rounded-3 d-flex justify-content-center align-items-center">
              <IoDocumentText size={35} color="#fff" />
            </div>
            <p className="fs-5 fw-bold">Document Delivery</p>
            <p className="description-service">
              A fast and secure document delivery service to ensure your
              important documents arrive on time.
            </p>
          </div>
          <div className="card-service d-flex flex-column gap-3 rounded-3">
            <div className="icon-service p-2 rounded-3 d-flex justify-content-center align-items-center">
              <FaTruckFast size={35} color="#fff" />
            </div>
            <p className="fs-5 fw-bold">Goods Delivery</p>
            <p className="description-service">
              A service for delivering your daily essential items with a
              guarantee of quick, safe, and efficient delivery.
            </p>
          </div>
          <div className="card-service d-flex flex-column gap-3 rounded-3">
            <div className="icon-service p-2 rounded-3 d-flex justify-content-center align-items-center">
              <FaTruckPlane size={35} color="#fff" />
            </div>
            <p className="fs-5 fw-bold">Cargo Delivery</p>
            <p className="description-service">
              A service for delivering large quantities of cargo or heavy items
              via land, sea, or air.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;