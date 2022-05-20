import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/db";
import { challengeToDto } from "./dto/challengeToDto";

export const getChallengeDetailsService = async (id) => {
  try {
    const docRef = doc(db, "challenges", id);
    const stateQuery = await getDoc(docRef);

    return challengeToDto({ id, ...stateQuery.data() });
  } catch (error) {
    return false;
  }
};
