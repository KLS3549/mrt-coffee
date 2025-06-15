"use client";
import { useAuth } from "./AuthContext";
import Image from "next/image";

export default function UserNav() {
  const { user, signIn, logout } = useAuth();

  if (!user) {
    return (
      <button
        onClick={signIn}
        className="px-4 py-2 bg-white/80 rounded shadow text-[#B8AA95] text-sm font-bold hover:scale-105 transition-transform"
      >
        Sign in
      </button>
    );
  }

  return (
    <div className="flex items-center gap-3 bg-white/80 backdrop-blur-md px-4 py-2 rounded-xl shadow">
      <img
            src={user.photoURL}
            alt={user.displayName}
            className="w-8 h-8 rounded-full object-cover"
          />
      <span className="text-sm font-medium">{user.displayName}</span>

      <div className="text-xl font-medium text-white">|</div>
      <button
        onClick={logout}
        className="px-1 py-1 text-sm rounded hover:scale-105 text-[#B8AA95] font-bold transition-transform"
      >
        Log out
      </button>
    </div>
  );
}
