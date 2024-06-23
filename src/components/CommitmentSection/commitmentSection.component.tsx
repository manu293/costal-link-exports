// imports
import React from "react";
import Image from "next/image";

// local imports
import cargoBgImage from "../../../public/images/cargos.webp";

// styles
import "./commitmentSection.styles.css";

const CommitmentSection = () => {
  return (
    <div id="commitment">
      <h1 className="commitmentSectionHeader">
        Trust our experienced team for secure handling of your cargo
      </h1>
      <div className="commitmentSectionBannerImageContainer">
        <Image
          fill
          alt="cargos"
          src={cargoBgImage}
          className="commitmentSectionBannerImage"
        />
      </div>
      <h3 className="commitmentSubInfoSection">
        Ensure timely delivery with
        <br />
        Utmost Professionalism
      </h3>
      <p className="commitmentSubInfoSubSection">
        As a certified member the Agricultural and Processed Food Products
        Export Development Authority (APEDA) we take pride in offering you the
        finest quality products, meticulously processed to meet international
        standards. Coastal Link Exports is guided and advised by K Ravindran who
        has vast experience in international trade for several decades. He has
        huge export performance behind him and has contributed to export of
        agricultural commodities, engineering goods, garments and textiles,
        FMCG, plastic and allied products, chemicals, etc. Apart from
        agricultural commodities and seafood, Coastal Link Exports has tie up
        with MSME manufacturers in the following sectors.
      </p>
      <div className="commitmentSectorsContainer">
        <div className="commitmentSectors">Plastic goods</div>
        <div className="commitmentSectors">Engineering goods</div>
        <div className="commitmentSectors">Electrical goods</div>
        <div className="commitmentSectors">Garments and textiles</div>
      </div>
    </div>
  );
};

export default CommitmentSection;
