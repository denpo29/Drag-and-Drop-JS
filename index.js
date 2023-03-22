const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")
const contenedor = document.querySelector(".container")
const papelera = document.querySelector("#papelera")


parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", Event => {
        //console.log("Inicio de arrastre")
        //console.log("Estoy arrastrando el párrafo " + parrafo.innerText)  
        parrafo.classList.add("dragging")  
        Event.dataTransfer.setData("id", parrafo.id)
    })

    parrafo.addEventListener("dragend", () => {
        //console.log("He terminado de arrastrar")
        parrafo.classList.remove("dragging") 
    })
})

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", Event => {
        Event.preventDefault()
        //console.log("Drag Over")
    })
    seccion.addEventListener("drop", Event => {
        console.log("Drop")
        const id_parrafo = Event.dataTransfer.getData("id")
        //console.log("Parrafo-id: ", id_parrafo)
        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)

    })
})

papelera.addEventListener("dragenter", e => {
    console.log("Drag Enter")
    e.dataTransfer.setData("id", parrafo.id)
})

papelera.addEventListener("dragleave", e => {
    console.log("Drag Leave")
})

papelera.addEventListener("dragover", e => {
    e.preventDefault()
    console.log("Drag Over")
})

papelera.addEventListener("drop", e => {
    console.log("Drop")
    const id_parrafo = e.dataTransfer.getData("id")
    const parrafo = document.getElementById(id_parrafo)
    papelera.appendChild(parrafo)
})

