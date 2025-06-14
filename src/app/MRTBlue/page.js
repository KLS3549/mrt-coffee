"use client"

import Image from "next/image";

export default function MRT() {

  return (
    <>
      <div className="relative flex flex-col items-center pt-8 pb-8 gap-10 min-h-screen">

        <div className="absolute top-0 left-0 w-full py-6 bg-[#B8AA95]/80"></div>

        <div className="mt-16 text-3xl font-bold">
          正在搭乘板南線...
        </div>

        <div className="w-[80%] h-4 bg-[#0372C1]/30 rounded-full overflow-hidden z-20">
          <div className="h-full bg-[#0372C1]/80 animate-grow w-0"></div>
        </div>

        <Image
          src="/mrt.png"
          width={750}
          height={750}
          className="absolute bottom-0 left-0 z-0"
          alt="mrt"
        />

      </div>
    </>
  );
}
