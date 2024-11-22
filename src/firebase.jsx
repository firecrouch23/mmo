// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCZt7_qxGOIrYK92yCGe6ZPEOmiOejzSG4",
  authDomain: "linkproject-642f1.firebaseapp.com",
  projectId: "linkproject-642f1",
  storageBucket: "linkproject-642f1.firebasestorage.app",
  messagingSenderId: "136362212097",
  appId: "1:136362212097:web:528d178ea05c17e5293900"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
