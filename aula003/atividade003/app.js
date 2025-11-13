//function fnJogo(){
//    let chute = 0, numeroMagico = 3
//    chute = document.getElementById("valor").value
//
//    if(chute == numeroMagico){
//       document.getElementById("resultado").innerText = "Acertou 😊"
//    }else{
//        document.getElementById("resultado").innerText = "Errou 😞"
//    }
//
//}

// 1 - como fazer um sorteio de número de 1 a 10 ao invés de deixar fixo o 3

function fnJogo(){
    // Gera um número inteiro aleatório entre 1 e 10 (ambos inclusos)
    let numeroMagico = Math.floor(Math.random() * 10) + 1;
    let chute = 0;
    
    // É uma boa prática converter o valor do input para um número inteiro
    chute = parseInt(document.getElementById("valor").value, 10); 

    if(chute === numeroMagico){ // Use '===' para uma comparação mais segura
       document.getElementById("resultado").innerText = "Acertou 😊";
    } else {
        document.getElementById("resultado").innerText = "Errou 😞. O número mágico era " + numeroMagico;
    }
}