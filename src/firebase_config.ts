// Packages
import { FirebaseOptions, initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, OAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Config Chat Social
const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyAQYpfvd5D6ZqvdYqJ-hjqC9hP28_LjzaY",
  authDomain: "chat-socialcog.firebaseapp.com",
  projectId: "chat-socialcog",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
const microsoftProvider = new OAuthProvider(
  "microsoft.com"
).setCustomParameters({
  login_hint: "",
  tenant: "ccac1382-2f4e-4244-abe2-bf0c582d5292",
  prompt: "consent",
});

export { auth, db, googleProvider, microsoftProvider };
