import React,{useState} from 'react'
import './todo.scss'

const Todo = () => {
   
    const [todos,setTodos] = useState([])

    const [newTodo,setNewTodo] = useState('')



    const handleAdd =(e)=>{
        e.preventDefault()
        if(!newTodo) return;
        setTodos([...todos, { text: newTodo, id: Date.now(), completed: false }])
        setNewTodo('')
    }

    const handleDeleteTodo = (id) =>{
        setTodos(todos.filter(item=> item.id !== id))
    }

    const handleEditTodo = (id,newText) =>{
       setTodos(
        todos.map(todo=>{
            if(todo.id === id){
                 return {...todo, text:  newText}
            }

            return todo;
        })
       );
         
    }

    function handleToggleComplete(id) {
        setTodos(
          todos.map(todo => {
            if (todo.id === id) {
              return { ...todo, completed: !todo.completed };
            }
            return todo;
          })
        );
      }

  return (
    <div>

        <form action="" onSubmit={handleAdd}>
            <input value={newTodo} onChange={(e)=>setNewTodo(e.target.value)} type="text" placeholder='Enter todo'/>
            <button type='submit'>Add</button>
        </form>
        {
            todos.map((t)=>(
                <li key={t.id} className={t.completed ? 'todo-completed' : 'todo-incompleted'}>
            <span>
              {t.text}
            </span>
             
             <button onClick={()=>handleEditTodo(t.id, prompt('Edit Todo:', t.text))}>Edit</button>
             <button onClick={()=>handleDeleteTodo(t.id)}>Delete</button>
             <button onClick={() => handleToggleComplete(t.id)}>
              {t.completed ? 'Mark Incomplete' : 'Mark Complete'}
            </button>
          </li>
            ))
        }
        
    </div>
  )
}

export default Todo