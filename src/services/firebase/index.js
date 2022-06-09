import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAMmRqFygocniQmzGXgqPYozedAN4MiOAM",
  authDomain: "tienda-seenks.firebaseapp.com",
  projectId: "tienda-seenks",
  storageBucket: "tienda-seenks.appspot.com",
  messagingSenderId: "778912132650",
  appId: "1:778912132650:web:6815e8e350c4c924aedd53"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)