// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: "AIzaSyCHCIrseQlmp9FywpMnh1ykpL5MLWl_9oM",
//   authDomain: "redux-hooks-3a067.firebaseapp.com",
//   projectId: "redux-hooks-3a067",
//   storageBucket: "redux-hooks-3a067.appspot.com",
//   messagingSenderId: "36230239648",
//   appId: "1:36230239648:web:9a4f291baa805d33fd80c5",
//   measurementId: "G-1S2RHEFG26"
// };

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

import { app, analytics } from './firebase.config';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth();

export const signup = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
}

export const signin = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
}