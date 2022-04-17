import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/db";
import { challengeToDto } from "./dto/challengeToDto";

export const getChallengesService = async () => {
  const chalengesList = [];
  const docRef = collection(db, "challenges");
  try {
    const docSnap = await getDocs(docRef);
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
