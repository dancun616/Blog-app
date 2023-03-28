import { useState } from "react"

export default function Create() {

    const options = [
        {
            label: 1,
            value: 1
        },
        {
            label: 2,
            value: 2
        },
        {
            label: 3,
            value: 3
        },
        {
            label: 4,
            value: 4
        }
    ];


    const [title, SetTitle] = useState("")
    const [decsription, SetDescription ] = useState("")
    const [status, SetStatus] = useState("")
    const [priority, SetPriority] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
          const response = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({
                titl: title,
                decsription: decsription,
                status: status,
                priority: priority
            }),
          });
    
          const data = await response.json();
    
          console.log(data);
        } catch (error) {
          console.error(error);
        }
      }

    return (
        <div>
        <form className="form" onSubmit={event => handleSubmit(event)}> 
            <label> Title:</label>
            <input type="text" placeholder="Input title" value={title} onChange={e => SetTitle(e.target.value)}></input>
            <label>Description:</label>
            <input type="text" placeholder="Input description" value={decsription} onChange={e => SetDescription(e.target.value)}></input>
            <label>Status:</label>
            <select type="number" placeholder="Input status" value={status} onChange={e => SetStatus(e.target.value)}>
                {options.map((option) => (
                    <option value={option.value}>{option.label}</option>
                ))}
            </select>
            <label>Priority</label>
            <select type="number" placeholder="Input priority" value={priority} onChange={e => SetPriority(e.target.value)}>
                {options.map((option) => (
                    <option value={option.value}>{option.label}</option>
                ))}
            </select>
            <input type="submit"></input>
        </form>
        </div>
    )
}