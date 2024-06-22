import { useState } from "react"


const RendCond = () => {




    let [name, setName] = useState('pedro')


    const [x] = useState(true)

    return (<>
        <h1>Isso será exibido?</h1>
        {x && <p>se x for true, sim!</p>}
        {!x && <p>Agora x é falso</p>}


        <h1>if ternário</h1>

        <div>
            {name === 'joão' ? (
                <div><p>O nome é joão</p></div>
            ) : (<div><p>O nome não é joão</p></div>)}



            <button onClick={() => setName('joão')} >Mudar nome</button>
        </div>
    </>)


}

export default RendCond