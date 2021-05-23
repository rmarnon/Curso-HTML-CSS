class NegociacaoController {

    private _inputData: HTMLInputElement;
    private _inputQuantidade: HTMLInputElement;
    private _inputValor: HTMLInputElement;

    constructor() {
        this._inputData = document.querySelector('#data') as HTMLInputElement;
        this._inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;
        this._inputValor = document.querySelector('#valor') as HTMLInputElement;
    }

    adiciona(event: Event) {
        event.preventDefault();
        
        const negociacao = new Negociacao(
            new Date(this._inputData.value.replace(/-/g, ',')),
            Number(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );

        console.log(negociacao);
    }
}