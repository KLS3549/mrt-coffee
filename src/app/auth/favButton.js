"use client";

import { useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import { db } from "./firebaseClient";
import { doc, setDoc, getDoc, arrayUnion } from "firebase/firestore";

export default function FavoriteButton({ cafe }) {
  const { user } = useAuth();
  const [favorited, setFavorited] = useState(false);

  // 🔍 當元件載入時檢查此 cafe 是否已被收藏
  useEffect(() => {
    const checkFavoriteStatus = async () => {
      if (!user || !cafe?.name) return;

      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        const data = userSnap.data();
        const favorites = data.favorites || [];
        const isFavorited = favorites.some((item) => item.name === cafe.name);
        setFavorited(isFavorited);
      }
    };

    checkFavoriteStatus();
  }, [user, cafe]);

  const handleFavorite = async () => {
    if (!user) return alert("請先登入！");
    if (!cafe?.name || !cafe?.latitude || !cafe?.longitude) {
      return alert("咖啡廳資料不完整！");
    }

    const userRef = doc(db, "users", user.uid);

    try {
      await setDoc(
        userRef,
        {
          favorites: arrayUnion({
            name: cafe.name,
            station: cafe.station,
            rating: cafe.rating,
          }),
        },
        { merge: true }
      );

      setFavorited(true);
    } catch (error) {
      console.error("收藏失敗：", error);
      alert("收藏失敗，請稍後再試");
    }
  };

  return (
    <button
      onClick={handleFavorite}
      className="absolute top-12 right-6 hover:scale-110"
    >
      {favorited ? "💖" : "🤍"}
    </button>
  );
}
