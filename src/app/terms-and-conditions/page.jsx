import {
  ShieldCheck,
  FileText,
  RefreshCw,
  UserCheck,
  AlertTriangle,
  Lock,
  CreditCard,
  Globe,
  FileCheck,
} from "lucide-react";
import Container from "@/components/Container/Container";
import { Badge } from "@/components/ui/badge";

const termsData = [
  {
    id: "01",
    icon: FileText,
    title: "What We Do",
    items: [
      "BITSS provides professional crypto security audits for all blockchains, coins, and tokens — including but not limited to Solana, Ethereum, BNB, and other blockchain networks.",
      "We offer Standard, Advanced, and Enterprise audit packages.",
    ],
  },
  {
    id: "02",
    icon: ShieldCheck,
    title: "What You Get",
    items: [
      "You will receive a full Audit Report delivered securely through your private BITSS Dashboard, including a PDF report with all findings and risk levels.",
      "Our audit delivers findings only — we identify what the issues are. We do not provide instructions on how to fix them.",
      "This report is not an investment recommendation or legal advice.",
    ],
  },
  {
    id: "03",
    icon: RefreshCw,
    title: "Free Re-Audit Policy",
    highlight:
      "If BITSS finds issues in your project, you are entitled to one free Re-Audit. Here is how it works:",
    items: [
      "You fix all issues identified by BITSS",
      "You request the Re-Audit within 6 months of the original audit date",
      "BITSS will audit again at no extra charge",
      "Only one free Re-Audit is included per purchase",
      "If a second Re-Audit is required within 6 months, it will be charged at 20% of the original audit price",
    ],
  },
  {
    id: "04",
    icon: UserCheck,
    title: "Your Responsibilities",
    items: [
      "Provide all correct and complete project details as requested — including contract address, GitHub repository, and all required documents",
      "Fix all identified issues before requesting a Re-Audit",
      "BITSS is not responsible for any losses arising from issues you did not disclose",
      "You are responsible for any changes made to your project after the audit is completed",
    ],
  },
  {
    id: "05",
    icon: AlertTriangle,
    title: "Our Limitations",
    items: [
      "BITSS cannot guarantee 100% security",
      "Our audit is based only on information available at the time of the audit and information provided by the client",
      "Project owners may change wallets, contracts, or settings after audit completion — BITSS holds no responsibility for post-audit changes",
      "Our report contains findings of your coin or token only — it is not a recommendation, legal opinion, or guarantee of safety",
    ],
  },
  {
    id: "06",
    icon: Lock,
    title: "Confidentiality",
    items: [
      "All project details provided to BITSS remain strictly private",
      "Your audit report is accessible only through your secure BITSS Dashboard",
      "We will never share your report or project details without your explicit permission",
    ],
  },
  {
    id: "07",
    icon: CreditCard,
    title: "Payment",
    items: [
      "30% of the total fee is required before the audit begins",
      "Remaining 70% must be paid before the Audit Report is released",
      "No refunds once the audit has begun",
      "First Re-Audit is free as per Section 3",
      "Second Re-Audit within 6 months is charged at 20% of the original audit price as per Section 3",
      "Clients paying with SPUMP (USFRAC) receive a 15% discount on the total fee",
      "Clients paying with USDC receive a 5% discount on the total fee",
    ],
  },
  {
    id: "08",
    icon: Globe,
    title: "Audit Publication",
    items: [
      "Clients are encouraged to publish their completed audit result publicly on GTAC (Global Token Audit Chain)",
      "BITSS can assist with GTAC publication upon request",
    ],
  },
  {
    id: "09",
    icon: FileCheck,
    title: "General",
    items: [
      "BITSS reserves the right to update these Terms & Conditions at any time.",
      "Continued use of our services constitutes acceptance of the most current version of these terms.",
    ],
  },
];

const TermsAndConditions = () => {
  return (
    <div className="bg-background min-h-screen w-full">
      <Container>
        <div className="px-5 md:px-10 py-14 md:py-20">
          {/* Header */}
          <div className="mb-12">
            <p className="text-primary font-bold text-xs tracking-widest mb-3">
              BITSS CRYPTO SECURITY
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading  leading-tight w-full md:w-2/3">
              Terms &{" "}
              <span className="bg-linear-to-r from-[#1E88E5] to-[#4FC3F7] bg-clip-text text-transparent">
                Conditions
              </span>
            </h2>
            <p className="text-sm  mt-4 w-full md:w-1/2">
              By using BITSS services, you agree to the following terms. Please
              read them carefully before proceeding.
            </p>
            <div className="flex gap-3 mt-5 flex-wrap">
              <Badge variant="secondary" className="text-xs">
                9 Sections
              </Badge>
              <Badge variant="secondary" className="text-xs">
                Last Updated: 2025
              </Badge>
              <Badge variant="secondary" className="text-xs">
                <ShieldCheck size={11} className="mr-1" /> Legally Binding
              </Badge>
            </div>
          </div>

          {/* Terms List */}
          <div className="w-full md:w-3/4 space-y-10">
            {termsData.map((section) => {
              const Icon = section.icon;
              return (
                <div key={section.id}>
                  {/* Section Title */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-primary text-xs font-mono font-bold">
                      {section.id}
                    </span>
                    <Icon size={16} className="text-primary shrink-0" />
                    <h3 className=" font-semibold text-base">
                      {section.title}
                    </h3>
                  </div>

                  {/* Highlight text (Section 03 only) */}
                  {section.highlight && (
                    <p className="text-sm mb-3 pl-13 italic">
                      {section.highlight}
                    </p>
                  )}

                  {/* Items */}
                  <ul className="pl-13 space-y-2.5">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Divider */}
                  <div className="mt-10 border-b border-primary/10" />
                </div>
              );
            })}
          </div>

          {/* Footer note */}
          <div className="mt-12 w-full md:w-3/4">
            <p className="text-xs leading-relaxed">
              BITSS reserves the right to update these Terms & Conditions at any
              time. Continued use of our services constitutes acceptance of the
              most current version of these terms.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TermsAndConditions;
