import bgImage from "../../app/assets/hero_banner1.webp";
import { Globe, MoveRight, ShieldCheck, Trophy, User } from "lucide-react";
import { Badge } from "../ui/badge";
import Container from "../Container/Container";
import Link from "next/link";

const HeroBanner = () => {
  const lists = [
    { title: "Smart Contracts", value: "Reviewed" },
    { title: "Wallets Control", value: "Checked" },
    { title: "Infrastructure", value: "In Scope" },
    { title: "Admin Access", value: "Assessed" },
    { title: "APIs/Frontend", value: "Tested" },
    { title: "Governance Risk", value: "Rated" },
    ,
  ];
  const lists2 = [
    { icon: ShieldCheck, title: "24/7 Protection" },
    { icon: User, title: " Expert Security Team" },
    { icon: Trophy, title: "Proven Methodology" },
    { icon: Globe, title: "Global Trust" },
  ];
  return (
    <>
      <div
        style={{ backgroundImage: `url(${bgImage.src})` }}
        className="relative h-auto w-full bg-center bg-cover overflow-hidden py-16"
      >
        <Container>
          <div className="relative z-20 flex flex-col md:flex-row gap-20 md:gap-0 p-5 md:px-10 md:py-16">
            <div className="flex-1">
              <p className="text-primary font-bold text-xs">
                BITSS CRYPTO SECURITY
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[80px] text-white font-black font-heading pt-2 pb-1 md:py-5 w-full md:w-3/4">
                Crypto Security For{" "}
                <span className="bg-linear-to-r from-[#1E88E5] to-[#4FC3F7] bg-clip-text text-transparent">
                  Serious Blockchain Businesses
                </span>
              </h2>
              <p className="text-sm text-white py-3 md:pb-6 w-full md:w-2/3">
                Bitss protects crypto websites, wallets, exchanges, APIs, smart
                contracts, server logins, and blockchain infrastructure using
                cybersecurity products, audit intelligence, and continuous
                protection.
              </p>
              <div className="flex flex-col md:flex-row gap-4 text-center mt-4">
                <Link
                  href={"/audit-form"}
                  className="text-white px-6 py-2.5 rounded-lg flex gap-3 items-center cursor-pointer bg-primary/80 hover:bg-primary hover:transition-all duration-300 text-center justify-center"
                >
                  Request Crypto Security Review <MoveRight className="mt-1" />
                </Link>
                <Link
                  href={"https://bitss.one/products"}
                  target="blank"
                  className="bg-transparent text-white px-6 py-2.5 flex gap-3 items-center cursor-pointer hover:bg-primary hover:border-primary border border-primary  rounded-lg hover:transition-all duration-300 justify-center"
                >
                  Explore Protection Products <MoveRight className="mt-1" />
                </Link>
              </div>
            </div>
            <div className="w-full md:w-75 h-fit backdrop-blur-md flex flex-col items-center justify-center rounded-xl ">
              <div className="px-2 shadow-sm py-2 md:py-6 rounded-xl ">
                <h3 className="font-semibold text-lg text-white flex justify-between items-center">
                  Security Coverage{" "}
                  <span className="text-green-400">
                    <ShieldCheck />
                  </span>
                </h3>
                <div>
                  <ul>
                    {lists.map((item, i) => (
                      <li
                        key={i}
                        className="flex text-sm text-white w-full justify-between text-center border-b border-b-primary/50  my-2 pb-2 gap-16"
                      >
                        <p className="">{item.title && item.title}</p>
                        <Badge variant="secondary" className="">
                          {item.value && item.value}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                  <div className="py-2 ">
                    <h3 className="text-white text-sm">
                      AutoAudit Risk Over 82/100
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <div className="bg-black/20 backdrop-blur-md py-6 md:px-8 mt-auto">
          <Container>
            <div className=" grid grid-cols-2 md:grid-cols-4 text-start gap-4 text-white mt-auto md:w-2/3">
              {lists2.map((list, idx) => {
                const Icon = list.icon;
                return (
                  <span key={idx} className="flex items-center gap-1 text-sm">
                    <Icon size={18} className="text-primary font-bold" />{" "}
                    {list.title}
                  </span>
                );
              })}
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
