import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
const testimonials = [
  {
    description:
      "Working with this security team has been one of the best decisions for our Web3 project. They didn't simply identify vulnerabilities—they helped us understand the underlying risks and improve our overall architecture. Their responsiveness, professionalism, and in-depth blockchain knowledge made the entire engagement smooth and highly valuable for our engineering team.",
    image:
      "https://www.monstervoice.co.uk/wp-content/uploads/2023/01/Michael-Carter.jpg",
    name: "Michael Carter",
    handle: "Founder & CEO",
  },
  {
    description:
      "Their attention to detail during the smart contract review was exceptional. Every recommendation was backed by technical reasoning and practical examples, making it easy for our developers to implement fixes. Beyond the audit itself, they continued providing guidance that improved our security practices and operational confidence before our public launch.",
    image:
      "https://forumhealth.com/wp-content/uploads/2023/07/EmilyRodriguez-Madison-scaled-e1699544849136-768x768.webp",
    name: "Emily Rodriguez",
    handle: "Product Lead",
  },
  {
    description:
      "From the initial consultation to the final audit report, the experience was professional, transparent, and highly collaborative. The team demonstrated an excellent understanding of blockchain security and emerging attack vectors, helping us eliminate critical issues while optimizing contract performance. We would confidently recommend their services to any serious Web3 project.",
    image:
      "https://asiafoundation.org/wp-content/uploads/2023/05/David-Kim.jpg",
    name: "David Kim",
    handle: "Engineering Manager",
  },
];

export default function Testimonials() {
  return (
    <>
      <section className="text-center mb-4">
        <p className="text-primary text-sm font-semibold">
          Discover what our users are saying about their experiences with CertiK
        </p>
        <h1 className="text-2xl md:text-4xl font-heading font-bold">
          Trusted by Thousands of Web3 Projects
        </h1>
        <span className="w-10 h-0.5 mt-4 bg-primary block text-center mx-auto"></span>
      </section>
      <AnimatedTestimonials data={testimonials} />
    </>
  );
}
