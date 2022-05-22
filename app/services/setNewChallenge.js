import { doc, setDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../config/db";
import { auth } from "../config/db";

const getEndDate = (days) => {
  const finalDate = new Date(Date.now() + days * (1000 * 60 * 60 * 24));

  return Timestamp.fromDate(finalDate).toDate();
};

const getStartDate = () => {
  return Timestamp.fromDate(new Date()).toDate();
};

export const setChallengeService = async (
  title,
  description,
  time,
  category,
  periodicity,
  image,
  userId
) => {
  const uid = auth.currentUser.uid;
  const newChallengeRef = doc(collection(db, "challenges"));
  const docData = {
    title: title.value,
    category: category.value,
    description: description.value,
    periodicity: periodicity,
    time: time.value,
    startDate: getStartDate(),
    endDate: getEndDate(time.value),
    image,
    userId: uid,
  };
  await setDoc(newChallengeRef, docData);

  return newChallengeRef.id;
};
