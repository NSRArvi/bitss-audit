import { cn } from "@/lib/utils";

export default function Heading({
  subHeading,
  heading,
  text,
  headingClassName,
}) {
  return (
    <div>
      <p className="text-primary/50 font-inter text-sm font-medium tracking-widest">
        {subHeading}
      </p>
      <h2
        className={cn(
          "font-inter font-medium text-2xl md:text-4xl lg:text-5xl leading-7 md:leading-10 lg:leading-15 mt-2",
          headingClassName,
        )}
      >
        {heading}
      </h2>
      <p className="font-inter text-lg text-gray-600 leading-8 mb-10 mt-5">
        {text}
      </p>
    </div>
  );
}
