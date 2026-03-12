const fs = require("fs")

const dados = JSON.parse(fs.readFileSync("result.json"))

console.log("=================================")
console.log("RESULTADO DOS EXERCÍCIOS")
console.log("=================================\n")

let contador = 1

dados.testResults.forEach(suite => {

    suite.assertionResults.forEach(teste => {

        const status = teste.status === "passed" ? "✔" : "✘"

        console.log(`Exercício ${contador} ${status}`)

        contador++

    })

})
