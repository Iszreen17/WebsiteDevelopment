// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBwvdAvsBGyihpw_yzpbe7nQ-gl8lLueMA",
  authDomain: "cookiszorder.firebaseapp.com",
  databaseURL: "https://cookiszorder-default-rtdb.firebaseio.com",
  projectId: "cookiszorder",
  storageBucket: "cookiszorder.firebasestorage.app",
  messagingSenderId: "215304389891",
  appId: "1:215304389891:web:c04266f3daaf229b8f9536"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var cookiszOrderDB = firebase.database().ref('cookiszOrder');

// Handle form submission
document.getElementById("cookiszOrder").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  const name = getElementVal('name');
  const email = getElementVal('email');
  const product = getElementVal('product');
  const quantity = getElementVal('quantity');
  const notes = getElementVal('notes');

  saveMessages(name, email, product, quantity, notes);

  // Show alert
  document.querySelector('.alert-message').style.display = "block";

  setTimeout(() => {
    document.querySelector('.alert-message').style.display = "none";
  }, 3000);

  // Show payment section
  document.getElementById("payment-section").style.display = "block";
  document.getElementById("payment-section").scrollIntoView({ behavior: 'smooth' });

  // Optional: Prefill card name
  document.getElementById("cardName").value = name;
}

const saveMessages = (name, email, product, quantity, notes) => {
  var newContactForm = cookiszOrderDB.push();
  newContactForm.set({
    name: name,
    email: email,
    product: product,
    quantity: quantity,
    notes: notes,
    createdAt: new Date().toISOString()
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

// Handle payment button click
function handlePayment() {
  const cardName = document.getElementById('cardName').value;
  const cardNumber = document.getElementById('cardNumber').value;
  const expiryMonth = document.getElementById('expiryMonth').value;
  const zip = document.getElementById('paymentZip').value;

  if (!cardName || !cardNumber || !expiryMonth || !zip) {
    alert("Please complete all payment fields.");
    return;
  }

  alert("Payment successful! Thank you for your order.");
  document.getElementById("cookiszOrder").reset();
  document.getElementById("payment-section").style.display = "none";

  // Redirect to homepage
  setTimeout(() => {
    window.location.href = "index.html"; // Change if your homepage is named differently
  }, 1000);
}

// Auto-format card number
document.getElementById('cardNumber').addEventListener('input', function (e) {
  let value = e.target.value.replace(/\D/g, '');
  e.target.value = value.match(/.{1,4}/g)?.join('-') ?? '';
});
