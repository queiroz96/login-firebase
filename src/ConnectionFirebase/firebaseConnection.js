import firebase from "firebase/app";
import 'firebase/database';
import 'firebase/auth'

let firebaseConfig = {
    apiKey: "AIzaSyC9uumJDE-305-np2zTx1BCvfTmktV3xOY",
    authDomain: "testefirebase-47253.firebaseapp.com",
    projectId: "testefirebase-47253",
    storageBucket: "testefirebase-47253.appspot.com",
    messagingSenderId: "741827531576",
    appId: "1:741827531576:web:2c74258ee584fe4e7227cd"
  };

 if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
 }

 export default firebase;
