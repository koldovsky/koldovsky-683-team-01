let username = document.getElementsByClassName('name')[0];
let form = document.getElementById('form');

// Event listeners
form.addEventListener('submit', function(e) {
    e.preventDefault();
    checkIfNameEmpty()
});

function checkIfNameEmpty() {
    if (username.value == '') {
        username.className = username.className + ' error'
    } else {
        username.className = "form_field name"
    }
}

