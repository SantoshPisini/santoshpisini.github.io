import { ExternalLinkProps } from "@/types/ExternalLinkProps";
import { Button } from "../ui/button";
import { ExternalLinkIcon } from "lucide-react";

export default function ExternalLink(props: ExternalLinkProps) {
  return (
    <Button
      variant="link"
      className="text-blue-500 md:text-xl p-0 m-0 group tracking-wide"
      onClick={() => {
        window.location.href = props.url;
      }}
    >
      {props.label}
      <ExternalLinkIcon className="ml-2 hidden group-hover:block" />
    </Button>
  );
}
