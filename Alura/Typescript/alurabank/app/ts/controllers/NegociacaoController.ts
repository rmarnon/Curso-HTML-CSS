class NegociacaoController {

    private _inputData: HTMLInputElement;
    private _inputQuantidade: HTMLInputElement;
    private _inputValor: HTMLInputElement;
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView();

    constructor() {
        this._inputData = document.querySelector('#data') as HTMLInputElement;
        this._inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;
        this._inputValor = <HTMLInputElement>document.querySelector('#valor');
    }

    adiciona(event: Event) {
        event.preventDefault();
        
        const negociacao = new Negociacao(
            new Date(this._inputData.value.replace(/-/g, ',')),
            Number(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );

        this._negociacoes.adiciona(negociacao);
        this._negociacoes.getArray().forEach(x => {
            console.log(x.data);
            console.log(x.quantidade);
            console.log(x.valor);
        });    
    }
}