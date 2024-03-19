const  temperatura  = parseFloat( window.prompt(`Digite a temperatura:`)),
  escala  = parseFloat( window.prompt(`Unidade atual C (Celsius), F (Fahrenheit) ou K (Kelvin )?`)),
  conversao  = parseFloat( window.prompt(`Unidade desejada C (Celsius), F (Fahrenheit) ou K (Kelvin )? `));

  let calculo = 0 

const  celsiusParaFahrenheit  =  ( temperatura  *  9/5 ) + 32, 
  celsiusParaKelvin  =  temperatura  + 273.15 ,
  fahrenheitParaCelsius  =  ( temperatura  - 32  ) * 5/9 ,​​  
  fahrenheitParaKelvin  =  ( temperatura  +  459.67 )  *  5/9 ,
  kelvinParaCelsius  =  temperatura  +  273.15 ,
 kelvinParaFarenheit  =  *  9/5 - 459.67 ;​​  

if  (temperatura ==`C` && conversao == `F` )  {​​​​   
    calculo = celsiusParaFahrenheit.toFixed(2)
    window.alert( `A temperatura correta é: ${ calculo } ºF` )

}  else  if  (temperatura == `C`&& conversao == `K` ) {​​​​   
    calculo = celsiusParaKelvin.toFixed(2)
    window.alert ( `A temperatura correta é: ${ calculo } ºK` )

}  else  if  ( temperatura.  fahrenheit  == conversao.  celsius ) ) {​​​​   
    window.alert ( `A temperatura correta é: ${ fahrenheitParaCelsius } ºC` )
}  else  if  ( temperatura. ( fahrenheit ) == conversao. ( kelvin ) ) {​​​​  
    window.alert ( `A temperatura correta é: ${ fahrenheitParaKelvin } ºK` )
}  else  if  ( temperatura. ( kelvin ) == conversao. ( celsius ) ) {​​​​  
    window.alert ( `A temperatura correta é: ${ kelvinParaCelsius } ºC` )
}   {
    window.alert ( `A temperatura correta é: ${ kelvinParaFarenheit } ºF` )
}