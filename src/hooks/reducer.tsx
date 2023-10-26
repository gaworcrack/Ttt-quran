export function reducer(state: any, action: any) {
    switch (action.type) {
        case 'TOGGLE_MENU':
            return {
                ...state,
                isMenuOpen: action.payload,
            }
        default:
            return state
    }
}