appDiv = document.querySelector("#appDiv")

fetch('../json/alumnos.json')
.then(response => response.json())
.then( json => {
    console.log(json)

    json.map(item => {
        appDiv.innerHTML += `<div style="border: 2px solid black; padding: 5px">
            <h2>${item.nombre} ${item.apellido} </h2>
        </div>`
    })
})