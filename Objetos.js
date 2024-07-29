const Pessoa = {
    nome:"João",
    idade:30,
    saudacao:function(){
        return `Olá, meu nome é ${this.nome} e eu tenho ${this.idade}anos`;
    }
};
//console.log(Pessoa.saudacao());
const carro= {
    marca:"bmw",
    modelo:"a5",
    ano:2000,
    infcar:function(){
        return `a marca do carro é ${this.marca} do modelo ${this.modelo} e o ano ${this.ano}.`;

    }

}
//console.log(carro.infcar());
const livro={
    titulo:"algum",
    autor:"alguem",
    anoLancamento:2000,
    infLivro:function(){
        return`titulo ${this.titulo}, autor ${this.autor}, ano ${this.anoLancamento}`;
    }
}
//console.log(livro.infLivro());

const bilioteca = [
    {titulo:"god",
    autor:"não tem",
    ano:2000
    },
    {itulo:"gods",
        autor:"tem",
        ano:2000},
    {itulo:"live",
        autor:"não",
        ano:2000}
]
