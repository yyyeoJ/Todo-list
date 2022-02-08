const body = document.querySelector('body')

const darkMode = document.querySelector(".dark")
darkMode.addEventListener("click",()=>{
   body.classList.add("darkmode")
})

const lightMode = document.querySelector(".light")
lightMode.addEventListener("click",()=>{
   body.classList.remove("darkmode")
})




const currentDate = Date().split(" ").slice(0,4).join(" ");
document.querySelector(".date").innerHTML = currentDate;

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-btn");
const todos = document.querySelector(".todos")

todoButton.addEventListener("click",()=>{
    const todo = document.createElement("li")
    todo.classList.add("todo")

    const todoDiv = document.createElement("div")
    todoDiv.classList.add("todo-div")
    todoDiv.innerHTML = todoInput.value;
    todoInput.value = "";

    const completeButton = document.createElement("button")
    completeButton.innerHTML= '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1zm4.768 9.14a1 1 0 1 0-1.536-1.28l-4.3 5.159l-2.225-2.226a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.475-.067l5-6z" fill="currentColor"/></g></svg>'
    completeButton.classList.add("complete-todo")

    const deleteButton = document.createElement("button")
    deleteButton.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><g fill="currentColor"><path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/></g></svg>'
    deleteButton.classList.add("delete-todo")

    todo.appendChild(todoDiv)
    todo.appendChild(completeButton)
    todo.appendChild(deleteButton)
    todos.appendChild(todo)

    todo.addEventListener("click",(e)=>{
        if(e.target.classList.contains("delete-todo")){
            e.target.parentElement.classList.remove("show");
            e.target.parentElement.classList.add("delete");
            e.target.parentElement.addEventListener("animationend",()=>{
                e.target.parentElement.remove();
            })
            
        }
        else if(e.target.classList.contains("complete-todo")){
            e.target.parentElement.classList.add("complete")
        }
        
    })
})
const todoFilter = document.querySelector(".todo-filter")
todoFilter.addEventListener('click',(e)=>{
    switch(e.target.value){
        case "All":
            todos.childNodes.forEach((todo)=>{
                if(todo.classList != undefined){ todo.classList.remove("hide")}
            })
            break;


        case "Completed":
            todos.childNodes.forEach((todo)=>{
                if(todo.classList!= undefined){
                    if(todo.classList.contains("complete")){
                        todo.classList.remove("hide")
                    }else{
                        todo.classList.add("hide")
                    }
                }   
            })
            break;

        case "Due":
            todos.childNodes.forEach((todo)=>{
                if(todo.classList!= undefined){
                    if(todo.classList.contains("complete")){
                        todo.classList.add("hide")
                    }else{
                        todo.classList.remove("hide")
                    }
                }   
            })
            break;
    }

})


