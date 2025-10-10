import React, {useRef, useState} from "react";
import {createContext} from "react";

const Context = createContext();

export const ContextProvider = ({children}) => {
    const [submitItem, setSubmitItem] = useState([]);
    const nextId = useRef(1);

    const addItem = (item) => {
        const newItem = { id: nextId.current++, ...item };
        setSubmitItem([...submitItem, newItem]);
    };

    return (
        <Context.Provider value={{submitItem, addItem}}>
            {children}
        </Context.Provider>
    )
}

export default Context;