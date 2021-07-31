// Init Firebase

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyB435L4W3WbTkSaIwHOTo9OtDJBOrg_ihE",
  authDomain: "contact-form-93800.firebaseapp.com",
  databaseURL: "https://contact-form-93800-default-rtdb.firebaseio.com",
  projectId: "contact-form-93800",
  storageBucket: "contact-form-93800.appspot.com",
  messagingSenderId: "516308707025",
  appId: "1:516308707025:web:e9baa0a008f094244a47f0",
  measurementId: "G-HRDN8NVQ0D"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();




// Listen for Form Submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// this is a function declaration and is defined as soon as its surrounding function or script is executed (due to hoisting).
function submitForm(e) {
  e.preventDefault();
  
  // Get values
  const name = getInputVal('name')
  const company = getInputVal('company')
  const email = getInputVal('email')
  const phone = getInputVal('phone')
  const message = getInputVal('message')
  
  console.log(name, message, email, phone, company)
  
  // save Message to Firebase
  saveMessage(name, company, email, phone, message)
  
  // Show alert
  document.querySelector('.alert').style.display = "block"

  // Hide alert after 3s
  setTimeout(()=> {
    document.querySelector('.alert').style.display = "none"
  }, 3000)


  // Clear form
  document.getElementById('contactForm').reset()
}

// function to get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}
  


// this is a function expression and so only defined when that line is reached
// const submitForm = (e) => {
//   e.preventDefault();
//   console.log('sumbitted!!!')
// }

// Reference messages collection, this is how you init any db in firebase and if you want to name name it or reference a specific collection you write .ref('collection_name')
const messagesRef = firebase.database().ref('messages')


// save message to Firebase
function saveMessage(name, company, email, phone, message){
  // add the newMessageRef to messagesRef

  const newMessageRef = messagesRef.push()

  // set newMessageRef to an object with all the fields
  newMessageRef.set({
    name: name,
    company: company,
    email: email,
    phone: phone,
    message:message
  })

  // let's call this function when form os submitted
}




