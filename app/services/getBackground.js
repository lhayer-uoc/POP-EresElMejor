import { getDocs, limit, collection, where, query } from 'firebase/firestore';
import { db } from '../config/db';

export const getBackgroundService = async (userid) => {

    const backgroundRef = collection(db, "users");
    const q = query(backgroundRef, where("user", "==", userid), limit(1));

    try {
        const docSnap = await getDocs(q);
        let background = "";
        docSnap.forEach((doc) => {
            background = { image: doc.data().image };
        })
        return background;
    } catch (error) {
        console.log("no existe el documento");
        return false;
    }

}
