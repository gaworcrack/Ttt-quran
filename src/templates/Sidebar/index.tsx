import { useState } from 'react'
import { useApp } from '../../hooks/provider'
import { appName } from '../../config'
import { Surahs } from '../../components/Surahs'

export function Sidebar() {
    const { isMenuOpen, setMenuOpen } = useApp()
    const [findSurah, setFindSurah] = useState<string>('')

    return (
        <aside className="flex flex-col fixed top-0 bottom-0 -left-[320px] lg:left-0 z-30 w-[320px] bg-[#fbfbfb] shadow-md lg:shadow-none transition-[left] duration-0" style={{
            left: isMenuOpen ? '0' : '-320px',
        }}>
            <header className="relative p-6 border-b border-gray-200 bg-[#eee]">
                <h1 className="mb-3 text-lg font-medium uppercase">{ appName }</h1>
                <input
                    type="text"
                    className="block w-full h-10 px-3 bg-white border border-gray-200 rounded-md outline-0 focus:border-gray-400"
                    placeholder="Find Surah"
                    value={ findSurah }
                    onChange={ (e) => setFindSurah(e.target.value) }
                />
                <button className="absolute right-4 top-4 lg:hidden" onClick={ () => setMenuOpen(false) }>
                    <span className="material-symbols-outlined">close</span>
                </button>
            </header>
            <div className="flex-grow overflow-auto">
                <Surahs surah={ findSurah } />
            </div>
        </aside>
    )
}