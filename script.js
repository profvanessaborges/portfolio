let texto = document.querySelector("#texto");

let nome = prompt("Qual o seu nome?");
if(nome == null){
    texto.textContent = "Seja bemvindo(a)!";    
}
else{
    texto.textContent = nome;
}

" =