import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
	//private
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const db = firebase.firestore();