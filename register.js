const email = document.querySelector('#email');
const repassword = document.querySelector('#repassword');
const names = document.querySelector('#name');

const password = document.querySelector('#password');
const btn = document.querySelector('.loginbtn');
let array = []
btn.addEventListener('click', () => {
    // console.log(email.value);
    // console.log(password.value);
    array.push({
        email: email.value,
        password: password.value,

    })
    Swal.fire({
        position: 'center',
        icon: 'You are registered',
        title: '',
        showConfirmButton: false,
        timer: 1500
    })
    // console.log(array);
    const reg = JSON.stringify(array)
    localStorage.setItem('array', reg)
    // console.log(array);


    email.value = '';
    password.value = '';
    names.value = '';
    repassword.value = '';
})


