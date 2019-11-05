let lists = document.getElementById("output");
let newInput = document.getElementById("input");

let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []
localStorage.setItem('items', JSON.stringify(itemsArray))
const data = JSON.parse(localStorage.getItem('items'))

const listMaker = text => {
    let newTask = document.createElement("li");
    newTask.textContent = text;

    lists.appendChild(newTask);

    let btn = document.createElement("button");
    btn.innerHTML = "deleate";
    
    newTask.appendChild(btn);
    
    btn.setAttribute("onclick", "remove()")
}

function add(event) {
    event.preventDefault();
    
    itemsArray.push(newInput.value)
    localStorage.setItem('items', JSON.stringify(itemsArray))

    listMaker(newInput.value);

    document.getElementById("input").value = "";
}


data.forEach(item => {
    listMaker(item)
})


function remove(event) {
    let deleateTask = this.event.currentTarget.parentNode;
    lists.removeChild(deleateTask);
    console.log(this.event.currentTarget.parentNode)
    var result = itemsArray.indexOf( deleateTask.textContent);
    console.log(result)

    let newlist = itemsArray.splice(result, 1);
    console.log(newlist);

    localStorage.setItem('items', JSON.stringify(itemsArray))
}


