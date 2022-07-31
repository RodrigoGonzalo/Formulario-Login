const Senha = document.querySelector('.Password');
const MostrarSenha = document.querySelector('.Mostrar');

MostrarSenha.addEventListener('click', function(){
    if(Senha.type === "password"){
        Senha.type = "text";
        MostrarSenha.textContent = "HIDE";
        MostrarSenha.style.color = "#3498db";
    }
    else{
        Senha.type = "password";
        MostrarSenha.textContent = "SHOW";
        MostrarSenha.style.color = "#222";
}});
