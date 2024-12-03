// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA80J6oB2cyg_yaSt7RHC4FqBAymGoeYS8",
  authDomain: "market-place-426cd.firebaseapp.com",
  projectId: "market-place-426cd",
  storageBucket: "market-place-426cd.firebasestorage.app",
  messagingSenderId: "740637731845",
  appId: "1:740637731845:web:6ec49446a54f681985806c",
  measurementId: "G-Q1BL77MMXQ"
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app)
export default app;


