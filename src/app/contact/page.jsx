import Banner from "@/components/contact/Banner";
import ContactForm from "@/components/contact/ContactForm";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const page = () => {
  return (
    <div className="relative">
      <Banner />
      <ContactForm />
      <div className="sticky bottom-0 text-green-500 z-50 ">
        <FaWhatsapp
          size={50}
          stroke="green"
          className="absolute bottom-4 right-10  p-6 rounded-full"
        />
      </div>
    </div>
  );
};

export default page;
