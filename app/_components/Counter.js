"use client"

import { useState } from "react"


export default function Counter({ users }) {
    
    const [count, setCount] = useState(true)
    function handlesub() {
        setCount((count)=>!count)
    }
    console.log(users)
    return (
        <>
            <button onClick={handlesub}>&times;</button>
           {count && ( <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.username}
                    </li>
                ))}
            </ul>)}
      </>
    
  )
}
