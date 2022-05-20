import {
  collection,
  doc,
  getDoc,
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
    return challengeToDto(lastChallenge);
  } catch (error) {
    console.log("error: ", error);
    return false;
  }
};
