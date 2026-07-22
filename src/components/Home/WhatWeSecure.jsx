import Image from "next/image";
import { WHAT_WE_SECURE } from "@/data/what_we_secure_data";
import Container from "../Container/Container";

const WhatWeSecure = () => {
  return (
    <Container>
      <div className="py-20 mt-20 dark:bg-transparent">
        <section className="text-center mb-4">
          <p className="text-primary text-sm font-semibold">WHAT WE SECURE</p>
          <h1 className="text-2xl md:text-4xl font-heading font-bold">
            {" "}
            Comprehensive Crypto Security
          </h1>
          <span className="w-10 h-0.5 mt-4 bg-primary block text-center mx-auto"></span>
        </section>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 py-8 md:py-16">
          {WHAT_WE_SECURE.map((item, idx) => {
            return (
              <div
                key={idx}
                className="bg-white dark:bg-white/5 px-6 py-8 rounded-2xl backdrop-blur-md shadow space-y-4"
              >
                {item.icon && (
                  <span className="text-primary">
                    {
                      <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center">
                        <Image
                          src={item.icon}
                          alt={item.title}
                          width={30}
                          height={30}
                          className=""
                        />
                      </div>
                    }
                  </span>
                )}
                <h3 className="text-base font-bold py-4 mt-4">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-5.5">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default WhatWeSecure;
