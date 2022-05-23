import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../config/db";
import { challengeToDto } from "./dto/challengeToDto";

export const getChallengesService = async (id) => {
  const chalengesList = [];
  const docRef = collection(db, "challenges");
  try {
    const q = query(docRef, where("userId", "==", id));
    const docSnap = await getDocs(q);
    docSnap.forEach((doc) => {
      chalengesList.push(
        challengeToDto({
          id: doc.id,
          ...doc.data(),
        })
      );
    });
    return chalengesList;
  } catch (error) {
    return false;
  }
};
