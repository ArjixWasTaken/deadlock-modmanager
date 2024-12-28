import { FAQSection } from "@/components/faq";
import { FeaturesSection } from "@/components/features";
import { GettingStartedSection } from "@/components/getting-started";
import { HeroSection } from "@/components/hero";
import { getLatestVersion } from "@/lib/utils";
import { GoogleAnalytics } from "nextjs-google-analytics";

export const revalidate = 3600

const IndexPage: React.FC = async () => {
  const version = await getLatestVersion();

  return (
    <>
      <GoogleAnalytics trackPageViews />
      <HeroSection version={version} />
      <FeaturesSection />
      <GettingStartedSection />
      <FAQSection />
    </>
  );
};

export default IndexPage;
