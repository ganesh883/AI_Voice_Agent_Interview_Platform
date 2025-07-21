import {initializeApp, getApps, cert, getApp} from 'firebase-admin/app';
import {getAuth} from  "firebase-admin/auth";
import {getFirestore} from "firebase-admin/firestore";

const initFirebaseAdmin = () => {
    const apps = getApps();

    if(!apps.length){
        initializeApp({
            credential : cert({
                projectId: process.env.FIREBASE_PROJECT_ID,
                clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
                privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            })

        })
    }

    const app = getApp();

    return {
        auth : getAuth(app),
        db   :  getFirestore(app),
    }
}

export const {auth, db} = initFirebaseAdmin();

