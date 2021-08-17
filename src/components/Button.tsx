/*type ButtonProps = {
    children?: string; //o interrogação é para definir o atributo como opcional, eu posso setar ele ou não
}*/

import { useState } from "react";

export function Button() {
    //let counter = 0;

    const [counter, setCounter] = useState(0)

    function increment() {
        setCounter(counter + 1);
    }

    return (
        <button onClick={increment}>
            {counter}
        </button>
    )
}

//named export

