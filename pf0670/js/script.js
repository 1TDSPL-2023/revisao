let nomes = ["Diego", "Gabriel", "Lucas"];

// console.log(nomes);

console.log("Índice: ")
console.log(nomes[0]);


console.log("\nImprimindo array com loop for:");
for (let i = 0; i < nomes.length; i++) {
    if (nomes[i] == "Gabriel") {
        break;
    } else {
        console.log(nomes[i]);
    }
}

console.log("\nImprimindo o array usando um loop forEach:");
nomes.forEach(function (nome) {
    if (nome == "Gabriel") {
        return true;
    } else {
        console.log(nome);
    }
});