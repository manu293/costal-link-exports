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
          <span className="partnersHeaderSubText">Founder 1</span>
          <hr className="partnersDividerLine" />
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </span>
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
          <span className="partnersHeaderSubText">Founder 2</span>
          <hr className="partnersDividerLine" />
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </span>
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
          <span className="partnersHeaderSubText">Founder 3</span>
          <hr className="partnersDividerLine" />
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </span>
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
    </div>
  );
};

export default PartnersSection;
