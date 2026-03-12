const fs = require("fs")

const dados = JSON.parse(fs.readFileSync("result.json"))

console.log("=================================")
console.log("RESULTADO DOS EXERCÍCIOS")
console.log("=================================\n")

if (dados.numTotalTests === 0) {

  console.log("Erro de sintaxe no arquivo exercicios.js")
  console.log("Os testes não puderam ser executados.\n")

  process.exit(0)
}

let contador = 1

dados.testResults.forEach(suite => {

  if (!suite.assertionResults) return

  suite.assertionResults.forEach(teste => {

    const status = teste.status === "passed" ? "✔" : "✘"

    console.log(`Exercício ${contador} ${status}`)

    contador++

  })

})
