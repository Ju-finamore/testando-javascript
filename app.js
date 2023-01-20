// Perguntar a idade do usuário através do prompt()
let age = parseInt(prompt("Qual sua idade?"))
// converter a idade em segundos
let ageInSeconds = age*365*24*60*60
console.log(ageInSeconds);
// mostrar o resultado usando document.write()
document.write("Em seus "+ age +" anos de idade, se passaram "+ ageInSeconds +" segundos")
