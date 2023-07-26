// ! JSNACK 1
let n1 = document.getElementById("n1")
let n2 = document.getElementById("n2")
let js1_button = document.getElementById("js1_button")


function RNG(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


js1_button.addEventListener("click", function () {
    let n1v = parseInt(n1.value)
    let n2v = parseInt(n2.value)


    if (!(isNaN(n1v) || isNaN(n2v)) && (n1v != n2v)) {

        //rendi il numero positivo
        n1v = (n1v < 0) ? n1v * -1 : n1v
        n2v = (n2v < 0) ? n2v * -1 : n2v

        let result = RNG(n1v, n2v)
        alert(result)
    } else {
        alert("I dati devono essere diversi e/o numeri interi!")
    }
})


// ! JSNACK 2
let word1 = document.getElementById("word1")
let word2 = document.getElementById("word2")
let js2_button = document.getElementById("js2_button")
let js2_display = document.getElementById("js2_display")

js2_button.addEventListener("click", function () {

    let w1 = word1.value
    let w2 = word2.value


    if (w1 && w2) {
        if (w1.length == w2.length) {
            js2_display.innerHTML = `${w1} e ${w2}`
        } else if (w1.length > w2.length) {
            js2_display.innerHTML = w1
        } else {
            js2_display.innerHTML = w2
        }
    } else {
        alert("Devi inserire due parole!")
    }

})


// ! JSNACK 3
const js3_button = document.getElementById("js3_button")
const js3_display = document.getElementById("js3_display")

const js3_sumDisplay = document.getElementById("js3_sum")
const js3_sumDisplayString = js3_sumDisplay.innerHTML

const js3_average = document.getElementById("js3_average")
const js3_averageString = js3_average.innerHTML

let sum = 0
let numArray = []
let average = 0

js3_button.addEventListener("click",function(){
   
    sum = 0;
    numArray = []
    js3_sumDisplay.innerHTML = js3_sumDisplayString
    js3_display.innerHTML = ""
    js3_average.innerHTML = js3_averageString
   
    while (sum < 50) {
        let numToAdd = parseInt(prompt("Inserisci un numero:"))

        if (!isNaN(numToAdd)) {
            js3_display.innerHTML += `<li>${numToAdd}</li>`
            numArray.push(numToAdd);
            sum += numToAdd;

        } else {
            alert("Devi inserire un numero!")
        }
    }

     js3_sumDisplay.innerHTML += sum

     average = (sum / numArray.length)
     js3_average.innerHTML += average.toFixed(2)

})


// ! JSNACK 4
// ? correggi il seguente codice.

/*
--------------------------
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = "";
    for (let i = 0; i < numbers.length - 1; i++;) {
        if (numbers % 2 = 0); {
            evenNumbers.push(i);
        }
    }
    console.log(evenNumbers);

    // dovrebbe restituire [1,3,5]	
--------------------------
*/

// * SOLUZIONE *

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let evenNumbers = [];
for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] % 2 == 0) {
        console.log(i)
        evenNumbers.push(i);
    }
}
console.log(evenNumbers);

// dovrebbe restituire [1,3,5]	