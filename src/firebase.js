import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
