import { createSlice } from '@reduxjs/toolkit';

interface LayoutState {
    isSidebarOpen: boolean,
}

const initialState: LayoutState = {
    isSidebarOpen: false,
};

const layoutSlice = createSlice( {
    name: 'layout',
    initialState,
    reducers: {
        openSidebar: ( state ) => {
            state.isSidebarOpen = true;
        },
        closeSidebar: ( state ) => {
            state.isSidebarOpen = false;
        },
    },
} );

export const { openSidebar, closeSidebar } = layoutSlice.actions;
export default layoutSlice.reducer;