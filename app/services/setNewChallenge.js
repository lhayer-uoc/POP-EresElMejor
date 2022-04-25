import { doc, setDoc, collection } from 'firebase/firestore';
import { app } from '../config/db';
import { getFirestore } from 'firebase/firestore';


export const setChallengeService = async (title, description, time, category, percentage,periodicity, timestamp) => {

    const getdb = getFirestore(app);
    const newChallengeRef = doc(collection(getdb, "challenges"));
    const docData ={
        title: title.value,
        category: category.value,
        description: description.value,
        percentage: percentage.value,
        periodicity: periodicity.value,
        time: time.value,
        timestamp: timestamp.value
    }
    try {
        await setDoc(newChallengeRef, docData);
        alert("Nuevo reto creado")
    } catch {
        alert("No se ha podido crear el reto")
    }

}




