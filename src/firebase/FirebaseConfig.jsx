import { initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBj6AnIr8Q8bpun3ATplNVEuSLyMhH7a7o",
    authDomain: "ecommerce-laporta.firebaseapp.com",
    projectId: "ecommerce-laporta",
    storageBucket: "ecommerce-laporta.appspot.com",
    messagingSenderId: "5627270329",
    appId: "1:5627270329:web:1ab1a49f338bb7f67ff768",
    measurementId: "G-4KTVLZ5L6G"
}


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);