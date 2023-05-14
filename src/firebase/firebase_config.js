// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnBQu4Czkvt-Po92Df_olV7oe0NaXx29E",
  authDomain: "car-doctor-client-e6a70.firebaseapp.com",
  projectId: "car-doctor-client-e6a70",
  storageBucket: "car-doctor-client-e6a70.appspot.com",
  messagingSenderId: "99632379135",
  appId: "1:99632379135:web:7d8e2971e6b99c640508ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;