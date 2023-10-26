import {
    createContext,
    useContext,
    useReducer,
    useEffect,
} from 'react'

import { reducer } from './reducer'

export type AppState = {
    isMenuOpen?: boolean,
    setMenuOpen: (payload: boolean) => void,
}

export const initialState: AppState = {
    isMenuOpen: window.innerWidth < 1024 ? false : true,
    setMenuOpen: () => {},
}

export const AppContext = createContext(initialState)

export function useApp() {
    return useContext(AppContext)
}

export function AppProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        window.addEventListener('resize', () => {
            if ( window.innerWidth < 1024 ) {
                dispatch({
                    type: 'TOGGLE_MENU',
                    payload: false,
                })
            } else {
                dispatch({
                    type: 'TOGGLE_MENU',
                    payload: true,
                })
            }
        })

        return () => {
            window.removeEventListener('resize', () => {})
        }
    }, [])

    const setMenuOpen = (payload: boolean) => {
        dispatch({
            type: 'TOGGLE_MENU',
            payload,
        })
    }

    return (
        <AppContext.Provider value={{ ...state, setMenuOpen, dispatch }}>
            { children }
        </AppContext.Provider>
    )
}