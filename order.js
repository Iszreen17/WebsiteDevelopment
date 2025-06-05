  const firebaseConfig = {
    apiKey: "AIzaSyBwvdAvsBGyihpw_yzpbe7nQ-gl8lLueMA",
    authDomain: "cookiszorder.firebaseapp.com",
    databaseURL: "https://cookiszorder-default-rtdb.firebaseio.com",
    projectId: "cookiszorder",
    storageBucket: "cookiszorder.firebasestorage.app",
    messagingSenderId: "215304389891",
    appId: "1:215304389891:web:c04266f3daaf229b8f9536"
  };

  //Initialize firebase

 firebase.initializeApp(firebaseConfig);

 //reference database

 var cookiszOrderDB = firebase.database().ref('cookiszOrder');

 document.getElementById("cookiszOrder").addEventListener("submit", submitForm);

 function submitForm(a){
    a.preventDefault();

    var name = getElementVal('name');
    var email = getElementVal('email');
    var product = getElementVal('product');
    var quantity = getElementVal('quantity');
    var notes = getElementVal('notes');

    saveMessages(name,email,product,quantity,notes);

    //enable alert 

    document.querySelector('.alert-message').style.display = "block";

    //remove alert
    setTimeout(() => {
        document.querySelector('.alert-message').style.display = "none";
    }, 3000);

    //reset form
    
    document.getElementById("cookiszOrder").reset();

}

const saveMessages = (name,email,product,quantity,notes) => {
    var newContactForm = cookiszOrderDB.push();

    newContactForm.set({
        name : name,
        email: email,
        product: product,
        quantity: quantity,
        notes: notes,

    })
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
}