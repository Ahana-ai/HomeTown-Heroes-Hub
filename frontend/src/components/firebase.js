import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDCKd_WPuc6pqHDJCF_L-N2O1Sz9Im0WaQ",
  authDomain: "hometown-heroes-hub.firebaseapp.com",
  projectId: "hometown-heroes-hub",
  storageBucket: "hometown-heroes-hub.appspot.com",
  messagingSenderId: "1073401816792",
  appId: "1:1073401816792:web:017dce57f878f76d2b99ad",
  measurementId: "G-8EJHE1NW18",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const storage = getStorage(app);

export default storage;
