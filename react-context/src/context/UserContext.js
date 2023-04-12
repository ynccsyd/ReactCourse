import {Children, createContext} from 'react'

const UserContext = createContext();

export const UserProvider= (children) => {
const values={
    id:1,
    userName:"name",
    bio:"lorem ipsum dolar"
}

  return <UserContext.Provider value={values}>{Children}</UserContext.Provider>
}

export default UserContext;