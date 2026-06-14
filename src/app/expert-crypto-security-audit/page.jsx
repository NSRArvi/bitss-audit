import Container from "@/components/Container/Container";
import AuditProducts from "@/components/ExpertCryptoSecurityAudit/AuditProducts";
import HeroBanner from "@/components/ExpertCryptoSecurityAudit/HeroBanner";
import CybersecurityAndRiskManagement from "@/components/ExpertCryptoSecurityAudit/CybersecurityAndRiskManagement";
import RequestLists from "@/components/ExpertCryptoSecurityAudit/RequestLists";

const ExpertCryptoSecurityAudit = () => {
  return (
    <Container>
      <HeroBanner />
      <CybersecurityAndRiskManagement />
      <section className="pt-20" id="features">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-muted-foreground text-2xl font-heading leading-tight text-left md:text-center mb-4">
            <span className="font-medium text-gray-600 dark:text-gray-400">
              {" "}
              Beyond Code:
            </span>{" "}
            Financial & Economic Audit Layer
          </h2>
          <p className="text-left md:text-center justify-center text-gray-700 dark:text-gray-200 w-full md:w-1/2">
            Unlike simple code audits. BITSS Crypto Audits also provides
            rigorous financial reporting reviews ensuring your projects economic
            integrity.
          </p>
        </div>
        <AuditProducts />
        <h2 className="text-muted-foreground text-sm font-heading leading-tight text-center pb-10">
          Confidential & Secure Submission — All data protected
        </h2>
      </section>
      <RequestLists />
    </Container>
  );
};

export default ExpertCryptoSecurityAudit;
