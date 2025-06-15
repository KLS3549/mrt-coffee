"use client"

import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAkSwCUbP_CTPgsnHAjj5nR8VtlNIgzazk",
  authDomain: "mrt-coffee.firebaseapp.com",
  projectId: "mrt-coffee",
  storageBucket: "mrt-coffee.appspot.com",
  messagingSenderId: "771820734062",
  appId: "1:771820734062:web:ca0c5f55f514618955087f"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);