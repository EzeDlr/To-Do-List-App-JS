//text, checked, id cada elemento del array.
const todoItems = [];

//esta funcion CREA UN NUEVO OBJETO cada vez que añado un item.
function addTodo(text) {
    const todo = {
        text,
        checked: false,
        id: Date.now(),
    };

    //meto dentro del array el objeto y logueo los elementos del array con sus propiedades.
    todoItems.push(todo);
    console.log(todoItems)
}

//guarda el form de html dentro de esta var.
const form = document.getElementById("submit-form");
//presiona 'enter' y el evento que ocurre es: la pagina no se refresca, guardas en 'input' el
//texto del usuario, la variable text equivale al input del user sin espacios en blanco, y deja
//el escribir dentro de la caja del input.
form.addEventListener('submit', event => {
    event.preventDefault();
    const input = document.getElementById("input-user");

    const text = input.value.trim();
    if (text !== '') {
        addTodo(text);
        input.value;
        input.focus();
    }
});

//hasta aqui: creas un array donde se guardaran las tareas del user, las tareas del user tienen tres propiedades, texto, checked y id. Los campos 
//de la tarea se empujan hacia el array donde se guardaran todas las demas tareas que se creen. Segundo, al form le añades un evento que sera
//recoger el input del usuario y eliminarle los espacios. (Ademas de prevenir la pagina de refrescarse).