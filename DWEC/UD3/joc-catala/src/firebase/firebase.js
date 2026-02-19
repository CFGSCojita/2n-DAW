import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6x7JjzcidCXrYwpQRC_vx6OZ5GCyN9IM",
  authDomain: "joc-catala-stefan.firebaseapp.com",
  projectId: "joc-catala-stefan",
  storageBucket: "joc-catala-stefan.firebasestorage.app",
  messagingSenderId: "221887963905",
  appId: "1:221887963905:web:c8403dc85ff65727c53100"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);