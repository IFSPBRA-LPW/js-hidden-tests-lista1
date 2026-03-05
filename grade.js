let totalExercicios = 30
let exerciciosPassaram = 0

function registrarResultado(nomeDescribe, passou){
    if(passou){
        exerciciosPassaram++
    }
}

function calcularNota(){
    const nota = (exerciciosPassaram / totalExercicios) * 10
    return nota.toFixed(2)
}

module.exports = {
    registrarResultado,
    calcularNota
}
