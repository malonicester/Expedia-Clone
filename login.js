let form = document.querySelector('form');
let signin = JSON.parse(localStorage.getItem('signin')) || [];
console.log(signin)
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let email = form.email.value;
    let password = form.password.value;
    let found = false;
    signin.forEach(item => {
        if (item.email == email && item.password == password) {
            found = true;
            alert('Sign in successfully')
            window.location.href = './hotels.html'
        } 
    });
    if(!found){
        alert('Either email or password is incorrect')
    }
})