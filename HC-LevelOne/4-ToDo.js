const listContainer = document.querySelector('[dataList]')
// const cria uma variável cujo o valor é fixo (não pode ser alterado ou redeclarada)
// document.querySelector retorna o primeiro elemento dentro do documento que corresponde
// ao grupo especificado de seletores
const listForm = document.querySelector("[formList")     // e o form
const listInput = document.querySelector("[inputList]")  // captura o input 

let arrayList = []

// código para o botão

listForm.addEventListener('submit', function (e){   // funções a serem chamadas quando um evento acontece
                                                    // "submit" ocorre quando um form é submetido
    e.preventDefault ()                             // previne que a página atualize a cada submissão               
    const inputItem = listInput.value               // guarda o valor no input
    if ((inputItem === null) || (inputItem === '')) return

    const item = createList (inputItem)
    listInput.value = null

    arrayList.push(item)     // .push coloca o item no final do array

    showItem ()
}) 

function createList (text){
    return {
        id: Date.now().toString(),  // return ms atual
        name: text                  // name é um parametro
    }
}

function showItem (){
    clearElement(listContainer)
    arrayList.forEach(function(item){                   // forEach() executa a função em cada elemento do array
        const newItem = document.createElement('li')    // createElement() cria o elemento HTML especificado
        newItem.classList.add('item')                   // adiciona itens
        newItem.innerText = item.name                   // recebe "item" como texto
        listContainer.appendChild (newItem)             // adiciona os itens no listContainer        
    }) 
}

function clearElement (element){
    while (element.firstChild){
        element.removeChild(element.firstChild)
    }
}

showItem ()