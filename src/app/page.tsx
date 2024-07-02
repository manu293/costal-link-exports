// local imports
import AboutUsSection from "@/components/AboutUsSection/aboutUs.component";
import HeaderSection from "@/components/HeaderSection/headerSection.component";
import FooterSection from "@/components/FooterSection/footerSection.component";
import PartnersSection from "@/components/PartnersSection/partnersSection.component";
import CustomerReviews from "@/components/CustomersReview/customersReview.component";
import CommitmentSection from "@/components/CommitmentSection/commitmentSection.component";

export default function Home() {
  return (
    <>
      <HeaderSection />
      <AboutUsSection />
      <main className="mainContainer">
        <CustomerReviews />
        <CommitmentSection />
        <PartnersSection />
      </main>
      <FooterSection />
    </>
  );
}
