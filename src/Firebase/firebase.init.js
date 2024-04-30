import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB5Wel0zjAVGHJmNieJQY6q10Wm5y_Qw4M",
    authDomain: "tourism360-ewu.firebaseapp.com",
    projectId: "tourism360-ewu",
    storageBucket: "tourism360-ewu.appspot.com",
    messagingSenderId: "333410355475",
    appId: "1:333410355475:web:a4b8ce22aec278096472e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;