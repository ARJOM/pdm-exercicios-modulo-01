"use strict";
//Questão 5
// 5.1
const arr = [1, 2, 3, 4, 5, 6];
const [x, ...y] = arr;
console.log(x);
console.log(y);
const soma = (...others) => {
    return others.reduce((acumulado, valorAtual) => {
        return acumulado + valorAtual;
    });
};
console.log(soma(1, 2, 3, 4, 5, 6));
console.log(soma(1, 2));
console.log(soma(...arr));
// 5.2
const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};
let usuario2 = { ...usuario, nome: 'Daniel' };
let usuario3 = { ...usuario, endereco: { ...usuario.endereco, cidade: 'Lontras' } };
console.log(usuario2, usuario3);
