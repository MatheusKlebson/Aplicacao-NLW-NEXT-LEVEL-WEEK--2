// Procurar botão
document.querySelector("#add-time")
// Quando clicar no botão
addEventListener('click', cloneField)

//Executar uma ação
function cloneField() {
    //Duplicar os campos. Que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) // Boolean: true ou false
    //Limpar os campos. Que campos?
    const fields = newFieldContainer.querySelectorAll("input")
    //Para cada campo limpar
    fields.forEach(function(field){
        //Field do momento e limpar
        field.value = ""
    })


    //Colocar em qual lugar da página?
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}