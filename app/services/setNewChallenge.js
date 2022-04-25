import { doc, setDoc, collection } from 'firebase/firestore';
import { app } from '../config/db';
import { getFirestore } from 'firebase/firestore';


export const setChallengeService = async (docData) => {

    const getdb = getFirestore(app);
    const newChallengeRef = doc(collection(getdb, "challenges"));
    try {
        await setDoc(newChallengeRef, docData);
        alert("Nuevo reto creado")
    } catch {
        alert("No se ha podido crear el reto")
    }

}




