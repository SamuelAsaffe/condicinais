

//  tarefa 1
// intantil  6 a 10 anos
// infanto-juvenil 11 a 15 anos
// juvenil 16 a 21 anos
// adulto 22 a 35 anos

// use if e depois if e else
a=prompt("quer saber sua categoria?2 \n")
if (a==="sim") {
    infantil()
}
function infantil(){
    let idade = prompt("qual a sua idade?1")
    if (idade<6 || idade >35) {
        alert("fora das categorias, não pode participar")
    }
    if (idade>=6 && idade <=10) {
        alert("categoria infantil")
    }
    if (idade>=11 && idade <=15) {
        alert("categoria infanto-juvenil")
    }
    if (idade>=16 && idade <=21) {
        alert("categoria juvenil")
    }
    
    if (idade>=22 && idade <=35) {
        alert("categoria adulto")
    }
}



// tarefa 2

// intantil  6 a 10 anos
// infanto-juvenil 11 a 15 anos
// juvenil 16 a 21 anos
// adulto 22 a 35 anos

// use if e depois if e else
a=prompt("quer saber sua categoria?2 \n")
if (a==="sim") {
    adulto()
}
function adulto(){
    let idade = prompt("qual a sua idade?2")
    if (idade<6 || idade >35) {
        alert("fora das categorias, não pode participar")
    }else
    if (idade>=6 && idade <=10) {
        alert("categoria infantil")
    }else
    if (idade>=11 && idade <=15) {
        alert("categoria infanto-juvenil")
    }else
    if (idade>=16 && idade <=21) {
        alert("categoria juvenil")
    }else
    
    if (idade>=22 && idade <=35) {
        alert("categoria adulto")
    }
}