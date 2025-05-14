// Import Firebase SDK functions
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmfjcKE2-rjOeCtRxg3CpSWvMy3ghl2XE",
  authDomain: "project-tcf-427404.firebaseapp.com",
  databaseURL: "https://project-tcf-427404-default-rtdb.firebaseio.com",
  projectId: "project-tcf-427404",
  storageBucket: "project-tcf-427404.appspot.com",
  messagingSenderId: "1009855269915",
  appId: "1:1009855269915:web:e973360aff5c4c187bbcbe",
  measurementId: "G-FK3KXBRMTS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Export services
export { analytics, auth, db, storage };
export default app;
