import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/db";

export const deleteChallengeNotifications = async (id) => {
  const challengeRef = doc(db, "challenges", id);
  return await updateDoc(challengeRef, {
    notificationsIds: null,
  });
};
