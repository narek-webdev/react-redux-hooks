import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCHCIrseQlmp9FywpMnh1ykpL5MLWl_9oM",
  authDomain: "redux-hooks-3a067.firebaseapp.com",
  projectId: "redux-hooks-3a067",
  storageBucket: "redux-hooks-3a067.appspot.com",
  messagingSenderId: "36230239648",
  appId: "1:36230239648:web:9a4f291baa805d33fd80c5",
  measurementId: "G-1S2RHEFG26"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics }