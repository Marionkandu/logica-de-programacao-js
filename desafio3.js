function converteTemperatura(){



    const  temperatura  = parseFloat( window.prompt(`Digite a temperatura:`)),
      escala  = parseFloat( window.prompt(`Unidade atual C (Celsius), F (Fahrenheit) ou K (Kelvin )?`)),
      conversao  = parseFloat( window.prompt(`Unidade desejada C (Celsius), F (Fahrenheit) ou K (Kelvin )? `));
    
 
    
    const  celsiusParaFahrenheit  =  ( temperatura  *  9/5 ) + 32, 
      celsiusParaKelvin  =  temperatura  + 273.15 ,
      fahrenheitParaCelsius  =  ( temperatura  - 32  ) * 5/9 ,​​  
      fahrenheitParaKelvin  =  ( temperatura  +  459.67 )  *  5/9 ,
      kelvinParaCelsius  =  temperatura  +  273.15 ,
     kelvinParaFarenheit  =  (temperatura *1 )*9/5 - 459.67 ;​​  
    
    if  (temperatura ==`C` && conversao == `F` )  {​​​​   
        calculo = celsiusParaFahrenheit.toFixed(2)
        window.alert( `A temperatura correta é: ${ calculo } ºF` )
    
    }  else  if  (temperatura == `C`&& conversao == `K` ) {​​​​   
        calculo = celsiusParaKelvin.toFixed(2)
        window.alert ( `A temperatura correta é: ${ calculo } ºK` )
    
    }  else  if  ( temperatura == `F`  && conversao `C` ) {​​​​   
        calculo = fahrenheitParaCelsius
        window.alert ( `A temperatura correta é: ${ calculo } ºC` )
    }  else  if  ( temperatura == `F` && conversao  `K` ) {​​​​  
        calculo = fahrenheitParaKelvin
        window.alert ( `A temperatura correta é: ${ calculo} ºK` )
    }  else  if  ( temperatura ==  `K` && conversao == `C` ) {​​​​  
        calculo = kelvinParaCelsius 
        window.alert ( `A temperatura correta é: ${ calculo} ºC` )
    }   


}

