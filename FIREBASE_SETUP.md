# Firebase Setup Guide

## ✅ Firebase Installed

Firebase has been successfully installed in your project!

## 📝 Next Steps

### 1. Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" or select an existing project
3. Follow the setup wizard

### 2. Get Your Firebase Configuration

1. In Firebase Console, go to **Project Settings** (gear icon)
2. Scroll down to "Your apps" section
3. Click on the **Web app** icon (`</>`) to create a web app
4. Copy the `firebaseConfig` object

### 3. Update Configuration

Replace the placeholder values in `src/firebase.js` with your actual Firebase config:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};
```

### 4. Enable Firebase Services

Uncomment the services you need in `src/firebase.js`:

- **Authentication:** For user sign-in/sign-up
- **Firestore:** For real-time database
- **Storage:** For file uploads
- **Analytics:** For tracking user behavior

### 5. Example Usage

#### Using Firebase Auth:

```javascript
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

// Sign in user
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    console.log("User signed in:", userCredential.user);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

#### Using Firestore:

```javascript
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

// Add a document
const docRef = await addDoc(collection(db, "users"), {
  name: "John Doe",
  email: "john@example.com",
});
```

## 🔒 Security Note

**Never commit your Firebase config with real API keys to public repositories!**
Consider using environment variables for sensitive data.

## 📚 Resources

- [Firebase Documentation](https://firebase.google.com/docs)
- [Firebase Auth Guide](https://firebase.google.com/docs/auth)
- [Firestore Guide](https://firebase.google.com/docs/firestore)
