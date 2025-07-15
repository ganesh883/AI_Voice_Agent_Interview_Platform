

import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDvJwf51C-rCnRKDn5JLoY_TPABM3w-2RM",
    authDomain: "mockly-3cbf8.firebaseapp.com",
    projectId: "mockly-3cbf8",
    storageBucket: "mockly-3cbf8.firebasestorage.app",
    messagingSenderId: "1076924299332",
    appId: "1:1076924299332:web:179322ff6004bbf36b2411",
    measurementId: "G-9ZYQE1RWBV"
};


// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);