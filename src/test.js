import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
firebase.initializeApp(config);
var db = firebase.firestore();
const auth = getAuth();
const test = () => {
  createUserWithEmailAndPassword(auth, "testemail@gmail.com", "testpass2024*")
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      console.log("userr", user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
};

export default test;
