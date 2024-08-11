let rangos = parseInt(prompt('Ingrese el valor maximo hasta donde quiere jugar'));
let numeroSecreto = Math.floor(Math.random()*rangos)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = 3;
console.log(numeroSecreto)
while(numeroUsuario != numeroSecreto){
    numeroUsuario = parseInt(prompt(`Indica un numero entre 1 y ${rangos}`));

    console.log(numeroUsuario);

    if(numeroUsuario == numeroSecreto){
        alert(`Acertaste, el numero es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}` );
    } else {
        if(numeroUsuario > numeroSecreto){
            alert('El número secreto es menor');
        } else{
            alert('El numero secreto es mayor')
        }
        intentos++;
        //palabraVeces = 'veces';
        if(intentos > 3){
            alert(`Llegaste al numero maximo de ${maximosIntentos} intentos`);
            break;
        }
        //alert('Lo siento no acertaste, el numero correcto es: ' + numeroSecreto );
    }
}