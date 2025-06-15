"use client";
import UserNav from "../auth/UserNav";
import Link from "next/link";
import Image from "next/image";

export default function INTRO() {
  return (
    <div className="flex flex-col items-center pt-20 pb-8 gap-10">
      {/* Logo */}
      <div className="absolute top-0 left-0 w-full bg-[#B8AA95]/80">
        <Image src="/logo.png" width={320} height={320} alt="mrt" />
      </div>

      {/* 登入按鈕區塊 */}
      <div className="absolute top-6 right-3">
        <UserNav />
      </div>

      {/* 主標題 */}
      <div className="mt-16 text-3xl font-bold">今天你想搭去哪裡呢?</div>

      {/* 路線選單 */}
      {[
        { name: "淡水信義線", href: "/MRTRed", color: "#DD0128" },
        { name: "中和新蘆線", href: "/MRTYellow", color: "#FBAE12" },
        { name: "松山新店線", href: "/MRTGreen", color: "#068559" },
        { name: "板南線", href: "/MRTBlue", color: "#0372C1" },
        { name: "文湖線", href: "/MRTBrown", color: "#BF8F2D" }
      ].map((line) => (
        <div key={line.name} className="flex flex-col font-bold">
          {line.name}
          <Link
            href={line.href}
            className={`text-lg px-100 py-2 bg-[${line.color}]/60 hover:bg-[${line.color}]`}
          />
        </div>
      ))}
    </div>
  );
}
