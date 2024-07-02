// imports
import React from "react";
import Link from "next/link";
import Image from "next/image";

// local imports
import costalLinkExports from "../../../public/images/logo.png";

// styles
import "./headerSection.styles.css";

const HeaderSection = () => {
  return (
    <header className="headerSection">
      <a href="./" className="headerTitle">
        <Image
          fill
          className="headerImage"
          alt="Costal Link Exports"
          src={costalLinkExports}
        />
      </a>
      <div className="headerLinkContainer">
        <Link className="headerLinkText" href="#products">
          Products
        </Link>
        <Link className="headerLinkText" href="#partners">
          Partners
        </Link>
        <Link className="headerLinkText" href="#contact">
          Contact
        </Link>
      </div>
    </header>
  );
};

export default HeaderSection;
