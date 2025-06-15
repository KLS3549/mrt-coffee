"use client";
import { initializeApp, getApps, getApp } from "firebase/app";
import {GoogleAuthProvider,signInWithPopup,getAuth,signOut} from "firebase/auth";
import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

export default function INTRO() {

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
    <>
      <div className="flex flex-col items-center pt-20 pb-8 gap-10">

        <div className="absolute top-0 left-0 w-full bg-[#B8AA95]/80">
          <Image
            src="/logo.png"
            width={320}
            height={320}
            alt="mrt"
          />
        </div>

        <div className=" absolute top-6 right-3">
      {!user ? (
        <button
          onClick={handleSignIn}
          className="px-4 py-2 gap-2 bg-white/80 p-4 rounded shadow text-[#B8AA95] text-sm font-bold hover:scale-105 transition-transform"
        >
          Sign in
        </button>
      ) : (
        <div className="flex items-center gap-3 bg-white/80 backdrop-blur-md px-4 py-2 rounded-xl shadow">
          <img
            src={user.photoURL}
            alt={user.displayName}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="text-sm font-medium">{user.displayName}</span>
          <button
            onClick={handleSignOut}
            className="ml-4 px-4 py-2 bg-white text-sm rounded hover:scale-105 text-[#B8AA95] font-bold transition-transform"
          >
            Log out
          </button>
        </div>
      )}
    </div>

        <div className="mt-16 text-3xl font-bold">
          今天你想搭去哪裡呢?
        </div>

        <div className="flex flex-col font-bold">
          淡水信義線
          <Link href="/MRTRed" className="text-lg px-100 py-2 bg-[#DD0128]/60 hover:bg-[#DD0128]" />
        </div>

        <div className="flex flex-col font-bold">
          中和新蘆線
          <Link href="/MRTYellow" className="text-lg px-100 py-2 bg-[#FBAE12]/60 hover:bg-[#FBAE12]" />
        </div>

        <div className="flex flex-col font-bold">
          松山新店線
          <Link href="/MRTGreen" className="text-lg px-100 py-2 bg-[#068559]/60 hover:bg-[#068559]" />
        </div>

        <div className="flex flex-col font-bold">
          板南線
          <Link href="/MRTBlue" className="text-lg px-100 py-2 bg-[#0372C1]/60 hover:bg-[#0372C1]" />
        </div>

        <div className="flex flex-col font-bold">
          文湖線
          <Link href="/MRTBrown" className="text-lg px-100 py-2 bg-[#BF8F2D]/60 hover:bg-[#BF8F2D]" />
        </div>

      </div>

    </>
  );
}
