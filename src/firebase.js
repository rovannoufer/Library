import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBkweFdqyPACz1iwE_JqLtCiRm6mrwAcb0",
  authDomain: "devrev-project.firebaseapp.com",
  projectId: "devrev-project",
  storageBucket: "devrev-project.appspot.com",
  messagingSenderId: "306357665912",
  appId: "1:306357665912:web:e74cf0b1f45ec3383ead8d",
  measurementId: "G-0CB9D40P1D"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;