import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/db";


export const getCategoriesService = async () => {

    const categoriesList = [];
    const docRef = collection(db, "catogories");
    try {
        const Snapshot = await getDocs(docRef);
        Snapshot.forEach((doc) => {
            categoriesList.push(
                { name: doc.data().name, value: doc.data().name }
            )
        })
        return categoriesList;
    } catch (error) {
        console.log("no se ha podido recuperar datos");
    }
}