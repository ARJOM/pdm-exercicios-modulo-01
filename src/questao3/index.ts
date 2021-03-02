// 3.1

const arr1 = [1,2,3,4,5];

console.log(arr1.map((item) => {
    return item + 10;
}));

//3.2

const usuario1 = {
    nome: 'Diego',
    idade: 23
};

const mostraIdade = (usuario: any) => {
    return usuario.idade;
};

console.log(mostraIdade(usuario1));

//3.3

const nome1 = 'Diego';
const idade1 = 23;

const mostraUsuario = (nome = 'Diego', idade = 18 ) => {
    return { nome , idade };
};

console.log(mostraUsuario(nome1, idade1));
console.log(mostraUsuario(nome1));

//3.4

const promise = () => {
    return new Promise<void>((resolver, reject) => {
        return resolver();
    })
}
