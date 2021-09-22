// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvWQS0YnA6J9mlyFxRDs4xWRNKzeolg9U",
  authDomain: "c-design-e862c.firebaseapp.com",
  projectId: "c-design-e862c",
  storageBucket: "c-design-e862c.appspot.com",
  messagingSenderId: "322052397374",
  appId: "1:322052397374:web:deb0501131d61dc87df46f",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
