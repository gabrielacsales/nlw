// Procurar o botao
document.querySelector("#add-time")
// Quando clicar no botão
.addEventListener('click', cloneField)// coloquei aspas duplas no click


function cloneField() {
    
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)// Duplicar os campos
    
    // limpar os campos
        //pegar os campos
    const fields = newFieldContainer.querySelectorAll('input')

    fields.forEach(function(field) {// para cada campo, limpar
      field.value = ""//para pegar o field do momento e limpe-o
    })

    // Colocar na página
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
    
// outro jeito de clonar :
// fields [0]
// fields [1]