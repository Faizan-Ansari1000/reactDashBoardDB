import { createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { doc } from "firebase/firestore"
import app from "./FirebaseConfig";

const auth = getAuth(app);

export const signUpUser = (obj) => {
    return createUserWithEmailAndPassword(auth, obj.email, obj.password)
}

export const setData = async (nodeName, id, data) => {
    const docRef = doc(nodeName, id)
    await setData(docRef, data)
};