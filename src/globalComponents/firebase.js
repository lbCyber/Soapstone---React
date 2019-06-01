import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDZKEpGpK1Ovh9Y_J6YdUpTDS0vgQJK9QQ",
  authDomain: "soap-stone.firebaseapp.com",
  databaseURL: "https://soap-stone.firebaseio.com",
  projectId: "soap-stone",
  storageBucket: "soap-stone.appspot.com",
  messagingSenderId: "869362292948",
  appId: "1:869362292948:web:685df81a0d081ab4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;