
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { setItem } from "localforage";


const firebaseConfig = {
    apiKey: "AIzaSyC6NEh44vlzaxZiV_1IvU0L8Jyx5_3a5yc",
    authDomain: "saylani-quiz-app-d818e.firebaseapp.com",
    projectId: "saylani-quiz-app-d818e",
    storageBucket: "saylani-quiz-app-d818e.firebasestorage.app",
    messagingSenderId: "190358209381",
    appId: "1:190358209381:web:a9f76b56bf74a2edb3d78c"
  };
  
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);


// Set auth language (optional)
auth.languageCode = 'en';

const provider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        // This gives you a Google Access Token. You can use it to access Google APIs.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info
        const user = result.user;
        localStorage.setItem("user", user.uid);
        localStorage.setItem("email", user.email);
        // const uid = res.user.uid;
    // You can save user info like the UID, email, etc. here
        // console.log("User ID: ", user.uid);
    } catch (error) {
        // Handle Errors here
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData?.email;
        const credential = GoogleAuthProvider.credentialFromError(error);

        console.error("Error during sign-in: ", errorMessage);
    }
};


export { db, storage, auth, signInWithGoogle };
