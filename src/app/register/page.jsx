import { Suspense } from "react";
import Register from "@/components/Register/Register";
import { Spinner } from "@/components/ui/spinner";

export default function RegisterPage() {
  return (
    <Suspense
      fallback={
        <>
          <Spinner />
        </>
      }
    >
      <Register />;
    </Suspense>
  );
}
