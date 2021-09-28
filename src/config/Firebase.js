import { initializeApp, } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBfYM05vyjWNTl2nZ3qHIgJ9ehP8quQgPQ",
  authDomain: "my-domain-001.firebaseapp.com",
  databaseURL: "https://my-domain-001-default-rtdb.firebaseio.com",
  projectId: "my-domain-001",
  storageBucket: "my-domain-001.appspot.com",
  messagingSenderId: "301835406082",
  appId: "1:301835406082:web:9f380ac3ca578088ad101b"
};

initializeApp(firebaseConfig)

const auth = getAuth();

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged };