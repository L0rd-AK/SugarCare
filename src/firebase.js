import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhA21YJlFc77pNLMLdfnqdH3P-W79vxE0",
  authDomain: "sugarcare.firebaseapp.com",
  projectId: "sugarcare",
  storageBucket: "sugarcare.appspot.com",
  messagingSenderId: "165976627982",
  appId: "1:165976627982:web:895bb2bb80d817fff9155f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
