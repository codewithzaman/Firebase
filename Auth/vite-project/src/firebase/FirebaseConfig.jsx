
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyD7smX5ZiWyUmLSYz2ClQoZW8Ep6cvyVfk",
  authDomain: "auth-4c02a.firebaseapp.com",
  projectId: "auth-4c02a",
  storageBucket: "auth-4c02a.appspot.com",
  messagingSenderId: "104822315661",
  appId: "1:104822315661:web:04d9bd3218085fb3d8a0c4"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);