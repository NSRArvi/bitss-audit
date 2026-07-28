export default function DisclaimerPage() {
  return (
    <div className="">
      <div className="relative overflow-hidden bg-slate-50 border-b border-slate-100">
        <div className="w-2/3 mx-auto flex flex-col justify-center items-center py-10 lg:py-16 relative z-10">
          <h2 className="text-3xl md:text-5xl lg:text-5xl font-heading font-black tracking-wide text-slate-900 text-center leading-tight">
            Legal Disclaimer & <br className="hidden md:block" />
            <span className="text-primary">Operational Scope</span>
          </h2>
        </div>
      </div>

      <div className="w-2/3 mx-auto py-16 flex flex-col gap-10">
        {/* Section 1 */}
        <section>
          <h3 className="text-xl font-bold font-heading text-slate-900 mb-4 tracking-wide">
            No Investment or Financial Advice
          </h3>
          <p className="text-base text-slate-700 leading-relaxed">
            The information, security reports, ratings, and content provided on
            this website do not constitute investment advice, financial advice,
            trading advice, or any form of financial solicitation. BITSS does
            not recommend that any cryptocurrency, token, or smart contract
            protocol should be purchased, sold, or held by you. Always conduct
            your own thorough due diligence and consult a licensed financial
            advisor before making investment decisions.
          </p>
        </section>

        {/* Section 2 */}
        <section>
          <h3 className="text-xl font-bold font-heading text-slate-900 mb-4 tracking-wide">
            Accuracy of Information & Scope of Audit
          </h3>
          <p className="text-base text-slate-700 inter leading-relaxed mb-4">
            BITSS strives to ensure the accuracy and technical precision of the
            security analyses published on this website and in our audit
            reports. However, all content, scores, and services are provided on
            an &quot;as is&quot; and &quot;as available&quot; basis.
          </p>
          <p className="text-base text-slate-700 leading-relaxed">
            A smart contract audit or security score represents a point-in-time
            evaluation of code submitted to BITSS. An audit is NOT a guarantee
            of absolute security, code flawlessness, or smart contract
            immutability post-deployment. Malicious actors may discover
            unanalyzed attack vectors or exploit off-chain dependencies beyond
            the audit scope. Any reliance on our content, reports, or tools is
            solely at your own risk and discretion.
          </p>
        </section>

        {/* Section 3 */}
        <section>
          <h3 className="text-xl font-bold font-heading text-slate-900 mb-4 tracking-wide">
            Non-Endorsement & Third-Party Content
          </h3>
          <p className="text-base text-slate-700 leading-relaxed">
            Any mention of third-party projects, blockchain networks,
            hyperlinked sites, or external applications on the BITSS platform
            does not constitute an endorsement, warranty, or guarantee by BITSS.
            We are not responsible for the operational safety, code integrity,
            or financial conduct of external third-party platforms.
          </p>
        </section>

        {/* Section 4 */}
        <section>
          <h3 className="text-xl font-bold font-heading text-slate-900 mb-4 tracking-wide">
            Official Communication & Verification Domains
          </h3>
          <p className="text-base text-slate-700 leading-relaxed mb-4">
            To protect your project from phishing and fraudulent impersonations,
            please verify that you interact exclusively with official BITSS
            communication channels and domains:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-base text-slate-700">
            <li>
              <strong>Official Website:</strong> cryptoaudit.bitss.one (or your
              primary official domain)
            </li>
            <li>
              <strong>Report Issues / Contact:</strong> support@bitss.one /
              info@bitss.one
            </li>
          </ul>
          <p className="text-base leading-relaxed font-semibold text-rose-600">
            Never share private keys, seed phrases, or administrative passwords
            with anyone claiming to represent BITSS. Official BITSS personnel
            will NEVER ask for private keys or wallet credentials.
          </p>
        </section>

        {/* Section 5 */}
        <section>
          <h3 className="text-xl font-bold font-heading text-slate-900 mb-4 tracking-wide">
            Vulnerability Disclosure & Bug Reporting
          </h3>
          <p className="text-base text-slate-700 leading-relaxed">
            If you discover a potential vulnerability within the BITSS
            infrastructure or an audited client ecosystem, please refrain from
            public disclosure until our security team has reviewed and
            remediated the issue. Direct all technical findings to our
            confidential security team at{" "}
            <a
              href="mailto:security@bitss.one"
              className="text-primary hover:underline font-semibold"
            >
              security@bitss.one
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
