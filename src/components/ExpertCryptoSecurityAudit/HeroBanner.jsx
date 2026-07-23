import Image from "next/image";
import Link from "next/link";
import sectionHeroImg from "../../app/assets/section_hero1.png";

export default function HeroBanner() {
  return (
    <section className="relative flex flex-col-reverse md:flex-row items-end gap-10 py-20 sm:py-25 md:py-30 lg:py-40">
      <div className=" md:w-1/2">
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[80px] font-black leading-none text-center md:text-left">
          EXPERT CRYPTO SECURITY AUDITS FOR{" "}
          <span className="bg-linear-to-r from-[#0818A8] to-[#1E88E5] bg-clip-text text-transparent">
            COMPLETE SYSTEM PROTECTION
          </span>
        </h1>
        <div className="w-full md:hidden">
          <Image
            src={sectionHeroImg}
            alt="Section Hero Image"
            width={500}
            height={500}
            className="mx-auto"
          />
        </div>
        <p className="my-6 lg:my-10 justify-items-center text-left text-muted-foreground w-full md:w-2/3">
          Full-stack audits Of your smart contracts, wallets, infrastructure,
          and financial systems.
        </p>
        <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-4 mt-8">
          <Link
            href={"/contact"}
            className="text-white w-3/4 md:w-fit px-6 py-2.5 rounded-lg cursor-pointer bg-primary/80 hover:bg-primary hover:transition-all duration-300 flex justify-center"
          >
            {" "}
            Request a Free Consultation
          </Link>
          <Link
            href={"#features"}
            className="bg-transparent w-3/4 md:w-fit hover:text-white px-6 py-2.5 cursor-pointer hover:bg-primary hover:border-primary border border-primary  rounded-lg hover:transition-all duration-300 flex justify-center"
          >
            Explore Services
          </Link>
        </div>
      </div>
      <div className="w-fit flex-1 hidden md:flex">
        <Image
          src={sectionHeroImg}
          alt="Section Hero Image"
          width={500}
          height={500}
          className="mx-auto absolute top-50 right-0 w-170"
        />
      </div>
    </section>
  );
}
