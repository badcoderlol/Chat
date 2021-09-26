// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import * as firebase from "firebase";
import firebase from 'firebase';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDnA790KVFOiCwjOuH4qAg3zDfHGeHi_hM",
    authDomain: "chat-e28c7.firebaseapp.com",
    projectId: "chat-e28c7",
    storageBucket: "chat-e28c7.appspot.com",
    messagingSenderId: "107024136020",
    appId: "1:107024136020:web:f9d39e703cfd72bb147ac1"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export { auth };