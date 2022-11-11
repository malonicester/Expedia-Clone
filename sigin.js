console.log('hello world');
let siginData = JSON.parse(localStorage.getItem('signin')) || [];
let form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let obj = {
        email:form.email.value,
        firstName:form.first_Name.value,
        lastName:form.last_Name.value,
        password:form.password.value,
    }
    let found = false;
    siginData.forEach((item) => {
        if(item.email == obj.email){
            found = true;
            alert("You are already registered");
        }
    });
    if(!found){
       siginData.push(obj);
       localStorage.setItem('signin',JSON.stringify(siginData));
       alert('Registration Successful');
    }
})
console.log(document.querySelector('#log_in'))

