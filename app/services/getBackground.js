import { doc, getDocs, limit, collection, where, query, orderBy } from 'firebase/firestore';
import { db } from '../config/db';

export const getBackgroundService = async (user) => {
     
    const backgroundRef = collection(db, "background");
    const q = query(backgroundRef, orderBy("date", "desc"), limit(1));
    //const q = query(backgroundRef, where("user", "==", user), orderBy("date", "desc"), limit(1));
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
