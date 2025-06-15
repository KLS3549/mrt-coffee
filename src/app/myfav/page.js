"use client";
import { useEffect, useState } from "react";
import { useAuth } from "../auth/AuthContext";
import { db } from "../auth/firebaseClient";
import { doc, getDoc } from "firebase/firestore";
import Image from "next/image";

export default function MyFavoritesPage() {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState([]);

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
    <div className="flex flex-col items-center pt-20 pb-8 gap-10">
      {/* Logo */}
      <div className="absolute top-0 left-0 w-full bg-[#B8AA95]/80">
        <Image src="/logo.png" width={320} height={320} alt="mrt" />
      </div>

      {/* 主標題 */}
      <div className="mt-16 text-3xl font-bold">我的收藏清單</div>

      {favorites.length === 0 ? (
        <p>尚未收藏任何店家</p>
      ) : (
        <ul className="space-y-2">
          {favorites.map((item, i) => (
            <li key={i} className="bg-[#E6D1B1]/60 px-80 py-2 rounded-2xl font-bold">{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
