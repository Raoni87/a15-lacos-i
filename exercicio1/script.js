let pergunta = prompt("Deseja comer mais coxinhas?\n S\n N").toUpperCase();
let conta = 0;

while(pergunta === "S") {
    conta = conta + 2.50;
    pergunta = prompt("Deseja comer mais coxinhas?\n S\n N").toUpperCase();
    if(pergunta !== "S")
    console.log(`sua conta deu ${conta}`)
} 