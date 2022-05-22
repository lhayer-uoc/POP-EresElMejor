import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../config/db";

export const setUserExtraProfile = async (data, user) => {
  if (!user?.uid) {
    return;
  }

  const profileRef = doc(collection(db, "users"));
  const docData = { ...data, userId: user.uid };

  return await setDoc(profileRef, docData);
};
