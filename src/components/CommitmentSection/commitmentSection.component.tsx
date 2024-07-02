// imports
import React from "react";
import Image from "next/image";
import { BiSolidTShirt } from "react-icons/bi";
import { MdEngineering } from "react-icons/md";
import { MdElectricBolt } from "react-icons/md";
import { FaSprayCanSparkles } from "react-icons/fa6";

// local imports
import cargoBgImage from "../../../public/images/cargos.webp";
import product1Image from "../../../public/images/product_display_1.webp";
import product2Image from "../../../public/images/product_display_2.webp";
import product3Image from "../../../public/images/product_display_3.webp";
import product4Image from "../../../public/images/product_display_4.webp";
import product5Image from "../../../public/images/product_display_5.webp";
import product6Image from "../../../public/images/product_display_6.webp";
import product7Image from "../../../public/images/product_display_7.webp";
import product8Image from "../../../public/images/product_display_8.webp";

// styles
import "./commitmentSection.styles.css";

const CommitmentSection = () => {
  return (
    <div id="commitment">
      <h3 className="commitmentSubInfoSection">
        Partnership
        <br />
      </h3>
      <p className="commitmentSubInfoSubSection">
        Apart from agricultural commodities and seafood, Coastal Link Exports
        has tie-ups with MSME manufacturers in the following sectors:
      </p>
      <div className="commitmentSectorsContainer">
        <div className="commitmentSectors">
          <div className="commitmentSectorsCircle">
            <FaSprayCanSparkles color="#fff" size={30} />
          </div>
          <p className="commitmentSectorsSubTitle">Plastic goods</p>
        </div>
        <div className="commitmentSectors">
          <div className="commitmentSectorsCircle">
            <MdEngineering color="#fff" size={30} />
          </div>
          <p className="commitmentSectorsSubTitle">Engineering goods</p>
        </div>
        <div className="commitmentSectors">
          <div className="commitmentSectorsCircle">
            <MdElectricBolt color="#fff" size={30} />
          </div>
          <p className="commitmentSectorsSubTitle">Electrical goods</p>
        </div>
        <div className="commitmentSectors">
          <div className="commitmentSectorsCircle">
            <BiSolidTShirt color="#fff" size={30} />
          </div>
          <p className="commitmentSectorsSubTitle">Garments & Textiles</p>
        </div>
      </div>
      <p className="commitmentSubInfoSubSection">
        We have their mandate to promote exports of their manufactured products.
        Mangaluru is well connected by road, air, and sea, and therefore we
        export sourced products from across the State of Karnataka through
        Mangaluru airport and seaport. Mangaluru is well connected by road from
        different districts of Karnataka and Kerala, making it easy for the
        products meant for export to reach safely and quickly
      </p>

      <h3 className="commitmentSubInfoSection2">Products</h3>
      <div className="commitmentProductsSection" id="products">
        <div className="commitmentProductContainer">
          <Image
            src={product1Image}
            alt="spices and derivatives"
            className="commitmentProductImage"
          />
          <h4 className="commitmentProductSubTitle">Spices And Derivatives</h4>
        </div>
        <div className="commitmentProductContainer">
          <Image
            src={product2Image}
            alt="Coconut and derivatives"
            className="commitmentProductImage"
          />
          <h4 className="commitmentProductSubTitle">Coconut and derivatives</h4>
        </div>
        <div className="commitmentProductContainer">
          <Image
            src={product3Image}
            alt="Fresh fruits and vegetables"
            className="commitmentProductImage"
          />
          <h4 className="commitmentProductSubTitle">
            Fresh fruits and vegetables
          </h4>
        </div>
        <div className="commitmentProductContainer">
          <Image
            src={product4Image}
            alt="Sea And Processed food"
            className="commitmentProductImage"
          />
          <h4 className="commitmentProductSubTitle">Sea And Processed food</h4>
        </div>
        <div className="commitmentProductContainer">
          <Image
            src={product5Image}
            alt="Engineering goods"
            className="commitmentProductImage"
          />
          <h4 className="commitmentProductSubTitle">Engineering goods</h4>
        </div>
        <div className="commitmentProductContainer">
          <Image
            src={product8Image}
            alt="Garments and textiles"
            className="commitmentProductImage"
          />
          <h4 className="commitmentProductSubTitle">Garments and textiles</h4>
        </div>
        <div className="commitmentProductContainer">
          <Image
            src={product6Image}
            alt="Electrical goods"
            className="commitmentProductImage"
          />
          <h4 className="commitmentProductSubTitle">Electrical goods</h4>
        </div>

        <div className="commitmentProductContainer">
          <Image
            src={product7Image}
            alt="Plastic goods"
            className="commitmentProductImage"
          />
          <h4 className="commitmentProductSubTitle">Plastic goods</h4>
        </div>
      </div>
    </div>
  );
};

export default CommitmentSection;
