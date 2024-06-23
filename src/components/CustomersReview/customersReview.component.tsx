// imports
import React from "react";
import Image from "next/image";

// local imports
import ProfilePhoto from "../../../public/images/profile.webp";

// styles
import "./customersReview.styles.css";

const CustomerReviews = () => {
  return (
    <div className="customersReviewContainer">
      <h1 className="customersReviewHeader">
        What They Say
        <span className="customerReviewBreakText" />
        About Us
      </h1>

      <div className="customersReviewSection">
        <div className="customerReviewProfileSection">
          <div className="customerReviewProfileImageContainer">
            <Image
              fill
              alt="cargos"
              src={ProfilePhoto}
              className="customerReviewProfileImage"
            />
          </div>
          <div className="customerReviewProfileNameContainer">
            <h3 className="customerReviewProfileNameText">Dennis White</h3>
            <p className="customerReviewProfileNameSubText">California Cargo</p>
          </div>
        </div>
        <div className="customerReviewSection">
          <span className="customerReviewText">
            I have been working with Coastal Link Exports for over a year now,
            and I couldn&rsquo;t be more satisfied with their services. Their
            commitment to quality and timely delivery is unparalleled. The team
            is professional, responsive, and always goes the extra mile to
            ensure our shipments arrive safely and on time. I highly recommend
            Coastal Link Exports to anyone looking for a reliable and efficient
            export partner.
          </span>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
