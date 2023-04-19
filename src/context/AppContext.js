import React from 'react';
import { createContext, useContext, useReducer } from 'react';


const AppReducer = (state, action) => {

}

const initialState = {
    savedrecipe: []
}

export const AppContext =  createContext()

export const AppProvider = (props) => {


    const [state, dispatch] = useReducer(AppReducer, initialState)

    return (<AppContext.Provider value={{
        savedrecipe: state.savedrecipe,

        dispatch,
    }}>
        {props.children}
    </AppContext.Provider>)
}