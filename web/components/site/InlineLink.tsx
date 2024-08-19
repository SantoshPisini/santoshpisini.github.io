import { InlineLinkProps } from "@/types/InlineLinkProps";
import { ExternalLinkIcon } from "lucide-react";

export default function InlineLink(props: InlineLinkProps) {
  return (
    <a className="relative group w-fit inline-block" href={props.url} target="_blank">
      <p className="cursor-pointer undeline">
        <span>
          {props.label}
          <ExternalLinkIcon className="ml-2 hidden group-hover:inline text-primary" />
        </span>
      </p>
      <span className="absolute bottom-0 left-0 h-0.5 bg-primary w-0 group-hover:w-[calc(100%-32px)] group-hover:transition-all"></span>
    </a>
  );
}
