import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "firebase/database"
const firebaseConfig = {
    apiKey: "AIzaSyB2xxwTMBSOdQwVClmu_w3ScSH4WX9BBxw",
    authDomain: "sphurti-dit.firebaseapp.com",
    projectId: "sphurti-dit",
    storageBucket: "sphurti-dit.appspot.com",
    messagingSenderId: "331139649234",
    appId: "1:331139649234:web:001282b68580562239e70b"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
