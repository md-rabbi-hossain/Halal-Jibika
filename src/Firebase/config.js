
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyAkYJTvt81zOVkCo7ueWQka2vnwPim614Q",
  authDomain: "jobportel-4fc5e.firebaseapp.com",
  projectId: "jobportel-4fc5e",
  storageBucket: "jobportel-4fc5e.appspot.com",
  messagingSenderId: "1035202409959",
  appId: "1:1035202409959:web:ea4ef521e070e1e7dbb942"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider }