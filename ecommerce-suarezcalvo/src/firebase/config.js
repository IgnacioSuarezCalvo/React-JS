
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBXg1OGpQ_d2zee6QyheJ_qAEFWo0X7aZ0",
  authDomain: "ecommerce-suarezcalvo-reactjs.firebaseapp.com",
  projectId: "ecommerce-suarezcalvo-reactjs",
  storageBucket: "ecommerce-suarezcalvo-reactjs.appspot.com",
  messagingSenderId: "946901592433",
  appId: "1:946901592433:web:5baeddced2aa294e12eed0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => app