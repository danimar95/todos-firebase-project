import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const signUp = (auth: Auth, email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password)
};

export const logIn = (auth: Auth, email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password)
};
