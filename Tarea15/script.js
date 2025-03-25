const spellingWord = 'hipopótamo';
const btn = document.getElementById('btn');
const output = document.getElementById('output');

btn.addEventListener('click', () => {
    output.innerHTML = ''; // Limpiar resultados anteriores
    console.clear(); // Limpiar consola (opcional)

    for (const letter of spellingWord) {
        console.log(letter); // Mostrar en consola
        output.innerHTML += `<p>Letra: <strong>${letter}</strong></p>`; // Mostrar en pantalla
    }
});