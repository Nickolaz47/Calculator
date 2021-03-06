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
const history = []
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
function processOperation(operation) {
    var operators = ['+', '-', '**', '*', '/', '%']
    var finalArray = []
    var foundOperator = []
    // Pegando os operadores
    for (let operator of operators) {
        if (operation.indexOf(operator) != -1) {
            foundOperator.push(operator)            
        }
    }
    // Pegando os valores da operação
    let modOperation = operation.replace(/\D/g, ' ')
    let array = modOperation.split(' ')    
    finalArray.push(...array)
    return [finalArray, foundOperator]
}
function calc() {
    var result = document.getElementById('screen').innerHTML
    if (result) {
        // Tratando o erro de uma expressão inválida
        try {
            document.getElementById('screen').innerHTML = eval(result)
            let obj = (operation) => {
                let processedOperation = processOperation(operation)
                return {
                    valores: processedOperation[0].join(', '),
                    operadores: processedOperation[1].join(', '),
                    expressão: operation,
                    resultado: eval(operation)
                }
            }
            history.push(obj(result)) 
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
    let operation = {
        valores: parseFloat(result),
        operador: 'raiz quadrada',
        expressão: `RaizQuadrada(${result})`,
        resultado: Math.sqrt(result)
    }
    history.push(operation)
}
function sen() {
    var result = document.getElementById('screen').innerHTML
    document.getElementById('screen').innerHTML = Math.sin(result)
    let operation = {
        valores: parseFloat(result),
        operador: 'seno',
        expressão: `seno(${result})`,        
        resultado: Math.sin(result)
    }
    history.push(operation)
}
function cos() {
    var result = document.getElementById('screen').innerHTML
    document.getElementById('screen').innerHTML = Math.cos(result)
    let operation = {
        valores: parseFloat(result),
        operador: 'coseno',
        expressão: `coseno(${result})`,
        resultado: Math.cos(result)
    }
    history.push(operation)
}
function showHistory() {
    let historyLog = document.getElementById('mostra-historico')
    let newHistory = (history) => {
        let array = []
        for (let obj of history) {
            let newOperation = `${obj.expressão} = ${obj.resultado}`
            array.push(newOperation)
        }
        return array
    }
    historyLog.innerHTML = newHistory(history).join(', ')
    // historyLog.innerHTML = JSON.stringify(history, null, ' ')
}