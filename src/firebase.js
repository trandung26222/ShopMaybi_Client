import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "tailwindshop-4fdd1.firebaseapp.com",
  projectId: "tailwindshop-4fdd1",
  storageBucket: "tailwindshop-4fdd1.appspot.com",
  messagingSenderId: "883527845436",
  appId: "1:883527845436:web:7dc8997ca90d4f04142539",
  measurementId: "G-5Q6CY4S1MT",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
