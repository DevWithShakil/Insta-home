import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCZYr28sX6ZEhf7E645t-gjidCjRwjQU8k",
  authDomain: "instagram-clone-23785.firebaseapp.com",
  projectId: "instagram-clone-23785",
  storageBucket: "instagram-clone-23785.appspot.com",
  messagingSenderId: "616611436362",
  appId: "1:616611436362:web:f62fe81f8d59a1aba053b3"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();