
/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


let valor = document.getElementById("entry")
const conv = document.getElementById("convert")
let lenghtO = document.getElementById("lresult")
let volumO = document.getElementById("vresult")
let massO = document.getElementById("mresult")


conv.addEventListener("click", function(){

    let valor1 = valor.value
    let feet = valor1 * 3.281;
    feet = feet.toFixed(3)
    let metros = valor1 / 3.281;
    metros = metros.toFixed(3)
    
    let gallon = valor1 * 0.264;
    gallon = gallon.toFixed(3)
    let litros = valor1 / 0.264;
    litros = litros.toFixed(3)
    
    let pound = valor1 * 2.204;
    pound = pound.toFixed(3)
    let massa = valor1 / 2.204;
    massa = massa.toFixed(3)

    lenghtO.innerHTML = `${valor1} meters = ${feet} feets | ${valor1} feets = ${metros} meters`

    volumO.innerHTML = `${valor1} liters = ${gallon} liters | ${valor1} gallons = ${litros} meters`
    
    massO.innerHTML = `${valor1} kilograms = ${pound} pounds | ${valor1} pounds = ${massa} kilograms`
})

