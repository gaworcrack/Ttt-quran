import { Outlet } from 'react-router-dom'
import { Sidebar } from '../Sidebar'

export function Wrapper() {
    return (
        <div className="flex h-full pl-[320px]">
            <Sidebar />
            <div className="flex-grow">
                <Outlet />
            </div>
        </div>
    )
}