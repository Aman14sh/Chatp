import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCo0VvRTttUTdTCAsfHXGCr-zvaPSJgp04",
  authDomain: "community1-a1f38.firebaseapp.com",
  projectId: "community1-a1f38",
  storageBucket: "community1-a1f38.appspot.com",
  messagingSenderId: "391092403414",
  appId: "1:391092403414:web:b0ae74e1e0c3a92e6c1d77",
  measurementId: "G-X62Z5DNTFE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth =getAuth();
export const storage = getStorage();
export const db =getFirestore();
