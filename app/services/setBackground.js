import {
  collection,
  where,
  query,
  updateDoc,
  getDocs,
} from "firebase/firestore";
import { db } from "../config/db";

export const setBackgroundService = async (image, userId) => {
  try {
    const profileRef = collection(db, "users");
    const q = query(profileRef, where("userId", "==", userId));
    const querySnapshot = await getDocs(q);
    querySnapshot.docs.map((doc) => updateDoc(doc.ref, { image }));

    return image;
  } catch (error) {
    console.log("error: ", error);
    return false;
  }
};
