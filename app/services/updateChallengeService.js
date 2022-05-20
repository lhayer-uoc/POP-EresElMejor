import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/db";

export const updateChallengeNotifications = async (
  weekday,
  notificationId,
  id
) => {
  const challengeRef = doc(db, "challenges", id);
  try {
    const response = await updateDoc(challengeRef, {
      notificationsIds: arrayUnion({ weekday, notificationId }),
    });
    return response;
  } catch (error) {
    return null;
  }
};
