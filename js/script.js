// Converter o Hex para RGB
function hexToRgb(str) {
    str = str.replace('#', ''); // Retirando o "#".
    return str.split('').reduce(function(result, char, index, array) {
        var j = parseInt(index * 3 / array.length);
        var number = parseInt(char, 16);
        result[j] = (array.length == 3 ? number : result[j]) * 16 + number;
        return result; // Retornando o resultado.
    }, [0, 0, 0]);
}

// Botão de resetar
function resetBtn() {
    input_color_hex.value = "#000000";
}

// Atualizar o número do HEX.
function updateHEX() {
    p_hex.innerHTML = `<center>HEX: ${input_color_hex.value}`;
}

// Atualizar o número do RGB.
function updateRGB() {
    p_rgb.innerHTML = `<center>RGB: (${hexToRgb(input_color_hex.value)})`
}

// Botão de Resetar:
function resetBtn() {
    input_color_hex.value = "#000000";
}

// Escolhedor de cor:
var input_color_hex = document.getElementById("input-color");

// Texto HEX (ex: #000000):
var div_texto = document.getElementById("text_color");
var p_hex = document.createElement("p");

// Texto RGB (ex: (255,255,255))
var p_rgb = document.createElement("p");


// Color Ball (a bola que mostra a cor):
var color_ball = document.getElementById("color_ball"); // Pegando, do mundo HTML, a bola de cor.

// Setando os valores:
p_hex.innerHTML = `<center>HEX: ${input_color_hex.value}`;
p_rgb.innerHTML = `<center>RGB: (${hexToRgb(input_color_hex.value)})`;

// Escrevendo o texto:
document.body.insertBefore(p_hex, div_texto); // Escrevendo o HEX.
document.body.insertBefore(p_rgb, div_texto); // Escrevendo o RGB.

//Loop para atualizar de 50ms a 50ms.
window.setInterval(function() {
    updateHEX();
    updateRGB();

    document.getElementById("color_ball").style.backgroundColor = input_color_hex.value; //Alterando a cor da bola de cor.
}, 50);