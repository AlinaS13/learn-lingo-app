import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBZQRVx_0wO02N52rOuRvpjPwLEjpt2KO0",
  authDomain: "learn-lingo-app.firebaseapp.com",
  databaseURL: "https://learn-lingo-app-default-rtdb.firebaseio.com",
  projectId: "learn-lingo-app",
  storageBucket: "learn-lingo-app.appspot.com",
  messagingSenderId: "879712009355",
  appId: "1:879712009355:web:0f2959788a76fec4b9a88e",
  measurementId: "G-P8KLBQJX4T",
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const auth = getAuth(app);
