import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCnIWi1dvypo9wuTdmtVZtpbYe6xumqREU",
  authDomain: "bookbridge-db7a0.firebaseapp.com",
  projectId: "bookbridge-db7a0",
  storageBucket: "bookbridge-db7a0.firebasestorage.app",
  messagingSenderId: "26398094481",
  appId: "1:26398094481:web:728faefff965e99d69bb30",
  measurementId: "G-LTWPP1CMSC"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;