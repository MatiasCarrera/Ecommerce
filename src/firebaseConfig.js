import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH,
  projectId: import.meta.env.VITE_PROYECT,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING,
  appId: import.meta.env.VITE_APPID,
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)


