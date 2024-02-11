// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDK4XsSY2v5dAezd09gyvbo69yFzykj7a0",
  authDomain: "ugahacks-6f729.firebaseapp.com",
  projectId: "ugahacks-6f729",
  storageBucket: "ugahacks-6f729.appspot.com",
  messagingSenderId: "948432427599",
  appId: "1:948432427599:web:3b0acc9a4da903bcd8683a",
  measurementId: "G-MKH5FV8QRL"
};
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Get the auth object
const auth = getAuth(firebaseApp);
const provider= new GoogleAuthProvider();


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export { auth,provider }; // Make sure to export the 'auth' object