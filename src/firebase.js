import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8FcX_UCms672KBE7fsBhFSVfAH3i9ZSI",
  authDomain: "portfolio-29940.firebaseapp.com",
  projectId: "portfolio-29940",
  storageBucket: "portfolio-29940.appspot.com",
  messagingSenderId: "1075122282657",
  appId: "1:1075122282657:web:38adcd152d8aed3b63d0e0",
  measurementId: "G-KJYW8G29WD",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
