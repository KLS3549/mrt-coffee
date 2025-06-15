"use client";
import { initializeApp, getApps, getApp } from "firebase/app";
import {GoogleAuthProvider,signInWithPopup,getAuth,signOut} from "firebase/auth";
import { useState } from "react";

export default function GoogleAuth() {
  const firebaseConfig = {
    apiKey: "AIzaSyAkSwCUbP_CTPgsnHAjj5nR8VtlNIgzazk",
    authDomain: "mrt-coffee.firebaseapp.com",
    projectId: "mrt-coffee",
    storageBucket: "mrt-coffee.appspot.com",
    messagingSenderId: "771820734062",
    appId: "1:771820734062:web:ca0c5f55f514618955087f"
  };

  const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
  const auth = getAuth(app);
  auth.useDeviceLanguage();
  const provider = new GoogleAuthProvider();

  const [user, setUser] = useState(null);

  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        console.error("登入失敗：", error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => setUser(null))
      .catch((error) => console.error("登出失敗：", error));
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      {!user ? (
        <button
          onClick={handleSignIn}
          className="px-4 py-2 gap-2 bg-white p-4 rounded-xl shadow text-[#B8AA95] text-sm font-bold hover:bg-[#E6D1B1]/60 transition"
        >
          Sign in
        </button>
      ) : (
        <div className="flex items-center gap-4 p-4 rounded-xl">
          <img
            src={user.photoURL}
            alt={user.displayName}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="text-sm font-medium">{user.displayName}</span>
          <button
            onClick={handleSignOut}
            className="ml-4 px-4 py-2 bg-white text-sm rounded hover:bg-[#E6D1B1]/60 text-[#B8AA95] font-bold"
          >
            Log out
          </button>
        </div>
      )}
    </div>
  );
}
