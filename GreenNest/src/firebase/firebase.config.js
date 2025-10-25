import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDfwYY-HTWKYTSm1_CtxOX6b2XiKZIrnew",         
  authDomain: "greennest.firebaseapp.com",
  projectId: "greennest",
  storageBucket: "greennest.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abc123xyz456",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

