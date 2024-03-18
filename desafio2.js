const
     peso = window.prompt.apply()


const imc = peso / altura ** 2;

    window.prompt(`Digite o seu peso`)

    
    if (imc < 18.5) {
        console.log(`IMC: ${imc.toFixed(1)} -- Abaixo do peso`);
    
    } else if (imc > 18.5 && imc < 25.0) {
        console.log(`IMC: ${imc}-- Peso normal`);
    
    } else if (imc >= 25.0 && imc < 30.0){
        console.log(`IMC: ${imc.toFive(1)} --Sobrepeso`);
   
    } else if (imc >=30 && imc < 35){
    console.log(`IMC: ${imc.toFixed(1)} -- Obesidade grau I`);

    } else if (imc >= 35 && imc < 40) {
        console.log (`IMC: ${imc.toFixed(1)} -- Obesidade II`);

    } else{
        console.log(`IMC: ${imc.toFixed(1)} -- Obesidade grau III`);
    }

