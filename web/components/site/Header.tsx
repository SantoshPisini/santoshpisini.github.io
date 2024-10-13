"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";
import useMobileDetect from "@/hooks/useMobileDetect ";

export default function Header() {
  const isMobile = useMobileDetect();
  return (
    <header className="sticky top-0 z-50 w-full border-primary/40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 max-w-screen-2xl items-center justify-between px-2 md:px-32">
        <Branding />
        {isMobile ? (
          <MobileNavMenu />
        ) : (
          <div>
            <NavButton label={"Home"} location={"/"} />
            <NavButton label={"About"} location={"/about"} />
            <NavButton label={"Blog"} location={"/blog"} />
            <NavButton label={"Resume"} location={"/resume"} />
          </div>
        )}
      </div>
    </header>
  );
}

const MobileNavMenu = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant="outline" size="icon">
            <MenuIcon className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <NavButton label={"Home"} location={"/"} />
          </DropdownMenuItem>
          <DropdownMenuItem>
            <NavButton label={"About"} location={"/about"} />
          </DropdownMenuItem>
          <DropdownMenuItem>
            <NavButton label={"Blog"} location={"/blog"} />
          </DropdownMenuItem>
          <DropdownMenuItem>
            <NavButton label={"Resume"} location={"/resume"} />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

const NavButton = (props: { label: string; location: string }) => {
  const router = useRouter();
  return (
    <Button
      onClick={() => {
        router.push(props.location);
      }}
      variant={"ghost"}
      className="hover:text-primary hover:bg-transparent"
    >
      {props.label}
    </Button>
  );
};

const Branding = () => {
  const router = useRouter();
  return (
    <p
      className="text-muted-foreground cursor-pointer"
      onClick={() => {
        router.replace("/");
      }}
    >
      <span>
        <span className="text-primary">{"Santosh"}</span>
        {"Pisini"}
      </span>
    </p>
  );
};
