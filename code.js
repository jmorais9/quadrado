 let input = document.querySelector("input");
let quadrado = document.querySelector(".quadrado");

input.addEventListener('input', function(event) {
    quadrado.style.borderRadius = input.value;
    quadrado.style.backgroundColor = input.value;
})