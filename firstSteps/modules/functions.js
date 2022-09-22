function addTodo () {
    const todo = {
        name:document.getElementById("famale").value,
        done:false,
        id: `${Math.random()}`
    }
    todos.push(todo);
    let lastElement = todo.name;
       document.getElementById("task").value += lastElement; 
    
    render();
}

function addEquipment() {
    const equipment = {
        strength:document.getElementById("strength").value,
        int:document.getElementById("int").value,
        agility:document.getElementById("agility").value,
    }
    if (document.getElementById("sword") === 'true'){
        alert("Hello");
    }
    equipments.push(equipment);
    render();
}

function deleteTodo (id) {
    todos.forEach(todo => {
        if (todo.id === id){
            todo.done = true;
        }
    })
}

/*function Tasks () {
    todos.forEach(todo => {
        
    }) 
}*/
function render() {
    console.log(todos);
    console.log(equipments);
}