import React from "react";
import Heading from "../shared/Heading/Heading";
import Container from "../Container/Container";
import Image from "next/image";
import img from "../../../public/built_on_trust2.png";
const items = [
  "BITSS Crypto Audit Division",
  "BITSS Server Security (BITSS WAP & BITSS VWAR)",
  "BITSS Device Security",
  "BITSS Compliance Advisory",
];

export default function BuiltOnTrust() {
  return (
    // <div className="py-20">
    //   <Container>
    //     <div className=" flex justify-end text-right">
    //       <p className="text-primary/50 font-inter text-sm font-medium tracking-widest">
    //         Built on Research. Trusted Through Results.
    //       </p>
    //       <h2 className="font-inter font-medium text-2xl md:text-4xl lg:text-5xl leading-7 md:leading-10 lg:leading-15 mt-2">
    //         Trusted by BITSS In-Depth Research and Development
    //       </h2>
    //     </div>

    //     <div className="flex flex-col lg:flex-row-reverse items-center justify-between">
    //       <div className="w-full relative">
    //         <p className="text-lg tracking-wide text-gray-600 absolute -top-14 lg:-top-50">
    //           BITSS is not backed by external investors. We are completely
    //           self-funded, self-built, and focused entirely on delivering real
    //           security—not investor returns. <br />
    //           Our expertise comes from in-depth research and development into
    //           cyber security, crypto security, and crypto auditing. Our products
    //           are live. Our audits are real. Our findings have uncovered
    //           security issues that others missed.
    //         </p>

    //         <h3 className="text-xl font-medium mt-6 tracking-widest">
    //           Active Divisions & Ecosystem Status:
    //         </h3>
    //         <div className="grid grid-cols-2 gap-4 mt-5">
    //           {items.map((item, i) => (
    //             <div
    //               key={i}
    //               className="bg-[#F8FAFC] px-5 py-2 rounded-lg flex justify-start items-center gap-5 h-15"
    //             >
    //               <span className="size-7 z-10 flex items-center justify-center rounded-full bg-white text-primary text-sm font-medium">
    //                 0{i + 1}
    //               </span>
    //               <span className="font-medium text-sm">{item}</span>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //       <div className="w-full">
    //         <Image
    //           src={img.src}
    //           alt=""
    //           width={1000}
    //           height={1000}
    //           className="w-full object-cover h-200 max-w-full"
    //         />
    //       </div>
    //     </div>
    //   </Container>
    // </div>
    <div className="py-20">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Left Image */}
          <div className="w-full lg:w-1/2">
            <Image
              src={img.src}
              alt=""
              width={1000}
              height={1000}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2">
            <p className="text-primary/50 font-inter text-sm font-medium tracking-widest text-right">
              Built on Research. Trusted Through Results.
            </p>

            <h2 className="font-inter font-medium text-2xl md:text-4xl lg:text-5xl leading-7 md:leading-10 lg:leading-15 mt-2 text-right">
              Trusted by BITSS In-Depth Research and Development
            </h2>

            <p className="text-lg tracking-wide text-gray-600 mt-8 text-right">
              BITSS is not backed by external investors. We are completely
              self-funded, self-built, and focused entirely on delivering real
              security—not investor returns.
              <br />
              <br />
              Our expertise comes from in-depth research and development into
              cyber security, crypto security, and crypto auditing. Our products
              are live. Our audits are real. Our findings have uncovered
              security issues that others missed.
            </p>

            <h3 className="text-xl font-medium mt-8 tracking-widest text-right">
              Active Divisions & Ecosystem Status:
            </h3>

            <div className="grid grid-cols-2 gap-4 mt-5">
              {items.map((item, i) => (
                <div
                  key={i}
                  className="bg-[#F8FAFC] px-5 py-2 rounded-lg flex items-center gap-5 h-15"
                >
                  <span className="size-7 flex items-center justify-center rounded-full bg-white text-primary text-sm font-medium">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
