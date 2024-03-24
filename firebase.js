// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASxDzTLmZaLmArXUQV0kffk_teQXDQjdc",
  authDomain: "to-dos-project-cb6c2.firebaseapp.com",
  databaseURL: "https://to-dos-project-cb6c2-default-rtdb.firebaseio.com",
  projectId: "to-dos-project-cb6c2",
  storageBucket: "to-dos-project-cb6c2.appspot.com",
  messagingSenderId: "120897272832",
  appId: "1:120897272832:web:c6f176419dcc759e14ece5",
  measurementId: "G-RLS7FBXVHE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
// export const db = getFirestore(app);
export default app;