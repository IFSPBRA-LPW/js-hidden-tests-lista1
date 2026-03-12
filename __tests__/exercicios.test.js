const exercicios = require("../exercicios")

const {
dobro,
media,
maior,
ehPar,
entre10e20,
positivoOuMultiploDe5,
trianguloValido,
tipoTriangulo,
anoBissexto,
situacaoAluno,
somaAteN,
fatorial,
somaParesAteN,
contarImpares,
potencia,
quantidadeDivisores,
ehPrimo,
somaDigitos,
inverterNumero,
contarA,
contarVogais,
ehPalindromo,
tamanhoMaiorQue5,
contarEspacos,
contarDigitos,
senhaValida,
senhaForte,
contarMaiusculas,
tamanhoSemEspacos,
contarPalavras
} = exercicios


function randomInt(min,max){
return Math.floor(Math.random()*(max-min+1))+min
}

function randomString(tamanho){
const chars="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 "
let s=""
for(let i=0;i<tamanho;i++){
s+=chars[randomInt(0,chars.length-1)]
}
return s
}



describe("1 - dobro",()=>{

test("deterministico",()=>{
expect(dobro(2)).toBe(4)
expect(dobro(-3)).toBe(-6)
})

test("aleatorio",()=>{
for(let i=0;i<50;i++){
const n=randomInt(-100,100)
expect(dobro(n)).toBe(n*2)
}
})

})



describe("2 - media",()=>{

test("deterministico",()=>{
expect(media(4,6)).toBe(5)
})

test("aleatorio",()=>{
for(let i=0;i<50;i++){
const a=randomInt(-100,100)
const b=randomInt(-100,100)
expect(media(a,b)).toBe((a+b)/2)
}
})

})



describe("3 - maior",()=>{

test("deterministico",()=>{
expect(maior(5,8)).toBe(8)
})

test("aleatorio",()=>{
for(let i=0;i<50;i++){
const a=randomInt(-100,100)
const b=randomInt(-100,100)
expect(maior(a,b)).toBe(Math.max(a,b))
}
})

})



describe("4 - ehPar",()=>{

test("deterministico",()=>{
expect(ehPar(2)).toBe(true)
expect(ehPar(7)).toBe(false)
})

test("aleatorio",()=>{
for(let i=0;i<50;i++){
const n=randomInt(-1000,1000)
expect(ehPar(n)).toBe(n%2===0)
}
})

})



describe("5 - entre10e20",()=>{

test("deterministico",()=>{
expect(entre10e20(10)).toBe(true)
expect(entre10e20(9)).toBe(false)
})

test("aleatorio",()=>{
for(let i=0;i<50;i++){
const n=randomInt(-50,50)
expect(entre10e20(n)).toBe(n>=10 && n<=20)
}
})

})



describe("6 - positivoOuMultiploDe5",()=>{

test("deterministico",()=>{
expect(positivoOuMultiploDe5(7)).toBe(true)
expect(positivoOuMultiploDe5(-10)).toBe(true)
})

test("aleatorio",()=>{
for(let i=0;i<50;i++){
const n=randomInt(-50,50)
expect(positivoOuMultiploDe5(n)).toBe(n>0 || n%5===0)
}
})

})



describe("7 - trianguloValido",()=>{

function valido(a,b,c){
return a+b>c && a+c>b && b+c>a
}

test("deterministico",()=>{
expect(trianguloValido(3,4,5)).toBe(true)
})

test("aleatorio",()=>{
for(let i=0;i<50;i++){
const a=randomInt(1,20)
const b=randomInt(1,20)
const c=randomInt(1,20)
expect(trianguloValido(a,b,c)).toBe(valido(a,b,c))
}
})

})



describe("8 - tipoTriangulo",()=>{

function tipo(a,b,c){
if(a===b && b===c) return "equilatero"
if(a===b || a===c || b===c) return "isosceles"
return "escaleno"
}

test("deterministico",()=>{
expect(tipoTriangulo(3,3,3)).toBe("equilatero")
})

test("aleatorio",()=>{
for(let i=0;i<50;i++){
const a=randomInt(1,10)
const b=randomInt(1,10)
const c=randomInt(1,10)
expect(tipoTriangulo(a,b,c)).toBe(tipo(a,b,c))
}
})

})



describe("9 - anoBissexto",()=>{

function bissexto(a){
return (a%4===0 && a%100!==0) || a%400===0
}

test("deterministico",()=>{
expect(anoBissexto(2000)).toBe(true)
})

test("aleatorio",()=>{
for(let i=0;i<50;i++){
const a=randomInt(1600,2500)
expect(anoBissexto(a)).toBe(bissexto(a))
}
})

})



describe("10 - situacaoAluno",()=>{

function situacao(n){
if(n>=7) return "aprovado"
if(n>=5) return "recuperacao"
return "reprovado"
}

test("deterministico",()=>{
expect(situacaoAluno(7)).toBe("aprovado")
})

test("aleatorio",()=>{
for(let i=0;i<50;i++){
const n=randomInt(0,10)
expect(situacaoAluno(n)).toBe(situacao(n))
}
})

})



describe("11 - somaAteN",()=>{

test("deterministico",()=>{
expect(somaAteN(5)).toBe(15)
})

test("aleatorio",()=>{
for(let i=0;i<40;i++){
const n=randomInt(0,50)
let s=0
for(let j=1;j<=n;j++) s+=j
expect(somaAteN(n)).toBe(s)
}
})

})



describe("12 - fatorial",()=>{

test("deterministico",()=>{
expect(fatorial(5)).toBe(120)
})

test("aleatorio",()=>{
for(let i=0;i<20;i++){
const n=randomInt(0,8)
let f=1
for(let j=2;j<=n;j++) f*=j
expect(fatorial(n)).toBe(f)
}
})

})



