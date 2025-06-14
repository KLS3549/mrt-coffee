"use client"

import Image from "next/image";

export default function MRT() {
  return (
    <>
      <div className="relative flex flex-col items-center pt-8 pb-8 gap-10 min-h-screen">

        <div className="absolute top-0 left-0 w-full py-6 bg-[#B8AA95]/80"></div>

        <div className="mt-16 text-3xl font-bold">
          正在搭乘文湖線...
        </div>

        {/* 進度條容器 */}
        <div className="w-[80%] h-4 bg-[#BF8F2D]/60 overflow-hidden z-20">
          <div className="progress-bar h-full bg-[#BF8F2D] w-0"></div>
        </div>

        <Image
          src="/mrt.png"
          width={750}
          height={750}
          className="absolute bottom-0 left-0 z-0"
          alt="mrt"
        />

      </div>

      {/* 🔽 內嵌動畫樣式 */}
      <style jsx>{`
        .progress-bar {
          animation: fillBar 20s linear forwards;
        }

        @keyframes fillBar {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
      
    </>
  );
}
