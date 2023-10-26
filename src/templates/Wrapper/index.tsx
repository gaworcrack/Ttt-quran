import { Outlet } from 'react-router-dom'
import { useApp } from '../../hooks/provider'
import { Sidebar } from '../Sidebar'

export function Wrapper() {
    const { setMenuOpen } = useApp()
    return (
        <div className="flex h-full lg:pl-[320px]">
            <Sidebar />
            <div className="flex-grow">
                <div className="pt-6 px-4 md:px-8 lg:px-10 lg:hidden">
                    <button onClick={ () => setMenuOpen(true) }>
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                </div>
                <Outlet />
            </div>
        </div>
    )
}