"use client";

import { ChevronLeft, ShieldAlert } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "../components/ui/button";

const GlobalErrorPage = () => {
  const router = useRouter();

  const handleGoHome = () => {
    router.push(`/home`);
  };

  return (
    <section className="w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col items-center text-white">
        <ShieldAlert size={48} strokeWidth={3} className="text-red-600" />
        <h3 className="text-3xl mb-2">Oops, something went wrong!</h3>
        <p className="mb-4 text-gray-300">
          We’re sorry, an unexpected error occurred.
        </p>
        <Button className="rounded" onClick={handleGoHome}>
          <ChevronLeft size={28} strokeWidth={1.5} /> Back to Home
        </Button>
      </div>
    </section>
  );
};

export default GlobalErrorPage;
