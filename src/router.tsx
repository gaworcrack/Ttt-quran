import { createBrowserRouter } from 'react-router-dom'
import { Wrapper } from './templates/Wrapper'

import { Surah } from './pages/Surah'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Wrapper />,
        children: [
            {
                path: '/',
                element: <Surah />,
            },
            {
                path: '/surah/:surahId',
                element: <Surah />,
            }
        ],
    },
])