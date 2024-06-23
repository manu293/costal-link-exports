// imports
import React from "react";
import Image from "next/image";

// imports
import airShippingImage from "../../../public/images/air_shipping.webp";
import seaShippingImage from "../../../public/images/sea_shipping.webp";
import roadShippingImage from "../../../public/images/road_shipping.webp";

// styles
import "./serviceSection.styles.css";

const ServiceSection = () => {
  return (
    <div>
      <h1 className="serviceSectionHeader">
        Discover The Full Range Of Services We Offer For Shipping
      </h1>
      <div className="serviceInfoSectionContainer">
        <div className="serviceInfoContainer">
          <div className="serviceInfoSubContainer">
            <Image
              fill
              alt="road shipping"
              src={roadShippingImage}
              className="serviceInfoRoadShipping"
            />
          </div>
          <div className="serviceInfoTextContainer">
            <div className="serviceInfoTextSection">
              <h4 className="serviceInfoSection1Text">Road Shipping</h4>
              <h4 className="serviceInfoSection1Text">01</h4>
            </div>
            <div>
              <p className="serviceInfoSubSectionText">
                offers a reliable and efficient method for transporting export
                products, ensuring they reach Mangaluru safely and quickly. The
                city&rsquo;s well-connected road network from various districts
                of Karnataka and Kerala facilitates smooth logistics for
                exporters.
              </p>
            </div>
          </div>
        </div>
        <div className="serviceInfoContainer">
          <div className="serviceInfoSubContainer">
            <Image
              fill
              alt="sea shipping"
              src={seaShippingImage}
              className="serviceInfoSeaShipping"
            />
          </div>

          <div className="serviceInfoTextContainer">
            <div className="serviceInfoTextSection">
              <h4 className="serviceInfoSection1Text">Sea Shipping</h4>
              <h4 className="serviceInfoSection1Text">02</h4>
            </div>
            <div>
              <p className="serviceInfoSubSectionText">
                from Mangaluru seaport ensures efficient export of products with
                extensive maritime connectivity. The city&rsquo;s strategic
                location and robust port infrastructure enable safe and swift
                transportation of goods globally.
              </p>
            </div>
          </div>
        </div>
        <div className="serviceInfoContainer">
          <div className="serviceInfoSubContainer">
            <Image
              fill
              alt="air shipping"
              src={airShippingImage}
              className="serviceInfoAirShipping"
            />
          </div>

          <div className="serviceInfoTextContainer">
            <div className="serviceInfoTextSection">
              <h4 className="serviceInfoSection1Text">Air Shipping</h4>
              <h4 className="serviceInfoSection1Text">03</h4>
            </div>
            <div>
              <p className="serviceInfoSubSectionText">
                via Mangaluru airport ensures rapid and secure export of
                products across the globe. The airport&rsquo;s excellent
                connectivity facilitates swift transportation, making it ideal
                for time-sensitive shipments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
