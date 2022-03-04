import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCptsX9JN0J6qp9zqTIFRMEx6grblh5T44",
  authDomain: "dondeestamycar.firebaseapp.com",
  projectId: "dondeestamycar",
  storageBucket: "dondeestamycar.appspot.com",
  messagingSenderId: "267823117294",
  appId: "1:267823117294:web:d83e961f99a287bfd7d4ff",
};

const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
