import {
    createContext,
    useContext,
    useReducer,
} from 'react'

import { reducer } from './reducer'

export type AppState = {}

export const initialState: AppState = {}

export const AppContext = createContext(initialState)

export function useApp() {
    return useContext(AppContext)
}

export function AppProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <AppContext.Provider value={{ ...state, dispatch }}>
            { children }
        </AppContext.Provider>
    )
}