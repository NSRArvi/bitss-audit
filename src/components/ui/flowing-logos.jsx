import { cn } from "@/lib/utils";

const FlowingLogo = ({
  children,
  vertical = false,
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
      "group relative flex h-full w-full overflow-hidden p-1 [--duration:10s] [--gap:12px] gap-(--gap)",
      vertical ? "flex-col" : "flex-row",
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
          "pointer-events-none absolute inset-0 z-10 h-full w-full",
          vertical ? "bg-linear-to-b" : "bg-linear-to-r",
        )}
      />
    )}
  </div>
);

const LogoCard = ({ logo, className, variant = "square" }) => (
  <div
    className={cn(
      "flex items-center justify-center shrink-0 cursor-pointer overflow-hidden rounded-xl border border-transparent transition-all",
      {
        "h-16 w-20": variant === "square",
        "h-14 w-auto px-5 py-3 min-w-20 max-w-100": variant === "wide",
        "h-auto w-auto p-2": variant === "auto",
      },
      className,
    )}
  >
    <img
      src={logo.image}
      alt={logo.name}
      className={cn("rounded-xl", {
        "h-full w-full object-cover": variant === "square",
        "h-full w-auto object-contain max-h-8": variant === "wide",
        "max-h-12 w-auto object-contain": variant === "auto",
      })}
    />
  </div>
);

export const FlowingLogos = ({
  data,
  className,
  cardClassName,
  variant = "square",
}) => (
  <div className={cn("w-full overflow-hidden", className)}>
    {[false].map((reverse, index) => (
      <FlowingLogo
        key={`Canopy-${index}`}
        reverse={reverse}
        className="[--duration:10s]"
        pauseOnHover
        applyMask
        repeat={9}
      >
        {data.map((logo) => (
          <LogoCard
            key={logo.name}
            logo={logo}
            variant={variant}
            className={cardClassName}
          />
        ))}
      </FlowingLogo>
    ))}
  </div>
);
