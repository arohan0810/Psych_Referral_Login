
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNpHtcBOPagmsnXBRrUxryaNzNKEoJWww",
  authDomain: "psych-referral-portal.firebaseapp.com",
  projectId: "psych-referral-portal",
  storageBucket: "psych-referral-portal.firebasestorage.app",
  messagingSenderId: "753987669275",
  appId: "1:753987669275:web:3c9244fff6bd7a24a797be",
  measurementId: "G-5XT749BMZX"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
