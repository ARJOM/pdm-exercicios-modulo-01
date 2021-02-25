//Questão 2
const projetos = [
    {nome:'projeto1', valor:10000, empresa:'A',endereço:{rua:'x',cidade:'Z',numero:45}},
    {nome:'projeto2', valor:20000, empresa:'B',endereço:{rua:'y',cidade:'T',numero:4}},
    {nome:'projeto3', valor:15000, empresa:'C',endereço:{rua:'a',cidade:'Z',numero:5}}
];
// 2.1
let valProjetos = projetos.map(function(value){
    return value.valor;
});

console.log(valProjetos);
// 2.2
let projetosMesmaCidade = projetos.filter(function(projeto){
    return projeto.endereço.cidade == 'Z';
});

console.log(projetosMesmaCidade);
// 2.3
const projetoDeEmpresa = projetos.find(function(valor){
    return valor.empresa == 'Google';
});

console.log(projetoDeEmpresa);
// 2.4
const projetosMultiplicados = projetos.map(function(value){
    value.valor = value.valor*2;
    return value;
}).filter(function(value){
    return value.valor < 30000;
});

console.log(projetosMultiplicados);