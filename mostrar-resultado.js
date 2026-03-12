const fs = require("fs");

let dados;
try {
  dados = JSON.parse(fs.readFileSync("result.json"));
} catch (e) {
  console.log("❌ Não foi possível ler result.json. Provável erro de sintaxe ou Jest não executou.");
  process.exit(1);
}

console.log("=================================");
console.log("RESULTADO DOS EXERCÍCIOS (detalhado)");
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

    if (status === "✘") {
      totalFail++;
      if (teste.failureMessages && teste.failureMessages.length > 0) {
        console.log("   ⚠ Motivo da falha:");
        teste.failureMessages.forEach((msg) => {
          // Limitar a exibição das linhas para não poluir o console
          const linhas = msg.split("\n").slice(0, 5).join("\n");
          console.log("   " + linhas.replace(/\n/g, "\n   "));
          if (msg.split("\n").length > 5) console.log("   ...");
        });
      }
    } else {
      totalPass++;
    }

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
} else {
  console.log("🎉 Todos os exercícios passaram!");
}