describe("13 - somaParesAteN",()=>{

test("aleatorio",()=>{
for(let i=0;i<40;i++){
const n=randomInt(0,100)
let s=0
for(let j=2;j<=n;j+=2) s+=j
expect(somaParesAteN(n)).toBe(s)
}
})

})



describe("14 - contarImpares",()=>{

test("aleatorio",()=>{
for(let i=0;i<40;i++){
const a=randomInt(0,50)
const b=randomInt(50,100)

let c=0
for(let j=a;j<=b;j++) if(j%2!==0) c++

expect(contarImpares(a,b)).toBe(c)
}
})

})



describe("15 - potencia",()=>{

test("aleatorio",()=>{
for(let i=0;i<40;i++){
const a=randomInt(1,10)
const b=randomInt(0,6)
expect(potencia(a,b)).toBe(a**b)
}
})

})



describe("16 - quantidadeDivisores",()=>{

function divisores(n){
let c=0
for(let i=1;i<=n;i++) if(n%i===0) c++
return c
}

test("aleatorio",()=>{
for(let i=0;i<40;i++){
const n=randomInt(1,200)
expect(quantidadeDivisores(n)).toBe(divisores(n))
}
})

})



describe("17 - ehPrimo",()=>{

function primo(n){
if(n<2) return false
for(let i=2;i<=Math.sqrt(n);i++){
if(n%i===0) return false
}
return true
}

test("aleatorio",()=>{
for(let i=0;i<40;i++){
const n=randomInt(1,200)
expect(ehPrimo(n)).toBe(primo(n))
}
})

})



describe("18 - somaDigitos",()=>{

test("aleatorio",()=>{
for(let i=0;i<40;i++){
const n=randomInt(1,9999)
const s=n.toString().split("").reduce((a,b)=>a+Number(b),0)
expect(somaDigitos(n)).toBe(s)
}
})

})



describe("19 - inverterNumero",()=>{

test("aleatorio",()=>{
for(let i=0;i<40;i++){
const n=randomInt(10,9999)
const inv=Number(n.toString().split("").reverse().join(""))
expect(inverterNumero(n)).toBe(inv)
}
})

})



describe("20 - contarA",()=>{

test("aleatorio",()=>{
for(let i=0;i<40;i++){
const s=randomString(20)
const c=[...s].filter(x=>x==="a").length
expect(contarA(s)).toBe(c)
}
})

})



describe("21 - contarVogais",()=>{

test("aleatorio",()=>{
const vog="aeiouAEIOU"

for(let i=0;i<40;i++){

const s=randomString(20)

let c=0
for(let l of s) if(vog.includes(l)) c++

expect(contarVogais(s)).toBe(c)

}

})

})



describe("22 - ehPalindromo",()=>{

test("aleatorio",()=>{

const palavras=["arara","radar","reviver","javascript","casa","ovo"]

for(let p of palavras){

const esperado=p===p.split("").reverse().join("")

expect(ehPalindromo(p)).toBe(esperado)

}

})

})



describe("23 - tamanhoMaiorQue5",()=>{

test("aleatorio",()=>{
for(let i=0;i<40;i++){
const s=randomString(randomInt(0,10))
expect(tamanhoMaiorQue5(s)).toBe(s.length>5)
}
})

})



describe("24 - contarEspacos",()=>{

test("aleatorio",()=>{
for(let i=0;i<40;i++){
const s=randomString(20)
const c=[...s].filter(x=>x===" ").length
expect(contarEspacos(s)).toBe(c)
}
})

})



describe("25 - contarDigitos",()=>{

test("aleatorio",()=>{
for(let i=0;i<40;i++){
const s=randomString(20)
const c=[...s].filter(x=>!isNaN(x) && x!==" ").length
expect(contarDigitos(s)).toBe(c)
}
})

})



describe("26 - senhaValida",()=>{

function valida(s){
return s.length>=8
}

test("aleatorio",()=>{
for(let i=0;i<40;i++){
const s=randomString(randomInt(1,15))
expect(senhaValida(s)).toBe(valida(s))
}
})

})



describe("27 - senhaForte",()=>{

function forte(s){
return s.length>=8 && /\d/.test(s)
}

test("aleatorio",()=>{
for(let i=0;i<40;i++){
const s=randomString(randomInt(1,15))
expect(senhaForte(s)).toBe(forte(s))
}
})

})



describe("28 - contarMaiusculas",()=>{

test("aleatorio",()=>{
for(let i=0;i<40;i++){
const s=randomString(20)
const c=[...s].filter(x=>x>="A" && x<="Z").length
expect(contarMaiusculas(s)).toBe(c)
}
})

})



describe("29 - tamanhoSemEspacos",()=>{

test("aleatorio",()=>{
for(let i=0;i<40;i++){
const s=randomString(20)
const t=s.replace(/ /g,"").length
expect(tamanhoSemEspacos(s)).toBe(t)
}
})

})



describe("30 - contarPalavras",()=>{
  test("aleatorio",()=>{
    for(let i=0;i<40;i++){
      const palavras=randomInt(1,6)
      let frase=""
      for(let j=0;j<palavras;j++){
        frase+=randomString(randomInt(2,6))
        if(j<palavras-1) frase+=" "
      }
    expect(contarPalavras(frase)).toBe(palavras)
    }
  })
})

const { calcularNota } = require("../grade")

afterAll(() => {
    const nota = calcularNota()
    console.log("\n==============================")
    console.log("Nota final:", nota)
    console.log("==============================\n")
})
