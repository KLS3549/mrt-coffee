import Image from "next/image";
import Link from "next/link";

export default function INTRO() {
  return (
    <>
      <div className="flex flex-col items-center pt-20 pb-8 gap-10">

        <div className="absolute top-0 left-0 w-full bg-[#B8AA95]/80">
          <Image
            src="/logo.png"
            width={320}
            height={320}
            alt="mrt"
          />
        </div>

        <div className="mt-16 text-3xl font-bold">
          今天你想搭去哪裡呢?
        </div>

        <div className="flex flex-col font-bold">
          淡水信義線
          <Link href="/MRTRed" className="text-lg px-100 py-2 bg-[#DD0128]/60 hover:bg-[#DD0128]" />
        </div>

        <div className="flex flex-col font-bold">
          中和新蘆線
          <Link href="/MRTYellow" className="text-lg px-100 py-2 bg-[#FBAE12]/60 hover:bg-[#FBAE12]" />
        </div>

        <div className="flex flex-col font-bold">
          松山新店線
          <Link href="/MRTGreen" className="text-lg px-100 py-2 bg-[#068559]/60 hover:bg-[#068559]" />
        </div>

        <div className="flex flex-col font-bold">
          板南線
          <Link href="/MRTBlue" className="text-lg px-100 py-2 bg-[#0372C1]/60 hover:bg-[#0372C1]" />
        </div>

        <div className="flex flex-col font-bold">
          文湖線
          <Link href="/MRTBrown" className="text-lg px-100 py-2 bg-[#BF8F2D]/60 hover:bg-[#BF8F2D]" />
        </div>

      </div>

    </>
  );
}
