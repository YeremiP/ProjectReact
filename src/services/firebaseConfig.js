// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMMduye1pnsEaOqXVJbi91uWdN8NQCKj0",
  authDomain: "pruebasdeclase-6b325.firebaseapp.com",
  databaseURL: "https://bambas-project-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "pruebasdeclase-6b325",
  storageBucket: "pruebasdeclase-6b325.firebasestorage.app",
  messagingSenderId: "868741198259",
  appId: "1:868741198259:web:593c19878bcc735c2bdbc6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;


