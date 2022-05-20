import { auth } from '../config/db';
import {
    updateProfile,
} from "firebase/auth";
import { showMessage } from "react-native-flash-message";

export const setAvatarService = async (image) => {

    try {
        await updateProfile(auth.currentUser, {
            photoURL: image
        });

        showMessage({
            message: "Tus cambios se han guardado",
            type: "success",
        });
    } catch (error) {
        console.log("error: ", error);
    }

};