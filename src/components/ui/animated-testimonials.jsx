import React from "react";

import { cn } from "@/lib/utils";
import Image from "next/image";

const AnimatedCanopy = ({
  children,
  vertical = true,
  repeat = 4,
  pauseOnHover = false,
  reverse = false,
  className,
  applyMask = true,
  ...props
}) => (
  <div
    {...props}
    className={cn(
      "group relative flex h-full lg:h-1/2 w-full overflow-hidden p-2 [--duration:10s] [--gap:12px] gap-(--gap)",
      vertical ? "flex-row lg:flex-col" : "flex-row",
      className,
    )}
  >
    {Array.from({ length: repeat }).map((_, index) => (
      <div
        key={`item-${index}`}
        className={cn("flex shrink-0 gap-(--gap)", {
          "group-hover:paused": pauseOnHover,
          "direction-reverse": reverse,
          "animate-canopy-horizontal flex-row": !vertical,
          "animate-canopy-vertical flex-col": vertical,
        })}
      >
        {children}
      </div>
    ))}
    {applyMask && (
      <div
        className={cn(
          "pointer-events-none absolute inset-0 z-10 h-full w-full from-white/50 from-5% via-transparent via-50% to-white/50 to-95% dark:from-gray-800/50 dark:via-transparent dark:to-gray-800/50",
          vertical ? "bg-linear-to-b" : "bg-linear-to-r",
        )}
      />
    )}
  </div>
);

const TestimonialCard = ({ testimonial, className }) => (
  <div
    className={cn(
      "group m-2 flex h-68 w-80 lg:w-full shrink-0 cursor-pointer overflow-auto rounded-xl border border-transparent p-3 transition-all shadow bg-white",
      className,
    )}
  >
    <div className="flex items-start gap-3 mt-4">
      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-gray-200 dark:border-gray-600">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          width={100}
          height={100}
          className="h-full w-full not-prose object-cover"
        />
      </div>
      <div className="flex-1">
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-sm font-bold text-foreground">
            {testimonial.name}
          </span>
          <span className="text-xs text-muted-foreground">
            {testimonial.handle}
          </span>
        </div>
        <p className="py-10 mb-10 text-sm line-clamp-4 text-foreground">
          {testimonial.description}
        </p>
      </div>
    </div>
  </div>
);

// export const AnimatedTestimonials = ({ data, className, cardClassName }) => (
//   <div
//     className={cn(
//       "w-full lg:overflow-x-hidden py-4 grid grid-cols-1 lg:grid-cols-3 gap-4",
//       className,
//     )}
//   >
//     {[true, false, true].map((reverse, index) => (
//       <AnimatedCanopy
//         key={`Canopy-${index}`}
//         reverse={reverse}
//         className="[--duration:15s]"
//         pauseOnHover
//         applyMask={false}
//         repeat={1}
//         vertical={vertical}
//       >
//         {data.map((testimonial) => (
//           <TestimonialCard
//             key={testimonial.name}
//             testimonial={testimonial}
//             className={cardClassName}
//           />
//         ))}
//       </AnimatedCanopy>
//     ))}
//   </div>
// );

export const AnimatedTestimonials = ({ data, className, cardClassName }) => (
  <>
    {/* Mobile: horizontal animation, shown below lg */}
    <div
      className={cn("w-full lg:hidden py-4 grid grid-cols-1 gap-4", className)}
    >
      {[true, false, true].map((reverse, index) => (
        <AnimatedCanopy
          key={`Canopy-mobile-${index}`}
          reverse={reverse}
          className="[--duration:15s]"
          pauseOnHover
          // applyMask={false}
          repeat={1}
          vertical={false}
        >
          {data.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              className={cardClassName}
            />
          ))}
        </AnimatedCanopy>
      ))}
    </div>

    {/* Desktop: vertical animation, shown at lg and above */}
    <div
      className={cn(
        "w-full hidden lg:grid lg:overflow-x-hidden py-4 lg:grid-cols-3 gap-4",
        className,
      )}
    >
      {[true, false, true].map((reverse, index) => (
        <AnimatedCanopy
          key={`Canopy-desktop-${index}`}
          reverse={reverse}
          className="[--duration:15s]"
          pauseOnHover
          applyMask={false}
          repeat={1}
          vertical={true}
        >
          {data.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              className={cardClassName}
            />
          ))}
        </AnimatedCanopy>
      ))}
    </div>
  </>
);
