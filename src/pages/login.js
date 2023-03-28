import { useState } from "react";
import Link from 'next/link';

export default function Login() {

    const [user_name, SetUsername] = useState("")
    const [email, SetEmail ] = useState("")
    const [password, SetPassword] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({
            username: user_name,
            email: email,
            password: password
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
          
            <h1>login.</h1>
            <form className="form" onSubmit={event => handleSubmit(event)}>
                <label>Username:</label>
                <input type="text" placeholder="Please input your username" value={user_name} onChange={e => SetUsername(e.target.value)}></input>
                <label>Email:</label>
                <input type="text" placeholder="Please input your email" value={email} onChange={e => SetEmail(e.target.value)}></input>
                <label>Password:</label>
                <input type="text"placeholder="Please input your password" value={password} onChange={e => SetPassword(e.target.value)}></input>
                <input type="submit"></input>
                <h1>please register here.</h1>
                <Link href="/registration">Register here</Link>
            </form>
        </div>
    )
}