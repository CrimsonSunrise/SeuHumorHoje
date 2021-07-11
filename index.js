// Inicia um timer que fará verificações no Range a cada 100 milissegundos
interval = setInterval(rangeChanged, 100)

// Define as variáveis
var mainApp = document.getElementById("mainApp");
var mouth = document.getElementById("mouth");
var labio = document.getElementById("p");
var sobracelhaEsquerda = document.getElementById("el");
var sobrancelhaDireita = document.getElementById("er");
var olhoEsquerdo = document.getElementById("le");
var olhoDireito = document.getElementById("re");

// Função para verificar a posição do mouse em relação à tela
document.addEventListener('mousemove', e => {
    /**
     * Definição das variáveis X e Y. Fiz uma breve equação para que o valor de saída não seja alto.
     * Ex.: Dividi o tamanho da tela por 2 e diminuí a posição do mouse, assim sempre que o mouse estiver no centro da tela
     *      os valores serão 0.
     */
    var x = ((window.innerWidth / 2) - e.pageX) / 40
    var y = ((window.innerHeight / 2) - e.pageY) / 40
    
    // Altero a posição dos olhos com o estilo transform translate.
    olhoEsquerdo.style.transform = "translate(" + -x + "px, " + -y + "px)";
    olhoDireito.style.transform = "translate(" + -x + "px, " + -y + "px)";
});

function rangeChanged() {
    // A cada 100 milissegundos atribui à variável value o valor do range
    var value = document.getElementById("range").value;
    
    /**
     * Altera o caminho dos lábios de acordo com o valor do range
     * Para uma informação mais detalhada sobre caminhos acesse {@link https://www.w3schools.com/graphics/svg_path.asp}
     */
    labio.setAttribute("d", "M5, 150 c100,"+value+" 400,"+value+" 490,-2");
    
    /**
     * Condições para alterar os estilos.
     * Ex.: Se o valor do range for menor que 0, gira as sobrancelhas
     *      Se o valor do range for maior, levanta as sobrancelhas
     */
    if(value < 0) {
        // Mantém as sobrancelas na altura -20px em relação aos olhos
        sobracelhaEsquerda.style.top = '-20px';
        sobrancelhaDireita.style.top = '-20px';
        
        // Gira as sobrancelhas
        sobracelhaEsquerda.style.transform = "rotateZ("+(value/10)+"deg)";
        sobrancelhaDireita.style.transform = "rotateZ("+-(value/10)+"deg)";
        
        // Levanta ou abaixa a posição da boca para um melhor alinhamento visual
        mouth.style.transform = "translateY("+( -value / 10 )+"px)";
    } else {
        // Levanta as sobrancelhas
        sobracelhaEsquerda.style.top = -20 - ((value / 160) * 10)  + 'px';
        sobrancelhaDireita.style.top = -20 - ((value / 160) * 10)  + 'px';
        
        // Mantém as sobrancelhas na rotação 0
        sobracelhaEsquerda.style.transform = "rotateZ(0deg)";
        sobrancelhaDireita.style.transform = "rotateZ(0deg)";
        
        // Levanta ou abaixa a posição da boca para um melhor alinhamento visual
        mouth.style.transform = "translateY("+( -value / 10 )+"px)";
    }
    
    // Define as variáveis relacionadas às cores no formato RGB.
    red = 255;
    green = 226;
    blue = 138;
    
    // Caso o range mova para direita
    if(value > 0)
        // Diminuímos o valor do VERMELHO
        red = 255 - (value / 2)
    
    // Caso o range mova para a esquerda
    if(value < 0)
        // Diminuímos o valor do VERDE
        green = 226 - ((value * -1) / 2)
    
    // Atribuímos os valores das variáveis à página
    mainApp.style.backgroundColor = "rgb("+red+", "+green+", "+blue+")";
    
}