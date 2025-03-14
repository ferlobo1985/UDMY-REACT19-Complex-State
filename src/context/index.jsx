import { createContext } from "react";

const MyContext = createContext();

const MyProvider = ({ children }) =>{
    const values = [1,2,3,4];

    return(
        <MyContext.Provider
            value={{
                values:values
            }}
        >
            {children}
        </MyContext.Provider>
    )
}

export { MyContext, MyProvider }