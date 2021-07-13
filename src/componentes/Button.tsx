import { useState } from "react";

export function Button() {
    const [counter , setCounter] = useState(0)

    function inerement() {
        setCounter(counter +1);
    }

    return (
        <button onClick={inerement}>
        {counter}
        </button>
    )
}