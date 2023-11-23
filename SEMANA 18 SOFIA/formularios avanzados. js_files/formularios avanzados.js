//programacion de transicion de ambos formularios
const  signUpButton = document.getElementById("signUp");
const  signInButton = document.getElementById("signIn");
const  containeer = document.getElementById("container");

signUpButton.addEventListener('click',()=>{
    containeer.classList.add("right-panel-active");
});

signInButton.addEventListener('click',()=>{
    containeer.classList.remove("right-panel-active");
});
