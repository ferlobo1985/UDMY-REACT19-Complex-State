import { createContext, useReducer } from "react";
import axios from 'axios'

const MyContext = createContext();

const initialState = {
    loading:false,
    users:[]
}

const reducer = (state,action) => {
    switch(action.type){
        case "GET_USERS":
            return {...state, users:action.payload.users}
        case "HANDLE_LOADING":
            return {...state,loading:!state.loading }
        default:
            return state;
    }
}

const MyProvider = ({ children }) =>{
    const [users,dispatch] = useReducer(reducer,initialState);
    

    const getUsers = async() => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
        dispatch({
            type:"GET_USERS",
            payload:{
                users:res.data
            }
        })
    }

    return(
        <MyContext.Provider
            value={{    
                getUsers:getUsers,
                handleLoading: ()=> dispatch({type:"HANDLE_LOADING"}),
                users
            }}
        >
            {children}
        </MyContext.Provider>
    )
}

export { MyContext, MyProvider }