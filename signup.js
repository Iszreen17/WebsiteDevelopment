const firebaseConfig = {
    apiKey: "AIzaSyDr1ChZZqU0nYFq06XwucKDhIW2sGnXSRI",
    authDomain: "signupform-a1f70.firebaseapp.com",
    databaseURL: "https://signupform-a1f70-default-rtdb.firebaseio.com",
    projectId: "signupform-a1f70",
    storageBucket: "signupform-a1f70.appspot.com",
    messagingSenderId: "154346709349",
    appId: "1:154346709349:web:b2cceacd88e836448d018c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Reference database
//var signupFormDB = firebase.database().ref('signupForm');

document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("signupName").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  // Save user data to Firebase Realtime Database
  const newUserRef = database.ref("members").push();
  newUserRef.set({
    name: name,
    email: email,
    password: password // Optional: remove this for security or hash it
  });

  // Save login state to localStorage
  localStorage.setItem("cookiszMember", "true");
  localStorage.setItem("cookiszMemberName", name);

  // Redirect to index.html
  window.location.href = "index.html";
});
