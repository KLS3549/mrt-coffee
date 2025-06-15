"use client";
import { useEffect, useState } from "react";
import { useAuth } from "../auth/AuthContext";
import { db } from "../auth/firebaseClient";
import { doc, getDoc } from "firebase/firestore";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function MyFavoritesPage() {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState([]);

  const router = useRouter();
  const handleEnded = () => {
    // 這裡放你要做的事，例如切換畫面、顯示訊息等
    router.push("/intro");
  };

  useEffect(() => {
    const loadFavorites = async () => {
      if (!user) return;
      const snap = await getDoc(doc(db, "users", user.uid));
      if (snap.exists()) {
        setFavorites(snap.data().favorites || []);
      }
    };
    loadFavorites();
  }, [user]);

  return (
    <div className="flex flex-col items-center pt-20 pb-8 gap-10 w-full h-screen overflow-y-auto">
      {/* Logo */}
      <div className="absolute top-0 left-0 w-full bg-[#B8AA95]/80">
        <Image src="/logo.png" width={320} height={320} alt="mrt" />
      </div>

      {/* 主標題 */}
      <div className="mt-16 text-3xl font-bold">我的收藏清單</div>

      {favorites.length === 0 ? (
        <p>尚未收藏任何店家</p>
      ) : (
        <ul className="flex flex-col space-y-2 overflow-y-auto">
          {favorites.map((item, i) => (
            <li key={i} className="bg-[#E6D1B1]/60 px-80 py-2 rounded-2xl font-bold">{item.name}</li>
          ))}
        </ul>
      )}

<button
          className="absolute bottom-4 left-4 z-20 bg-[#E6D1B1] hover:bg-[#E6D1B1]/60 text-black font-bold py-2 px-4 rounded shadow"
          onClick={() => {
            // 這裡可以放你要觸發的功能，例如 reset 地圖位置
            handleEnded();
          }}
        >
          HOME
        </button>
    </div>

    
  );
}
