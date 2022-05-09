import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {

};
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAqzKZZRUmE3DiU5APqFzt0qOhqSq43Lg",
  authDomain: "class-test-44bb9.firebaseapp.com",
  databaseURL: "https://class-test-44bb9-default-rtdb.firebaseio.com",
  projectId: "class-test-44bb9",
  storageBucket: "class-test-44bb9.appspot.com",
  messagingSenderId: "225798257594",
  appId: "1:225798257594:web:dd9bc9ae04edd9c1113b83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebase.database();