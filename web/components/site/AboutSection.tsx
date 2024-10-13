import { Separator } from "../ui/separator";
import ExternalLink from "./ExternalLink";
import InlineLink from "./InlineLink";

export default function AboutSection() {
  return (
    <div className="space-y-4 md:text-xl lg:text-2xl">
      <p className="text-primary uppercase text-lg font-semibold" id="about">
        About
      </p>
      <Separator />
      <p>
        {
          "I'm a software engineer with 4+ years of experience in designing and developing applications using Microsoft Azure, C# (.NET Core) and React, currently I work with "
        }
        <ExternalLink label={"Coeo"} url={"https://coeo.com"} />
      </p>

      <>
        <p className="italic text-muted-foreground md:text-xl underline decoration-dotted decoration-primary">
          {"Open-Source"}
        </p>
        <ul className="list-disc ml-8 md:ml-16">
          <li>
            <InlineLink
              label={"microsoft/fluentui"}
              url={"https://github.com/microsoft/fluentui/pull/30497"}
            />
          </li>
          <li>
            <InlineLink
              label={"supabase/supabase"}
              url={"https://github.com/supabase/supabase/pull/20840"}
            />
          </li>
          <li>
            <InlineLink
              label={"ngneat/hot-toast"}
              url={"https://github.com/ngneat/hot-toast/pull/121"}
            />
          </li>
        </ul>
      </>
      <>
        <p className="italic text-muted-foreground md:text-xl underline decoration-dotted decoration-primary">
          {"Tools / Apps"}
        </p>
        <ul className="list-disc ml-8 md:ml-16">
          <li>
            <InlineLink
              label={"GuestLens.xyz 🚀"}
              url={"https://guestlens.xyz/"}
            />
          </li>
          <li>
            <InlineLink
              label={"Label Website (Edge Browser Extension)"}
              url={
                "https://microsoftedge.microsoft.com/addons/detail/label-website/einecgnonollbejmbmhbhhaamenfelnh"
              }
            />
          </li>
          <li>
            <InlineLink
              label={"Visual Studio Code Extension"}
              url={
                "https://marketplace.visualstudio.com/items?itemName=Santosh-Pisini.sp-clipboard-copy-history"
              }
            />
          </li>
          <li>
            <InlineLink
              label={"Clipboard"}
              url={"https://clipboard-ashy.vercel.app/"}
            />
          </li>
        </ul>
      </>
    </div>
  );
}
