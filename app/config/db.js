import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAjNAzr3PAksPs9PQ0qEzTD3PLB7tWRvy0",
  authDomain: "ereselmejor-377c6.firebaseapp.com",
  projectId: "ereselmejor-377c6",
  storageBucket: "ereselmejor-377c6.appspot.com",
  messagingSenderId: "417091570973",
  appId: "1:417091570973:web:35ab80a2712bbb3bed65f4",
  measurementId: "G-9KQYYGZ3H2",
};

const app = initializeApp(firebaseConfig);
const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export { db };
