var input = document.querySelector("#text_code");
var input2 = document.querySelector("#text_deslocamento");

function onclick_cripto() {
    var rec = parseInt(prompt('Digite a chave de criptografia: '))
    var frased = input.value
    cripto(frased, rec)
    rodape.classList.remove("hide")
}

function onclick_descripto() {
    var rec = parseInt(prompt('Digite a chave de criptografia: '))
    var frased = input.value
    descripto(frased, rec)
    rodape.classList.remove("hide")
}


function descripto(frase, deslocamento) {
    var frasepronta = ''
    a = frase.split('')
    for (var i = 0; i < a.length; i++) {
        const letra = frase[i]
        if (letra == ' ') {
            frasepronta = `${frasepronta} `
        } else {
            for ([key, value] of alfabeto) {
                if (value == letra.toLowerCase()) {
                    if (key - deslocamento < 0) {
                        let valor = key - deslocamento + 26
                        let controle = true;
                        let contador = 0
                        let novoValor = 0
                        let novoalfabeto = new Map();

                        while (controle) {
                            if (valor > 0) {
                                frasepronta = `${frasepronta}${alfabeto.get(valor)}`
                                document.querySelector('#decode').textContent = frasepronta
                                controle = false;
                            } else {
                                novoValor += 26

                                for ([key, value] of alfabeto) {
                                    key = key + contador * 26
                                    novoalfabeto.set(key, value)
                                }

                                if (novoalfabeto.get(valor + novoValor) != undefined) {
                                    frasepronta = `${frasepronta}${novoalfabeto(valor+novoValor)}`
                                    document.querySelector('#decode').textContent = frasepronta
                                }
                                contador += 1
                            }
                        }


                    } else {
                        frasepronta = `${frasepronta}${alfabeto.get(valor)}`
                        document.querySelector('#decode').textContent = frasepronta
                    }



                }


            }



        }


    }
    return frasepronta


}

function cripto(frase, deslocamento) {
    var frasepronta = ''
    a = frase.split('')
    for (var i = 0; i < a.length; i++) {
        letra = a[i]
        if (letra == ' ') {
            frasepronta = `${frasepronta} `

        } else {
            for (var [key, value] of alfabeto) {
                if (value == letra.toLowerCase()) {
                    if (deslocamento + key > 26) {
                        var controle = true;
                        let contador = 1;

                        while (controle) {
                            var novoAlfabeto = new Map();
                            for (var [key2, value] of alfabeto) {
                                key2 = key2 + contador * 26
                                novoAlfabeto.set(key2, value)
                            }
                            if (novoAlfabeto.get(deslocamento + key) != undefined) {
                                frasepronta = `${frasepronta}${novoAlfabeto.get(deslocamento + key)}`;
                                document.querySelector('#decode').textContent = frasepronta
                                controle = false
                            }
                            contador += 1
                        }
                    } else {
                        frasepronta = `${frasepronta}${alfabeto.get(deslocamento + key)}`
                        document.querySelector('#decode').textContent = frasepronta
                    }


                }

            }
        }

    }
    return frasepronta
}

var alfabeto = new Map();
alfabeto.set(1, 'a');
alfabeto.set(2, 'b');
alfabeto.set(3, 'c');
alfabeto.set(4, 'd');
alfabeto.set(5, 'e');
alfabeto.set(6, 'f');
alfabeto.set(7, 'g');
alfabeto.set(8, 'h');
alfabeto.set(9, 'i');
alfabeto.set(10, 'j');
alfabeto.set(11, 'k');
alfabeto.set(12, 'l');
alfabeto.set(13, 'm');
alfabeto.set(14, 'n');
alfabeto.set(15, 'o');
alfabeto.set(16, 'p');
alfabeto.set(17, 'q');
alfabeto.set(18, 'r');
alfabeto.set(19, 's');
alfabeto.set(20, 't');
alfabeto.set(21, 'u');
alfabeto.set(22, 'v');
alfabeto.set(23, 'w');
alfabeto.set(24, 'x');
alfabeto.set(25, 'y');
alfabeto.set(26, 'z');