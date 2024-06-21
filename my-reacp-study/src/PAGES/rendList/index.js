import React from "react";
import { useState } from "react";



const ListRender = () => {

    const [list] = useState(['matheus', 'pedro', 'josias', 'Maria'])

    const [user] = useState([
        { id: 1, name: 'matheus', age: 31 },
        { id: 654, name: 'joão', age: 28 },
        { id: 321, name: 'pedro', age: 48 },
    ])

    const [fruit] = useState(['morango', 'uva', 'banana'])

    const [people] = useState([
        { id: 159, name: 'Diego', age: 18 },
        { id: 12, name: "pedro", age: 32 },
        { id: 45, name: "marcelo", age: 25 }

    ])

    const {aluno} = useState([
        {name:'pedro', age:20}
    ])

    return (
        <>
            <div>
                <ul>
                    {list.map((item, i) => (
                        <li key={i} >{item}</li>
                    ))}
                </ul>
            </div>

            <div>
                <ul>
                    {user.map((user) => (
                        <li key={user.id} >{user.name} - {user.age}</li>
                    ))}
                </ul>
            </div>

            <div>
                <ul>
                    {fruit.map((fruit, i) => (
                        <li key={i}>{fruit}</li>
                    ))}
                </ul>
            </div>

            <div>
                <ul>
                    {people.map((people) => (
                        <li key={people.id}>{people.name}</li>
                    ))}
                </ul>
            </div>

<div>
<p></p>
</div>

        </>
    )
}

export default ListRender