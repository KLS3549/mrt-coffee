"use client";
import { useEffect, useState } from "react";
import { useAuth } from "../auth/AuthContext";
import { db } from "../auth/firebaseClient";
import { doc, getDoc } from "firebase/firestore";

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
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">我的收藏清單</h1>
      {favorites.length === 0 ? (
        <p>尚未收藏任何店家</p>
      ) : (
        <ul className="space-y-2">
          {favorites.map((item, i) => (
            <li key={i} className="bg-gray-100 p-2 rounded">{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
