import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAIVKehNKSY4gOQhOck-Pvqep3_d0h4734",
  authDomain: "blogreact-cca02.firebaseapp.com",
  databaseURL: "https://blogreact-cca02.firebaseio.com",
  projectId: "blogreact-cca02",
  storageBucket: "blogreact-cca02.appspot.com",
  messagingSenderId: "18999478076",
  appId: "1:18999478076:web:d739085b2984319a434039"
};
// Initialize Firebase
const fr = firebase.initializeApp(firebaseConfig);
export default fr;
