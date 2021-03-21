import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCIiYfZ5HIz6DfvHrWlWIiAILfHl_auWbU",
  authDomain: "firegram-60ba3.firebaseapp.com",
  projectId: "firegram-60ba3",
  storageBucket: "firegram-60ba3.appspot.com",
  messagingSenderId: "258087482030",
  appId: "1:258087482030:web:45d51a95a3dfb263b8f33f",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
