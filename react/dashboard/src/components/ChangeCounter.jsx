import { useContext } from "react"
import { CounterContext } from "../CounterContext"


export default function() {
    const {test2,setTest2} = useContext(CounterContext);
    return (
        <div>
            <h1>Test 2 is : {test2}</h1>
            <button onClick={() => setTest2(test2 + 1)}>+</button>
            <button onClick={() => setTest2(test2 - 1)}>-</button>
        </div>
    )
}
