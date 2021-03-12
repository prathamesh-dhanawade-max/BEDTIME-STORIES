import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBOwH9ibyfmemu25aXGKHIy4GHhyDv1CDk",
  authDomain: "bet-time-story.firebaseapp.com",
  projectId: "bet-time-story",
  storageBucket: "bet-time-story.appspot.com",
  messagingSenderId: "398337275813",
  appId: "1:398337275813:web:fc98625477c97b9ac89a4c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()
