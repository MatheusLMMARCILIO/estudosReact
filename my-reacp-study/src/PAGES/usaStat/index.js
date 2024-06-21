import React, { useState } from "react";

const useStat = () => {

    const [num, setNum] = useState(15)


function minus() {
    setNum(num - 1)
}

function plus() {
    setNum(num + 1)
}



    return (<>

        <div>
            <p>valor:{num}</p>
            <button onClick={() => setNum(20)}>Mudar valor</button>
        </div>

<div>
    <p>Aumentar ou diminuir</p>

<button onClick={minus} >menos</button>
<button onClick={plus} >mais</button>


</div>

    </>)
}

export default useStat