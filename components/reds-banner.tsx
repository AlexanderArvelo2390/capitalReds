import Image from "next/image";
import RedsTextCarousel from "@/components/reds-text-carousel";

export default function RedsBanner() {
  return (
    <div className="w-full bg-[#c8102e] flex flex-col justify-center items-center py-0" style={{ minHeight: 59 }}>
      <Image
        src="/cin_header_masthead_tagline.svg"
        alt="This is Reds Country"
        width={1350}
        height={40}
        className="w-full object-cover"
        priority
      />
      <RedsTextCarousel />
    </div>
  );
}
