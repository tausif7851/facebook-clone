import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCDGlf3GfmofYI7ftstvlrSXlibZZR0X-k",
  authDomain: "facebook-clone-7aa5c.firebaseapp.com",
  databaseURL: "https://facebook-clone-7aa5c.firebaseio.com",
  projectId: "facebook-clone-7aa5c",
  storageBucket: "facebook-clone-7aa5c.appspot.com",
  messagingSenderId: "50610238990",
  appId: "1:50610238990:web:0316e59a6e27a189066e5f",
  measurementId: "G-HZZ1V010E6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
