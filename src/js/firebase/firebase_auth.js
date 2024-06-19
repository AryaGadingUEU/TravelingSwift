import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getDatabase, set, ref, update } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDYX8vwQvyV6w3qXGkH98rDVC6OtYGfKlA",
  authDomain: "travelingswift-2d5c2.firebaseapp.com",
  databaseURL: "https://travelingswift-2d5c2-default-rtdb.firebaseio.com",
  projectId: "travelingswift-2d5c2",
  storageBucket: "travelingswift-2d5c2.appspot.com",
  messagingSenderId: "1085644116670",
  appId: "1:1085644116670:web:f3d155410a101d4f4ec4ef",
};

// Init Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

const buttonSignup = document.getElementById("button_signup");
const buttonSignin = document.getElementById("button_signin");
let register = false;

// Sign up and Sign in
buttonSignup.addEventListener("click", (e) => {
  e.preventDefault();
  register = true;
  let name = document.getElementById("name").value;
  let emailSignup = document.getElementById("email_signup").value;
  let passwordSignup = document.getElementById("psw_signup").value;

  createUserWithEmailAndPassword(auth, emailSignup, passwordSignup)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      set(ref(database, "users/" + user.uid + "/account_info"), {
        name: name,
        email: emailSignup,
      })
        .then(() => {
          alert("User Telah Ditambahkan");
          window.location = "index.html";
        })
        .catch((error) => {
          console.error("Error saving user data:", error);
          alert("Gagal menyimpan data user. Silakan coba lagi.");
        });
    })
    .catch((error) => {
      if (error.code === "auth/network-request-failed") {
        alert("Gagal menghubungi server. Silakan coba lagi.");
      } else {
        console.error("Error creating user:", error);
        alert("Gagal membuat user. Silakan coba lagi.");
      }
    });
});

buttonSignin.addEventListener("click", (e) => {
  e.preventDefault();
  let emailSignin = document.getElementById("email_signin").value;
  let passwordSignin = document.getElementById("psw_signin").value;
  signInWithEmailAndPassword(auth, emailSignin, passwordSignin)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      register = false;
      alert("User Berhasil Login");
      location.href = "index.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
});

// Authentication Track
auth.onAuthStateChanged((user) => {
  if (user && !register) {
    window.location = "index.html";
  } else {
  }
});
