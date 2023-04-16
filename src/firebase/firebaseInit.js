// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"

import { getDatabase } from "firebase/database"
import { getFirestore } from "firebase/firestore"

import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,

  databaseURL: "https://babkee-maximillian-default-rtdb.europe-west1.firebaseio.com",
  // https://babkee-maximillian-default-rtdb.europe-west1.firebasedatabase.app/
}

// Initialize firebase
const firebase = initializeApp(firebaseConfig)

// Initialize firebase store
const fireStore = getFirestore(firebase)

// Initialize firebase database
const fireDatabase = getDatabase(firebase)

// Initialize firebase auth
const fireAuth = getAuth()

export { fireStore, firebase, fireDatabase, fireAuth, signInWithEmailAndPassword, signOut }
