"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace("/");
    }, 1500);
  }, [router]);

  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <main className="flex flex-col w-full px-24 py-8 items-center justify-center gap-4">
        404 | Not Found!
        <p className="text-muted-foreground">Redirecting...</p>
      </main>
    </div>
  );
}
