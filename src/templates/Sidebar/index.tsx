import { useState } from 'react'
import { appName } from '../../config'
import { Surahs } from '../../components/Surahs'

export function Sidebar() {
    const [findSurah, setFindSurah] = useState<string>('')

    return (
        <aside className="flex flex-col fixed top-0 bottom-0 left-0 z-30 w-[320px] bg-[#fbfbfb]">
            <header className="p-6 border-b border-gray-200 bg-[#eee]">
                <h1 className="mb-3 text-lg font-medium uppercase">{ appName }</h1>
                <input
                    type="text"
                    className="block w-full h-10 px-3 bg-white border border-gray-200 rounded-md outline-0 focus:border-gray-400"
                    placeholder="Find Surah"
                    value={ findSurah }
                    onChange={ (e) => setFindSurah(e.target.value) }
                    />
            </header>
            <div className="flex-grow overflow-auto">
                <Surahs surah={ findSurah } />
            </div>
        </aside>
    )
}