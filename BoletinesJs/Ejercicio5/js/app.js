const nombres = ["jousemarquez", "AlbertoF17", "eXdesy", "usuariozombie", "Hard-Curro", "irecas97"];

function rellenar(array) {
    const container = document.getElementById('container');
    // Mediante un bucle for se rellena el #container tomando como medida el array de nombres indicado arriba.
    // De esta forma se genera al pulsar el botón que está definido en el HTML que tiene anidada la función "rellenar"
    // se generará una carta por perfil de la siguiente manera:
    for (let i = 0; i < array.length; i++) {
        // Se crea un div que contenga la clase .card .border-info .mb-3 .w-25 .h-25 y dentro un .card-header
        const div1 = document.createElement('DIV');
        div1.className = 'card border-info mb-3 w-25 h-25';
        const div2 = document.createElement('DIV');
        div2.className = 'card-header';
        div2.textContent = array[i];
        // Se crea un div que contenga las clases .card-body .text-info .d-flex .flex-column
        const div3 = document.createElement('DIV');
        div3.className = 'card-body text-info d-flex flex-column';
        // Se crea una img importándola desde Github a través de la url indicada y obteniendo el 
        // nombre del array. Se indica la clase .card-img-top
        const img = document.createElement('IMG');
        img.className = 'card-img-top';
        img.alt = array[i];
        img.src = `https://github.com/${array[i]}.png`;
        // Se declara un elemento "a" que apunta al perfil de Github y se rellena con el texto "Ir a su Github" con las clases .btn .btn-primary
        const link = document.createElement('A');
        link.className = 'btn btn-primary';
        link.textContent = 'Ir a su Github';
        link.href = `https://github.com/${array[i]}`;
        // Finalmente se hace un append para imprimir por pantalla cada uno de los elementos preparados.
        div1.appendChild(div3);
        div1.appendChild(div2);
        div3.appendChild(img);
        div3.appendChild(link);
        container.appendChild(div1);
    }
}