import { doc, setDoc, collection, Timestamp, updateDoc } from 'firebase/firestore';
import { db } from '../config/db';

const getStartDate = () => {
    return Timestamp.fromDate(new Date()).toDate();
};

export const setAvatarService = (image, user) => {
    const docRef = doc(collection(db, "avatar"));
    const docData = {
        image: image,
        user: user,
        date: getStartDate(),
    }
    try {
        setDoc(docRef, docData);
        console.log("datos introducidos");
    } catch (error) {
        console.log("no se han introducido los datos");
        return false;
    }

}