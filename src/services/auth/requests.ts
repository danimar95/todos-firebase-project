import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const signUp = (auth: any, email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password)
};

export const logIn = (auth: any, email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password)
};
