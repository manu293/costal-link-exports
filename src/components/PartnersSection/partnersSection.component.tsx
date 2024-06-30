"use client";

// imports
import React from "react";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";

// styles
import "./partnersSection.styles.css";

const PartnersSection = () => {
  return (
    <div id="partners">
      <h1 className="partnersSectionHeader">Meet the partners</h1>
      <div className="partnersInfoSection">
        <div className="partnersInfoSectionContainer">
          <h3 className="partnersHeaderText">Nagaraja S Shetty</h3>
          <hr className="partnersDividerLine" />
          <div className="partnersIconSection">
            <div
              className="partnersIconContainer"
              onClick={() =>
                (window.location.href = `mailto:coastallinkexports@gmail.com`)
              }
            >
              <MdOutlineMailOutline size={22} />
            </div>
            <a className="partnersIconContainer" href={`tel:+918277185463`}>
              <MdOutlineLocalPhone size={22} />
            </a>
          </div>
        </div>

        <div className="partnersInfoSectionContainer">
          <h3 className="partnersHeaderText">Vinoda S Shetty</h3>
          <hr className="partnersDividerLine" />
          <div className="partnersIconSection">
            <div
              className="partnersIconContainer"
              onClick={() =>
                (window.location.href = `mailto:coastallinkexports@gmail.com`)
              }
            >
              <MdOutlineMailOutline size={22} />
            </div>
            <a className="partnersIconContainer" href={`tel:+919964714516`}>
              <MdOutlineLocalPhone size={22} />
            </a>
          </div>
        </div>

        <div className="partnersInfoSectionContainer">
          <h3 className="partnersHeaderText">Dhanush G Hegde</h3>
          <hr className="partnersDividerLine" />
          <div className="partnersIconSection">
            <div
              className="partnersIconContainer"
              onClick={() =>
                (window.location.href = `mailto:coastallinkexports@gmail.com`)
              }
            >
              <MdOutlineMailOutline size={22} />
            </div>
            <a className="partnersIconContainer" href={`tel:+919353083820`}>
              <MdOutlineLocalPhone size={22} />
            </a>
          </div>
        </div>
      </div>
      <h1 className="advisorSectionHeader">Advisor</h1>
      <div className="advisorInfoSection">
        <p>
          Coastal Link Exports is guided and advised by{" "}
          <span className="advisorName">K Ravindran</span>, who has vast
          experience in international trade for several decades. He has a
          significant export performance history and has contributed to the
          export of agricultural commodities, engineering goods, garments and
          textiles, FMCG, plastic and allied products, chemicals, etc.
        </p>
      </div>
    </div>
  );
};

export default PartnersSection;
