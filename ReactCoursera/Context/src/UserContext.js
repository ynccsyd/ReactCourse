import {createContext, useState, useContext} from "react";
const UserContext=createContext(undefined);

export const UserProvider=({children})=>{
    const [user]=useState({
        name:"John",
        email:"john@some.com",

    })
    return <UserContext.Provider value={{user}}></UserContext.Provider>
}
export const useUser=() =>useContext(UserContext);