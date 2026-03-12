const fs = require("fs");

let dados;
try {
  dados = JSON.parse(fs.readFileSync("result.json"));
} catch (e) {
  console.log("❌ Não foi possível ler result.json. Provável erro de sintaxe ou Jest não executou.");
  process.exit(1);
}

console.log("=================================");
console.log("RESULTADO DOS EXERCÍCIOS");
console.log("=================================\n");

if (!dados.testResults || dados.numTotalTests === 0) {
  console.log("❌ Nenhum teste pôde ser executado. Provável erro de sintaxe no arquivo exercicios.js\n");
  process.exit(0);
}

let contador = 1;
let totalPass = 0;
let totalFail = 0;

dados.testResults.forEach((suite) => {
  suite.assertionResults.forEach((teste) => {
    const status = teste.status === "passed" ? "✔" : "✘";
    console.log(`Exercício ${contador} ${status}`);
    if (status === "✔") totalPass++;
    else totalFail++;
    contador++;
  });
});

console.log("\n=================================");
console.log(`Total de testes: ${dados.numTotalTests}`);
console.log(`✔ Aprovados: ${totalPass}`);
console.log(`✘ Falharam: ${totalFail}`);
console.log("=================================\n");

if (totalFail > 0) {
  console.log("⚠ Alguns exercícios falharam. Verifique os detalhes acima.");
}
