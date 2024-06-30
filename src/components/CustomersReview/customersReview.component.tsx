// imports
import React from "react";

// styles
import "./customersReview.styles.css";

const CustomerReviews = () => {
  return (
    <>
      <div className="customersReviewContainer">
        <h1 className="customersReviewHeader">About Us</h1>

        <div className="customersReviewSection">
          <div className="customerReviewSection">
            <h3 className="customerReviewSubSection">Company Background</h3>
            <span className="customerReviewText">
              Coastal Link Exports was born out of a passion for developing
              exports from the coastal region of Karnataka. Founded by a team of
              experienced individuals in the domains of export, trading, and
              finance, our company is dedicated to promoting exports from the
              coastal regions as well as from the entire State of Karnataka
              while upholding the highest standards of quality and commitment to
              our buyers.
            </span>
          </div>
        </div>
      </div>

      <div>
        <h1 className="customerCertificationTitle">Certifications</h1>
        <p className="customerCertificationSubInfoSubSection">
          As a certified member of the Agricultural and Processed Food Products
          Export Development Authority (APEDA), we take pride in offering you
          the finest quality products, meticulously processed to meet
          international standards.
        </p>
      </div>
    </>
  );
};

export default CustomerReviews;
