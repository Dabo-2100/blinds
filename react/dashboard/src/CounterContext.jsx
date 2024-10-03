import { createContext, useState } from "react";

const CounterContext = createContext();

const CounterProvider = ({ children }) => {
    const [test1] = useState(1);
    const [test2, setTest2] = useState(100);
    const [test3] = useState(1);
    return (
        <CounterContext.Provider value={{
            test2, setTest2
        }}>
            {children}
        </CounterContext.Provider>
    );
};

export { CounterContext, CounterProvider };