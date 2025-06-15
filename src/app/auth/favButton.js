"use client";

import { useState } from "react";
import { useAuth } from "./AuthContext";
import { db } from "./firebaseClient";
import { doc, setDoc, arrayUnion } from "firebase/firestore";

export default function FavoriteButton({ cafe }) {
  const { user } = useAuth();
  const [favorited, setFavorited] = useState(false); // 🌟 新增收藏狀態

  const handleFavorite = async () => {
    if (!user) return alert("請先登入！");
    if (!cafe?.name || !cafe?.latitude || !cafe?.longitude) {
      return alert("咖啡廳資料不完整！");
    }

    const userRef = doc(db, "users", user.uid);

    try {
      await setDoc(userRef, {
        favorites: arrayUnion({
          name: cafe.name,
          station: cafe.station,
          rating: cafe.rating,
        }),
      }, { merge: true });

      setFavorited(true); // ✅ 收藏成功後切換狀態
    } catch (error) {
      console.error("收藏失敗：", error);
      alert("收藏失敗，請稍後再試");
    }
  };

  return (
    <button
      onClick={handleFavorite}
      className="absolute top-52 right-6 hover:scale-110"
    >
      {favorited ? "💖 " : "🤍"}
    </button>
  );
}
