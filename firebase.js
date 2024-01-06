// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCVDDMQJjCM0xoyQdYAcD5edG1rF6ODXxI",
    authDomain: "main-886d4.firebaseapp.com",
    projectId: "main-886d4",
    storageBucket: "main-886d4.appspot.com",
    messagingSenderId: "1070475365851",
    appId: "1:1070475365851:web:b3b8431eae8730e9d5ebfe",
    measurementId: "G-3SYXB0G6JL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const login = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("isLogin", true);
            window.location.href = "/index.html";
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        }).catch((error) => {
            console.error(error);
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
}

export { auth, login }