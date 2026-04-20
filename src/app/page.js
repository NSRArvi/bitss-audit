import Container from "@/components/Container/Container";
import { FinalCTA } from "@/components/Home/FinalCTA";
import Hero from "@/components/Home/Hero";
import WhatWeAreSecure from "@/components/Home/WhatWeAreSecure";
import React from "react";

const page = () => {
  return (
    <Container>
      <Hero />
      <WhatWeAreSecure />
      <FinalCTA
        text1={"Protect Your "}
        text2={"Blockchain Business"}
        text3={
          "Get a crypto audit or security review for your project, platform, or infrastructure from the experts at Bitss."
        }
        text4={"Request A Security Review"}
        text5={"Contact Us"}
        btnWidth={"w-47"}
      />
    </Container>
  );
};

export default page;
