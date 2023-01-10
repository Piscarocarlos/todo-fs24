// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDZbrNYApMRdlNokLt-ya0Hc6f1QmWGizg",
    authDomain: "todo-react-fs4.firebaseapp.com",
    projectId: "todo-react-fs4",
    storageBucket: "todo-react-fs4.appspot.com",
    messagingSenderId: "824303650806",
    appId: "1:824303650806:web:423f6f2ff56827b78c29d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };