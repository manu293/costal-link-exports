"use client";

// imports
import React from "react";
import { LuContact } from "react-icons/lu";
import { TiDocumentText } from "react-icons/ti";
import { FaAnglesRight } from "react-icons/fa6";
import { LiaMapMarkerAltSolid } from "react-icons/lia";

// styles
import "./footerSection.styles.css";

const FooterSection = () => {
  return (
    <footer>
      <div className="footerLetsGetStarted">
        <div className="footerImageContentContainer">
          <h1 className="footerImageHeaderText">
            Let&rsquo;s Start Shipping Your Goods
          </h1>
          <div
            className="footerGetStartedContainer"
            onClick={() =>
              (window.location.href = `mailto:coastallinkexports@gmail.com`)
            }
          >
            <span className="footerGetStartedText">Get Started</span>
            <FaAnglesRight color="#fff" />
          </div>
        </div>
        <div className="footerOverlay" />
      </div>
      <div className="footerInfoSection">
        <div className="footerInfoSubSection">
          <div className="footerInfoSubContainer">
            <LiaMapMarkerAltSolid size={45} color="#f17e01" />
            <h5 className="footerInfoSubContainerHeaderText">Office</h5>
            <p className="footerInfoSubContainerHeaderSubText">
              Centre For Basic Sciences Building, Kasturba Medical College,
              Madhav Nagar, Manipal, Karnataka 576119
            </p>
          </div>
          <div id="contact" className="footerInfoSubContainer">
            <LuContact size={45} color="#f17e01" />
            <h5 className="footerInfoSubContainerHeaderText">Contact</h5>
            <div className="footerInfoSubContainerHeaderSubText">
              <div className="footerBusinessDetailsSection">
                <span className="footerBusinessDetailSubSection">
                  <span className="footerBusinessDetailSubSectionText">
                    Ms. Vinoda S Shetty:
                  </span>
                  <a
                    href={`tel:+919964714516`}
                    className="footerBusinessDetailSubSectionText2"
                  >
                    +91 99647 14516
                  </a>
                </span>
                <span className="footerBusinessDetailSubSection">
                  <span className="footerBusinessDetailSubSectionText">
                    Mr. Nagaraja S Shetty:
                  </span>
                  <a
                    href={`tel:+918277185463`}
                    className="footerBusinessDetailSubSectionText2"
                  >
                    +91 82771 85463
                  </a>
                </span>
                <span className="footerBusinessDetailSubSection">
                  <span className="footerBusinessDetailSubSectionText">
                    Mr. Dhanush G Hegde:
                  </span>
                  <a
                    href={`tel:+919353083820`}
                    className="footerBusinessDetailSubSectionText2"
                  >
                    +91 93530 83820
                  </a>
                </span>
                <span className="footerBusinessDetailSubSection">
                  <span className="footerBusinessDetailSubSectionText">
                    Email:
                  </span>
                  <span
                    className="footerBusinessDetailSubSectionText2"
                    onClick={() =>
                      (window.location.href = `mailto:coastallinkexports@gmail.com`)
                    }
                  >
                    coastallinkexports@gmail.com
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="footerInfoSubContainer">
            <TiDocumentText size={45} color="#f17e01" />
            <h5 className="footerInfoSubContainerHeaderText">
              Business Details
            </h5>
            <div className="footerInfoSubContainerHeaderSubText">
              <div className="footerBusinessDetailsSection">
                <span className="footerBusinessDetailSubSection">
                  <span className="footerBusinessDetailSubSectionText">
                    GST No:
                  </span>
                  <span className="footerBusinessDetailSubSectionText2">
                    29AATFC7639L1ZH
                  </span>
                </span>
                <span className="footerBusinessDetailSubSection">
                  <span className="footerBusinessDetailSubSectionText">
                    Import Export Code No:
                  </span>
                  <span className="footerBusinessDetailSubSectionText2">
                    AARFC7639L
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <p className="footerIntoCopyRightText">© 2024 Costal Link Exports</p>
      </div>
    </footer>
  );
};

export default FooterSection;
