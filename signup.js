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

// Reference database
var signupFormDB = firebase.database().ref('signupForm');

// Handle form submit
document.getElementById("signupForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal('signupName');
    var email = getElementVal('signupEmail');
    var password = getElementVal('signupPassword');

    saveMessages(name, email, password);

    // Show alert
    const messageEl = document.getElementById('signupMessage');
    messageEl.classList.remove('d-none');
    messageEl.classList.add('alert-success');
    messageEl.textContent = "Signed up successfully!";

    // Hide after 1s
    setTimeout(() => {
        messageEl.classList.add('d-none');
    }, 1000);

    // Reset form
    document.getElementById("signupForm").reset();
}

const saveMessages = (name, email, password) => {
    var newContactForm = signupFormDB.push();
    newContactForm.set({
        name: name,
        email: email,
        password: password
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};
