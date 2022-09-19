import firebase from "firebase/app";
import 'firebase/auth'

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
        storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
        messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING,
        appId: process.env.NEXT_PUBLIC_FIREBASE_APPID
    })
}

export default firebase