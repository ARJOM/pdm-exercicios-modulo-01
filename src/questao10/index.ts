class ItemOrcamento {

    historico: string;
    valor: number;

    constructor(historico: string, valor: number) {
        this.historico = historico;
        this.valor = valor;
    }

    getHistorico() {
        return this.historico;
    }
    
    getValor() {
        return this.valor;
    }

};

class ItemOrcamentoComplexo extends ItemOrcamento {

    nome: string;

    constructor(historico: string, valor: number, nome: string) {
        super(historico,valor);
        this.nome = nome;
    }

    getValorNome() {
        return `O nome ${this.nome} e o valor ${this.valor}`;
    }

    encontraItem() {
        return `O historico ${this.historico} e o nome ${this.nome}`;
    }

}

