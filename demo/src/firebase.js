// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// Import additional Firebase services as needed:
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

// TODO: Add your Firebase project's configuration
// Get this from your Firebase Console: Project Settings > General > Your apps
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  // measurementId: "YOUR_MEASUREMENT_ID" // Optional: for Google Analytics
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services (uncomment as needed)
// const analytics = getAnalytics(app);
// export const auth = getAuth(app);
// export const db = getFirestore(app);
// export const storage = getStorage(app);

export default app;
