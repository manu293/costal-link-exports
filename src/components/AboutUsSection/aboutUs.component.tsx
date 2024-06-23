// imports
import React from "react";
import Image from "next/image";

// local imports
import efficientCargoImage from "../../../public/images/efficient_cargo.jpg";

// styles
import "./aboutUs.styles.css";

const AboutUsSection = () => {
  return (
    <div>
      <h1 className="aboutUsSectionHeader">
        Efficient Cargo Delivery Worldwide
      </h1>
      <p className="aboutUsSectionSubHeader">
        As a certified member the Agricultural and Processed Food Products
        Export Development Authority (APEDA) we take pride in offering you the
        finest quality products, meticulously processed to meet international
        standards.
      </p>
      <div className="aboutUsImageContainer">
        <Image
          fill
          src={efficientCargoImage}
          alt="efficient cargo shipping"
          className="serviceInfoRoadShipping"
        />
      </div>
    </div>
  );
};

export default AboutUsSection;
