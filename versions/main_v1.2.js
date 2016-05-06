(function(){
    var tareaInput = document.getElementById('tareaInput'),
        btn = document.getElementById('btn'); 
        lista = {
            tarea: document.getElementById('tareaInput'),
            }

    var agregarTarea = function(){
        var tarea = tareaInput.value,
            nuevaTarea= document.createElement('li') 
            checkbox= document.createElement ('input') /*como agregar el checkbox*/
            contenido = document.createTextNode(tarea);

            if (tarea === "") {
                tareaInput.setAttribute("placeholder", "Agrega una tarea");
                tareaInput.className = "error";
                return false;
            }

            //agregar contenido a checkbox
            checkbox.appendChild(contenido);
            checkbox.setAttribute("type", "checkbox"); //atributo del checkbox
            nuevaTarea.appendChild(checkbox);
            
            tareaInput.value = "";

       // Borrando Elementos de la lista por medio del checkbox
        for (var i = 0; i <= lista.children.length -1; i++) {
        lista.children[i].addEventListener("click", function(){
            this.parentNode.removeChild(this);
        });
    }//for

}; 
    var comprobarInput = function(){
        tareaInput.className = "";
        tareaInput.setAttribute("placeholder", "Agrega una tarea");
    };   
        
    var eliminarTarea = function () {
        this.parentNode.removeChild(this);
    };

         //agrega tarea con un click
        btnagregar.addEventListener("click", agregarTarea); 
        
        //comprobar que haya texto en el input de agregar tarea
        tareaInput.addEventListener("click", comprobarInput);

    for (var i = 0; i <= lista.children.length -1; i++) {
        lista.children[i].addEventListener("click", eleminarTarea);
    }
        
})(); 