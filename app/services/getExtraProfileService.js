import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../config/db";

const extraInfoToDTO = (data) => {
  const { _: userId, ...rest } = data;
  return {
    ...rest,
  };
};

export const getExtraProfileService = async (user) => {
  const usersRef = collection(db, "users");
  const q = query(usersRef, where("userId", "==", user.uid.toString()));

  try {
    let extraInfo = {};
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      extraInfo = extraInfoToDTO(doc.data());
    });
    return extraInfo;
  } catch (error) {
    console.log("error: ", error);
    return false;
  }
};
