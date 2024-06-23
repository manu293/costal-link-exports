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
      <h1 className="aboutUsSectionHeader">Welcome to Coastal Link Exports</h1>
      <p className="aboutUsSectionSubHeader">
        Your Premier Source for Spices and its derivatives, Coconut and its
        derivatives, Fresh fruits and vegetables, Seafood and a wide range of
        processed food. Coastal Link Exports was born out of a passion for
        developing exports from the coastal region of Karnataka. Founded by a
        team of experienced individuals in the domain of export, trading and
        finance, our company is dedicated to promoting exports from the coastal
        regions as well as from the entire State of Karnataka while upholding
        the highest standards of quality and commitment to our buyers.
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
