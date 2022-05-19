import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/db";

export const updateChallengeNotifications = async (
  weekday,
  notificationId,
  id
) => {
  const challengeRef = doc(db, "challenges", id);
  return await updateDoc(challengeRef, {
    notificationsIds: arrayUnion({ weekday, notificationId }),
  });
};
