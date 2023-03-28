import { useState, useEffect } from "react";
import Link from "next/link";

export default function Dash() {

    const [todos, setTodos] = useState([]);

    async function handleDelete(id) {
        try {
          const res = await fetch(`/api/posts/${id}`, {
            method: 'DELETE',
          });
          if (res.status === 200) {
            // handle successful response
          } else {
            // handle error response
          }
        } catch (error) {
          // handle network error
        }
      }  
    

    useEffect(() => {
      async function fetchData() {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const results = await response.json();
        setTodos(results);
      }
  
      fetchData();
    }, []);
  
    if (!todos) {
      return <div>Loading...</div>;
    }


    return (
        <div>
          <nav>
            <Link href="/create">Create a todo</Link>
          </nav>
            {todos.map((todo) => 
            <div key={todo.id}>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <h2>{todo.status}</h2>
                <h3>{todo.priority}</h3>
                <button onClick={() => handleDelete(todo.id)}>Delete Todo</button>
                <Link href="/update">Update Todo</Link>
            </div>
            )}
            
        </div>
    )
}