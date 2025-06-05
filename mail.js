  const firebaseConfig = {
    apiKey: "AIzaSyDai4Mg1RrXc5u4fJaj0QYT-dGI8Cf6E8c",
    authDomain: "cookiszform.firebaseapp.com",
    databaseURL: "https://cookiszform-default-rtdb.firebaseio.com",
    projectId: "cookiszform",
    storageBucket: "cookiszform.firebasestorage.app",
    messagingSenderId: "804691228813",
    appId: "1:804691228813:web:b3d9c1ada68d4ef0bdcac4"
  };

  //initialize firebase
  firebase.initializeApp(firebaseConfig);


//reference database
var cookiszFormDB = firebase.database().ref('cookiszForm');

document.getElementById("cookiszForm").addEventListener("submit", submitForm);

function submitForm(e){
    e.preventDefault();

    var name = getElementVal('name');
    var email = getElementVal('email');
    var subject = getElementVal('subject');
    var message = getElementVal('message');

    saveMessages(name,email,subject,message);

    //enable alert 

    document.querySelector('.alert').style.display = "block";

    //remove alert
    setTimeout(() => {
        document.querySelector('.alert').style.display = "none";
    }, 1000);

    //reset form
    
    document.getElementById("cookiszForm").reset();

}

const saveMessages = (name,email,subject,message) => {
    var newContactForm = cookiszFormDB.push();

    newContactForm.set({
        name : name,
        email: email,
        subject: subject,
        message: message,
    })
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
}