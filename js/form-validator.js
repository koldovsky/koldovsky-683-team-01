const usernamename = document.getElementById('name');
const phone = document.getElementById('phone');
const email = document.getElementById('email');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();

});

function checkInputs () {

   const userNameValue = name.value.trim();
   const phoneValue = phone.value.trim();
   const emailValue = email.value.trim();



   if(emailValue === ' ') {
    setErrorFor(email, 'Email cannot be blank');
   } else if(!isEmail(emailValue)) {
       setErrorFor(email, 'Email is not valid');
   } else {
       setSuccessFor(email);
   }


   }

   function setErrorFor(input, message) {
       const formControl = input.parentElement;
   }

   function setSuccessFor(input) {
       const formControl = input.parentElement;
   }
   
   function isEmail(email) {
       return /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(email);

   } 
