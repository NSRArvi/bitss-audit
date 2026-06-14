import Image from "next/image";
import isoImg from "../../app/assets/iso.webp";
import aseImg from "../../app/assets/ase-removebg-preview.png";
import cdprImg from "../../app/assets/cdpr-logo-removebg-preview.png";
import gdprImg from "../../app/assets/gdpr-removebg-preview.png";

const auditItems = [
  {
    img: isoImg,
    title: "ISO/IEC 27001",
    desc: "Smart Contract Audit Pittert Igmeninc Contino",
  },
  {
    img: cdprImg,
    title: "CDPR Ready",
    desc: "Senrlicin Audit Fio Gea Reort Snvernatie",
  },
  {
    img: gdprImg,
    title: "GDPR Ready",
    desc: "Conoart at Finaviel Cation Yod Gncjn Setions",
  },
  {
    img: aseImg,
    title: "AES 256-bit",
    desc: "Scetem in Audit Porpo Fasat Beecprophe",
  },
];

export default function RequestLists() {
  return (
    <div className="dark:bg-black/30 backdrop-blur-xs md:py-20 rounded-xl">
      <h2 className="text-muted-foreground text-3xl font-bold font-heading leading-tight text-left md:text-center px-6 md:px-0 pt-7 md:pt-5 md:pb-9 pb-7">
        Request Your Crypto Audit
      </h2>
      <div className="w-full">
        <div className="rounded-xl px-6 md:px-0 pb-6 md:py-8 flex flex-col md:flex-row justify-center items-start gap-8">
          {auditItems.map((item, index) => (
            <div key={index} className="flex items-start gap-4 px-6">
              <div className="text-primary">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={100}
                  height={100}
                  className="mx-auto w-16 md:w-20 h-16 md:h-20 object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-gray-900 dark:text-gray-400 text-sm">
                  {item.title}
                </span>
                <span className="text-xs text-gray-500 leading-tight max-w-30">
                  {item.desc}
                </span>
              </div>
              {index < auditItems.length - 1 && (
                <div className="hidden lg:block h-10 w-px bg-gray-200 ml-8" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
