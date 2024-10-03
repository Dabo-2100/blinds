import { useContext, useState } from "react"
import ChangeCounter from "../components/ChangeCounter";
import { CounterContext } from "../CounterContext";
import { Link } from "react-router-dom";

export default function ContextPage() {
    const { test2 } = useContext(CounterContext);
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <Link to="/login">Go To Login</Link>
            <h1>Counter is : {test2}</h1>
            <ChangeCounter />
        </div>
    )
}
