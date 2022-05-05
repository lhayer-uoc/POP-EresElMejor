import { doc, setDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../config/db";

export const setChallengeService = (
  title,
  description,
  time,
  category,
  periodicity
) => {
  const newChallengeRef = doc(collection(db, "challenges"));
  const docData = {
    title: title.value,
    category: category.value,
    description: description.value,
    percentage: 0,
    periodicity: periodicity.value,
    time: time.value,
    timestamp: Timestamp.fromDate(new Date()).toDate(),
  };
  return setDoc(newChallengeRef, docData);
};
