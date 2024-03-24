import { createUserWithEmailAndPassword } from "firebase/auth";

export const register = (auth: any, email: string, password: string) => {
  // Create a new user with email and password using firebase
  return createUserWithEmailAndPassword(auth, email, password)
};
