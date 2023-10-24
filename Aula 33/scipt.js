// function calcular (){
//     let num = Number(window.prompt('Digite um número:'))

//     let res = document.querySelector('section#result')
//     res.innerHTML = `<p>O número a ser analisado aqui será o <strong>${num}</strong></p>`

//     res.innerHTML += `<p>O seu valor absoluto é <strong>${Math.abs(num)}</strong></p>`

//     res.innerHTML += `<p>A sua parte inteira é ${Math.trunc(num)}</p>`

//     res.innerHTML += `<p>O seu valor inteiro mais próximo é ${Math.round(num)}</p>`

//     res.innerHTML += `<p>A sua raiz quadrada é ${Math.sqrt(num)}</p>`

//     res.innerHTML += `<p>A sua raiz cúbica é ${Math.cbrt(num)}</p>`

//     res.innerHTML += `<p>O valor de ${num}<sup>2</sup>é ${Math.pow(num, 2)}</p>`

//     res.innerHTML += `<p>O valor de ${num}<sup>3</sup> é ${Math.pow(num, 3)}</p>`
// }

// let contador = 0
// let res = document.querySelector('section#result')
// function contar(){
//     contador++
//     res.innerHTML =`<h1>O contador está em <strong>${contador} </strong>cliques</h1>`
// }

// function zerar() {
//     contador = 0 
//     res.innerHTML = null
// }

function calculo(){
    let a = Number(document.getElementById('a').value);
    let b = Number(document.getElementById('b').value);
    let c = Number(document.getElementById('c').value);

    document. querySelector('#result').innerHTML = `A soma de
     <mark>${a} + ${b}</mark> dividido por <strong>${c}</strong>
     igual a <strong>${(a + b) / c}</strong>`
}
