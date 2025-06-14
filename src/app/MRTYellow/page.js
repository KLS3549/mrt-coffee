import Image from "next/image";

export default function MRT() {
  return (
    <>
      <div className="relative flex flex-col items-center pt-8 pb-8 gap-10 min-h-screen">

        <div className="absolute top-0 left-0 w-full py-6 bg-[#B8AA95]/80"></div>

        <div className="mt-16 text-3xl font-bold">
          正在搭乘中和新蘆線...
        </div>

        <div className="px-90 py-2 bg-[#FBAE12]/60"></div>

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
