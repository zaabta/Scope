import { createContext, useState } from 'react';

const initialState = {
    darkMode: false,
  };

const Context = createContext();

const ContextWrapper = ({children}) => {
    const [state, setState] = useState(initialState);
    const toggleDarkMode = ()=>  {
        setState((prev) => ({
            ...prev,
            darkMode: !prev.darkMode
        }))
    }
    return <Context.Provider value={{ ...state, toggleDarkMode }}>
        {children}
    </Context.Provider>
}

export {
    Context,
    ContextWrapper
}

