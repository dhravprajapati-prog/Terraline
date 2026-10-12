import PageIntro from "../components/PageIntro.jsx";
import SmartQuoteEstimator from "../components/SmartQuoteEstimator.jsx";

export default function ContactPage() {
  return (
    <>
      <PageIntro
        chapter="Contact"
        description="Share a few details about your project. Our team will help define the right survey scope and next steps."
        eyebrow="Start a conversation / Project enquiries"
        title="Let’s scope your next project."
      />
      <SmartQuoteEstimator />
    </>
  );
}
