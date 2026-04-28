import Container from "@/components/Container/Container";
import HeroBanner from "@/components/Home/HeroBanner";
import WhatWeSecure from "@/components/Home/WhatWeSecure";
import React from "react";

const page = () => {
  return (
    <>
      <Container>
        <HeroBanner />
      </Container>
      <WhatWeSecure />
    </>
  );
};

export default page;
