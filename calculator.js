// Desenvolva uma calculadora web (HTML/CSS) com as seguintes funcionalidades:

// * Soma
// * Subtração
// * Multiplicação
// * Divisão
// * Resto de uma divisão
// * Raiz quadrada
// * Potenciação
// * Seno
// * Coseno
// * Pi

// [ATENÇÃO] A calculadora deve ter um histórico de operações!!!
//     Esse histórico deve ficar armazenado em um array de objetos com os seguintes dados:
//         Valores
//         Operador
//         Resultado

// A interface é livre, usem a imaginação!
function insert(num) {
    var number = document.getElementById('screen').innerHTML
    document.getElementById('screen').innerHTML = number + num
}
function backspace() {
    var result = document.getElementById('screen').innerHTML
    // Deletando o último elemento na tela
    document.getElementById('screen').innerHTML = result.substring(0, result.length - 1)
}
function clean() {
    document.getElementById('screen').innerHTML = ''
}
function calc() {
    var result = document.getElementById('screen').innerHTML
    if (result) {
        // Tratando o erro de uma expressão inválida
        try {
            document.getElementById('screen').innerHTML = eval(result)
        } catch (SyntaxError) {
            document.getElementById('screen').innerHTML = 'Cálculo inválido!'
        }
    } else {
        document.getElementById('screen').innerHTML = 'Null'
    }
}
function squareRoot() {
    var result = document.getElementById('screen').innerHTML
    document.getElementById('screen').innerHTML = Math.sqrt(result)
}
function sen() {
    var result = document.getElementById('screen').innerHTML
    document.getElementById('screen').innerHTML = Math.sin(result)
}
function cos() {
    var result = document.getElementById('screen').innerHTML
    document.getElementById('screen').innerHTML = Math.cos(result)
}