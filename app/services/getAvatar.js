import { doc, getDocs, limit, collection, where, query, orderBy } from 'firebase/firestore';
import { db } from '../config/db';

export const getAvatarService = async (user) => {

    const avatarRef = collection(db, "avatar");
    const q = query(avatarRef, orderBy("date", "desc"), limit(1));
    //const q = query(backgroundRef, where("user", "==", user), orderBy("date", "desc"), limit(1));
    //const q = query(avatarRef, where("user", "==", user.toString()), orderBy("date", "desc"), limit(1));
    try {
        const docSnap = await getDocs(q);
        let avatar = "";
        docSnap.forEach((doc) => {
            avatar = { image: doc.data().image };
        })
        return avatar;
    } catch (error) {
        console.log("no existe el documento");
        return false;
    }
}
