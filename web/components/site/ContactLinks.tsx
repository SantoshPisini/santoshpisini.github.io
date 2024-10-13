import { Button } from "../ui/button";
import { GithubIcon, LinkedinIcon } from "lucide-react";

export default function ContactLinks() {
  return (
    <div className="flex gap-4 justify-center md:justify-start">
      <Button
        variant="outline"
        size="icon"
        onClick={() => {
          window.open("https://www.linkedin.com/in/santoshpisini");
        }}
      >
        <LinkedinIcon />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={() => {
          window.open("https://github.com/santoshpisini");
        }}
      >
        <GithubIcon />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="text-2xl font-semibold"
        onClick={() => {
          window.open("https://x.com/santosh_pisini");
        }}
      >
        𝕏
      </Button>
    </div>
  );
}
