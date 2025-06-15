"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function MRT() {

  const router = useRouter();
  const handleEnded = () => {
    // 這裡放你要做的事，例如切換畫面、顯示訊息等
    router.push("/yellowCafe");
  };

  return (
    <>
      <div className="relative flex flex-col items-center pt-20 pb-8 gap-10 min-h-screen">

        <div className="absolute top-0 left-0 w-full bg-[#B8AA95]/80">
          <Image
            src="/logo.png"
            width={320}
            height={320}
            alt="mrt"
          />
        </div>

        <div className="mt-16 text-3xl font-bold">
          正在搭乘中和新蘆線...
        </div>

        {/* 進度條容器 */}
        <div className="w-[80%] h-4 bg-[#FBAE12]/60 overflow-hidden z-20">
          <div className="progress-bar h-full bg-[#FBAE12] w-0"></div>
        </div>

        <Image
          src="/mrt.png"
          width={750}
          height={750}
          className="absolute bottom-0 left-0 z-0"
          alt="mrt"
        />

      </div>

      <audio autoPlay controls onEnded={handleEnded} className="absolute right-0">
        <source src="/audio/yellow.mp3" type="audio/mpeg" />
      </audio>

      {/* 🔽 內嵌動畫樣式 */}
      <style jsx>{`
        .progress-bar {
          animation: fillBar 11s linear forwards;
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
