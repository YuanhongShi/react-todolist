import React, {useReducer, useContext} from 'react'
import reducer from './reducer'

const initialState = {
  todos:[]
}

const AppContext = React.createContext()

const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addTodo = (input) => {
    dispatch({type: 'addTodo', payload: {name:input, id: new Date().toString(), done: false}})
  }
  
  return (
    <AppContext.Provider value={{...state, addTodo}}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext=()=> {
  return useContext(AppContext)
}

export {AppContext, AppProvider}
