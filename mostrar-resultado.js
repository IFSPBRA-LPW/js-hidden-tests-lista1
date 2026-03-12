const fs = require("fs")

console.log("=================================")
console.log("RESULTADO DOS EXERCÍCIOS")
console.log("=================================\n")

const dados = JSON.parse(fs.readFileSync("result.json"))

let contador = 1
let houveTestes = false

dados.testResults.forEach(suite => {

  if (!suite.assertionResults) {
    console.log("Erro ao executar testes (possível erro de sintaxe no código).")
    return
  }

  suite.assertionResults.forEach(teste => {

    houveTestes = true

    const status = teste.status === "passed" ? "✔" : "✘"

    console.log(`Exercício ${contador} ${status}`)

    contador++

  })

})

if (!houveTestes) {
  console.log("Nenhum teste pôde ser executado.")
}
