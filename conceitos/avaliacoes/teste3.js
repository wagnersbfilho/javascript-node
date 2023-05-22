const cliente1 = {
    nome: "a",
    item: "a",
    preco: parseFloat("1")
};

// JSON do Cliente 2
const cliente2 = {
    nome: "a",
    item: "a",
    preco: parseFloat("1")
};

var ret = true;
for(var i in cliente2) {
    if(!cliente1.hasOwnProperty(i) || cliente2[i] !== cliente1[i]) {
        ret = false;
        break;
    }
}
console.log(ret);