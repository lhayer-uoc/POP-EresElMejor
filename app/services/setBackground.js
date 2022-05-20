import { doc, setDoc, collection, Timestamp, query, getDoc, where, getDocs, limit, updateDoc } from 'firebase/firestore';
import { db } from '../config/db';

export const setBackgroundService = async (image, userid) => {

    const collectionRef = collection(db, "users");
    const q = query(collectionRef, where("user", "==", userid), limit(1));

    try {
        const querySnapshot = await getDocs(q);
        let idDocument = "";
        querySnapshot.forEach((doc) => {
            idDocument = { id: doc.id };
        });
        console.log(idDocument.length);
        if (idDocument.length !== 0) {
            try {
                const docRef = doc(db, "users", idDocument.id)
                await updateDoc(docRef, {
                    image: image
                });
            } catch (error) {
                console.log(error);
            }
        } else {
            const docData = {
                image: image,
                user: userid,
            }
            const UserRef = doc(collection(db, "users"));
            try {
                setDoc(UserRef, docData);
            } catch (error) {
                console.log(error);
                return false;
            }
        }
    } catch (error) {
        console.log("Ha ocurrido un error: ", error);
    }
}