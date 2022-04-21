import {
  collection,
  getDocs,
  query,
  orderBy,
  getDoc,
  limit,
} from "firebase/firestore";
import { db } from "../config/db";
import { challengeToDto } from "./dto/challengeToDto";

export const getLastChallengeService = async () => {
  const challengesRef = collection(db, "challenges");
  const q = query(challengesRef, orderBy("timestamp", "desc"), limit(1));
  try {
    const querySnapshot = await getDocs(q);
    let lastChallenge = "";
    querySnapshot.forEach((doc) => {
      lastChallenge = { id: doc.id, ...doc.data() };
    });
    return challengeToDto(lastChallenge);
  } catch (error) {
    console.log("error: ", error);
    return false;
  }
};
