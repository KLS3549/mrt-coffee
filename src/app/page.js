import Image from "next/image";

export default function Home() {
  return (
    <div>
      Home
      <div className="flex justify-center pt-8 pb-8">
        <button className="rounded-full text-lg px-10 py-3 clay-inset bg-[#7FCDCD] hover:bg-[#7FCDCD]/90 text-white border-2 border-white">
            <Link href="/112305005/play" className="flex items-center">
              <PlayCircle size={24} className="mr-2" />
              進入遊戲
            </Link>
        </button>
      </div>
    </div>
  );
}
