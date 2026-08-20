import Container from "@/components/Container/Container";
import ManualAuditForm from "@/components/ManualAuditForm/ManualAuditForm";
import { Clock, FileText, Lock } from "lucide-react";

export default async function OrderPage({ params }) {
  const { slug } = await params;
  return (
    <div className=" pt-20">
      <Container>
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-4">
            <div className="w-15 h-15 flex items-center justify-center rounded-xl bg-primary/5 border border-primary/20">
              <FileText className="w-8 h-8 text-primary" strokeWidth={2} />
            </div>
            <h2 className="text-4xl font-bold mt-6 text-gray-800">
              Request an audit
            </h2>
            <p className="text-muted-foreground text-sm mt-4 w-2/3">
              Free 30-minute review of your project, delivered as a written
              report.
            </p>
            <p className="flex items-center gap-1 text-muted-foreground py-5">
              <Clock size={20} />{" "}
              <span className="text-sm">Reply within 1 business day</span>
            </p>
            <p className="flex items-center gap-1 text-muted-foreground">
              <Lock size={20} />{" "}
              <span className="text-sm">Your info stays private</span>
            </p>
          </div>
          <div className="col-span-8">
            <ManualAuditForm title={slug} />
          </div>
        </div>
      </Container>
    </div>
  );
}
