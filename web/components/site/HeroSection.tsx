import Image from "next/image";
import HeadShotImage from "../../public/images/headshot.jpeg";
import ExternalLink from "./ExternalLink";
import ContactLinks from "./ContactLinks";

export default function HeroSection() {
  return (
    <div className="h-[calc(100vh-80px)] w-full flex flex-col items-center justify-center">
      <div className="w-full flex flex-col-reverse md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-start align-top gap-4">
          <p className="text-gray-500 md:text-xl lg:text-2xl">{"Hey, I'm"}</p>
          <h1 className="font-bold text-3xl md:text-5xl lg:text-8xl tracking-wide underline decoration-primary decoration-4 underline-offset-8">
            Santosh Pisini<span className=" text-primary">.</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-2xl lg:text-4xl">
            {"Engineer | Developer | Designer"}
          </p>
          <ContactLinks />
        </div>
        <div className="w-[50vw] md:w-[15vw] max-w-[128px] md:max-w-[256px]">
          <Image
            src={HeadShotImage}
            alt={"Headshot Image"}
            className="rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-gray-400"
          />
        </div>
      </div>
      <div className="w-full mt-16 md:mt-28 md:text-xl lg:text-2xl text-center md:text-start">
        <p>
          {"I love to design and build tech that helps everyone, everywhere."}
        </p>
        <ExternalLink
          label={"santosh_pisini@outlook.com"}
          url={"mailto:santosh_pisini@outlook.com"}
        />
      </div>
    </div>
  );
}
