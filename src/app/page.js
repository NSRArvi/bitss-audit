import Container from "@/components/Container/Container";
import BITSSProductSuite from "@/components/Home/BITSSProductSuite";
import BitssProtectionProducts from "@/components/Home/BitssProtectionProducts";
import BuiltOnTrust from "@/components/Home/BuiltOnTrust";
import CoreSolutions from "@/components/Home/CoreSolutions";
import GlobalRegulatory from "@/components/Home/GlobalRegulatory";
import HeroBanner from "@/components/Home/HeroBanner";
import MarketNecessityAndInsights from "@/components/Home/MarketNecessityAndInsights";
import OurSecurityProcess from "@/components/Home/OurSecurityProcess";
import Testimonials from "@/components/Home/Testimonials";
import WhatWeSecure from "@/components/Home/WhatWeSecure";

const page = () => {
  return (
    <div className="">
      <HeroBanner />
      {/* <WhatWeSecure /> */}
      {/* <BitssProtectionProducts /> */}
      {/* <OurSecurityProcess /> */}
      {/* <Testimonials /> */}
      <CoreSolutions />
      <MarketNecessityAndInsights />
      <GlobalRegulatory />
      <BITSSProductSuite />
      <BuiltOnTrust />
    </div>
  );
};

export default page;
