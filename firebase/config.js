import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBjiwS_bVhnUcAJ9Bz3nfKtobnUJzDerDc",
  authDomain: "goit-react-native-6fd8d.firebaseapp.com",
  projectId: "goit-react-native-6fd8d",
  storageBucket: "goit-react-native-6fd8d.appspot.com",
  messagingSenderId: "267966018247",
  appId: "1:267966018247:web:65ae9000ae0830d80cc4e2",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default app;
