"use client";

import { usePathname, useRouter } from "next/navigation";
import { Button } from "../ui/button";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 max-w-screen-2xl items-center justify-between px-2 md:px-32">
        <p
          className="text-muted-foreground cursor-pointer"
          onClick={() => {
            window.location.href = "https://santoshpisini.github.io";
          }}
        >
          {pathname !== "/" && (
            <span>
              <span className="text-primary">{"Santosh"}</span>
              {"Pisini"}
            </span>
          )}
        </p>
        <Button
          onClick={() => {
            router.push(pathname.includes("resume") ? "/" : "/resume");
          }}
          variant={"ghost"}
          className="hover:text-primary hover:bg-transparent"
        >
          {pathname.includes("resume") ? "Go Back" : "Resume"}
        </Button>
      </div>
    </header>
  );
}
