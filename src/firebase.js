// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDPFOWPDhlfxeugp7va4mKLQURPFSHehzQ",
    authDomain: "slack-react-clone-e774c.firebaseapp.com",
    projectId: "slack-react-clone-e774c",
    storageBucket: "slack-react-clone-e774c.appspot.com",
    messagingSenderId: "647083214872",
    appId: "1:647083214872:web:bea7652c23a3ab34c09b6d",
    measurementId: "G-JP9VF4NK7T"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  const auth=firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export { auth, provider};
  export default db;
  