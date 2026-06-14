import { auditProducts } from "../../../public/product";
import AuditCard from "./AuditCard";

export default function AuditProducts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-10 pb-4 relative items-start">
      {auditProducts.map((section, idx) => (
        <AuditCard key={idx} section={section} idx={idx} />
      ))}
    </div>
  );
}
