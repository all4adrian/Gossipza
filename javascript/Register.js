// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMXadXKy0juzqiy9YS-dFV3sqn_cAPvmw",
  authDomain: "login-example-c78a9.firebaseapp.com",
  projectId: "login-example-c78a9",
  storageBucket: "login-example-c78a9.firebasestorage.app",
  messagingSenderId: "761239243297",
  appId: "1:761239243297:web:0de068ee26684114c2f160"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // <-- This was missing!

// button
const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {
  event.preventDefault();

  // inputs
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      alert("Creating Account...");
      window.location.href ="Login.html"
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });

});
