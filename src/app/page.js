import Container from "@/components/Container/Container";
import BitssProtectionProducts from "@/components/Home/BitssProtectionProducts";
import HeroBanner from "@/components/Home/HeroBanner";
import OurSecurityProcess from "@/components/Home/OurSecurityProcess";
import Testimonials from "@/components/Home/Testimonials";
import WhatWeSecure from "@/components/Home/WhatWeSecure";
import React from "react";

const page = () => {
  return (
    <Container>
      <HeroBanner />
      <WhatWeSecure />
      <BitssProtectionProducts />
      <OurSecurityProcess />
      <Testimonials />
    </Container>
  );
};

export default page;
