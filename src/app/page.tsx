// local imports
import AboutUsSection from "@/components/AboutUsSection/aboutUs.component";
import HeaderSection from "@/components/HeaderSection/headerSection.component";
import FooterSection from "@/components/FooterSection/footerSection.component";
import ServiceSection from "@/components/ServicesSection/servicesSection.component";
import PartnersSection from "@/components/PartnersSection/partnersSection.component";
import CustomerReviews from "@/components/CustomersReview/customersReview.component";
import MileStonesSection from "@/components/MileStoneSection/mileStoneSection.component";
import CommitmentSection from "@/components/CommitmentSection/commitmentSection.component";

export default function Home() {
  return (
    <>
      <HeaderSection />
      <main className="mainContainer">
        <AboutUsSection />
        <CommitmentSection />
        <MileStonesSection />
        <ServiceSection />
        <PartnersSection />
        <CustomerReviews />
      </main>
      <FooterSection />
    </>
  );
}
