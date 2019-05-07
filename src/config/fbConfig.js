import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCgB4uSY2FXUpB4tbYbZM_Ie0pyyFwTzcw",
  authDomain: "project-management-syste-4fed7.firebaseapp.com",
  databaseURL: "https://project-management-syste-4fed7.firebaseio.com",
  projectId: "project-management-syste-4fed7",
  storageBucket: "project-management-syste-4fed7.appspot.com",
  messagingSenderId: "397014110246"
};

firebase.initializeApp(config);


export default firebase;
