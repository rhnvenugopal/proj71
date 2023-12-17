import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDdtOBb1zrX_b0cvw-_pTyqQWDf7BlS6Ak",
    authDomain: "proj71-68571.firebaseapp.com",
    projectId: "proj71-68571",
    storageBucket: "proj71-68571.appspot.com",
    messagingSenderId: "955660639016",
    appId: "1:955660639016:web:b88c46a5466457112d4e1d"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
