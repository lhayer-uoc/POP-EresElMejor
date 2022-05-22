import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "../config/db";
import { challengeToDto } from "./dto/challengeToDto";

export const getLastChallengeService = async (id) => {
  try {
    let lastChallenge = {};
    const docRef = collection(db, "challenges");
    const q = query(
      docRef,
      where("userId", "==", id),
      orderBy("startDate", "desc"),
      limit(1)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((docSnap) => {
      lastChallenge = { id: docSnap.id, ...docSnap.data() };
    });
    if (lastChallenge?.endDate) {
      return challengeToDto(lastChallenge);
    }
    return false;
  } catch (error) {
    console.log("error: ", error);
    return false;
  }
};
