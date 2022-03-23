import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithPopup,
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider
} from "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyCqTrxxUEhJdexIRag4De5lOH0YbKs7kQY",
    authDomain: "adminpanel-5eecf.firebaseapp.com",
    projectId: "adminpanel-5eecf",
    storageBucket: "adminpanel-5eecf.appspot.com",
    messagingSenderId: "1068713713995",
    appId: "1:1068713713995:web:aa7dca41675e5ff971c8ce"
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
   prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);
export const signOutUser = async () => await signOut(auth);