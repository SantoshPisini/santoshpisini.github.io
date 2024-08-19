"use client";

import { DotIcon, XIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function BannerSection() {
  const [show, setShow] = useState(true);
  return (
    <div
      className={cn(
        "relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1 text-xs md:text-base ",
        show ? "flex" : "hidden"
      )}
    >
      <div
        className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <div className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"></div>
      </div>
      <div
        className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <div className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"></div>
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="leading-6 text-gray-900">
          <strong className="font-semibold">GuestLens.xyz</strong>
          <DotIcon className="inline-block" />
          {"Relive your event day from your guest photos!"}
          <DotIcon className="inline-block" />
          {"A private QR based photo sharing platform."}
        </p>
        <a
          href="https://guestlens.xyz/"
          target="_blank"
          className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >
          Open <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
      <div className="flex flex-1 justify-end">
        <Button
          variant="ghost"
          size="icon"
          className="bg-transparent"
          onClick={() => {
            setShow(false);
          }}
        >
          <XIcon className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
