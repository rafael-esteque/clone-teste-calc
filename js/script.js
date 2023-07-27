//FUNÇÃO DO EXERCÍCIO 1//
function trocaTexto() {
    const texto = document.getElementById('textoLorem');
    texto.textContent = "Nunca se esqueça de quem é, porque é certo que o mundo não se esquecerá. Faça disso sua força. Assim, não poderá ser nunca a sua franqueza. Arme-se com essa lembrança, e ela nunca poderá ser usada para magoá-lo. (LANNISTER, Tyrion)"
}

//FUNÇÃO DO EXERCÍCIO 2://
function mudaCor() {
    const corEscolhida = document.getElementById("cor").value;
    const textoDois = document.getElementById("textoMudaCor");
    textoDois.style.color = corEscolhida;
}

//FUNÇÕES DO EXERCÍCIO 3://
function adiciona() {
    let contagemAtualemTexto = document.getElementById('numeroMostrado').textContent;
    let contagemAtual = parseInt(contagemAtualemTexto);
    let novoNumero = contagemAtual + 1;
    document.getElementById('numeroMostrado').textContent = novoNumero;
}

function resetaContador() {
    let contagemAtualemTexto = document.getElementById('numeroMostrado').textContent;
    let contagemAtual = parseInt(contagemAtualemTexto);
    let novoNumero = contagemAtual - contagemAtual;
    document.getElementById('numeroMostrado').textContent = novoNumero;
}

//FUNÇÕES DO EXERCÍCIO 4://
function aplicaOriginal() {
    let imagem = document.getElementById('tyrion');
    imagem.src = "./img/tyrion.JPG";
}

function aplicaPB() {
    let imagem = document.getElementById('tyrion');
    imagem.src = "./img/tyrion-pb.jpg";
}

function aplicaSepia() {
    let imagem = document.getElementById('tyrion');
    imagem.src = "./img/tyrion-sepia.jpg";
}

//FUNÇÕES DO EXERCÍCIO 5://
function calcula() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    const operacao = document.getElementById('operacao').value;
    let resultado;

    switch (operacao) {
        case 'Somar':
            resultado = num1 + num2;
            break;
        case 'Subtrair':
            resultado = num1 - num2;
            break;
        case 'Multiplicar':
            resultado = num1 * num2;
            break;
        case 'Dividir':
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                resultado = "Não é possível dividir por zero.";
            }
            break;
        default:
            resultado = "Operação inválida";
            break;
    }
    document.getElementById('resultado').textContent = resultado;
    console.log(resultado);
}

function limpa() {
        document.getElementById('num1').value = "";
        document.getElementById('num2').value = "";
        document.getElementById('operacao').selectedIndex = 0;
        document.getElementById('resultado').textContent = 0;
}

//FUNÇÕES DO EXERCÍCIO 6://
function insert(num)
{
    let numero = document.getElementById('resultadoCII').innerHTML;
    document.getElementById('resultadoCII').innerHTML = numero + num;
}
function limparTudo()
{
    document.getElementById('resultadoCII').innerHTML = "";
}
function apagaUmDigito()
{
    var resultado = document.getElementById('resultadoCII').innerHTML;
    document.getElementById('resultadoCII').innerHTML = resultado.substring(0, resultado.length -1);
}
function calcular()
{
    var resultado = document.getElementById('resultadoCII').innerHTML;
    if(resultado)
    {
        document.getElementById('resultadoCII').innerHTML = eval(resultado);
    }
    else
    {
        document.getElementById('resultadoCII').innerHTML = "Nada..."
    }
}
