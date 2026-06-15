const loginlink=document.querySelector('#to-signup');
const signuplink=document.querySelector('#to-login');
const container=document.querySelector('#container');

loginlink.addEventListener('click',(e)=>{
    e.preventDefault();
    container.classList.add('active');
});

signuplink.addEventListener('click',(e)=>{
    e.preventDefault();
    container.classList.remove('active')
});

const btn=document.querySelectorAll('button');
const pass=document.querySelector('#pass-field');
btn.addEventListener('click',(e)=>{
    if(pass<8){
    e.preventDefault();
    e.target.classList.add('error');
    showError('oya andika pasword ndefu');
    }else{
        e.target.classList.remove('error');
        clearError();
    }
})