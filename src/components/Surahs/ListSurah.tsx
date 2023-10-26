import { Link } from 'react-router-dom'
import type { TypeSurah } from '../../types/Surah'

interface Props {
    items: TypeSurah[],
    surah: string,
    surahId?: string
}

export function ListSurah({ items, surah, surahId }: Props) {
    return (
        <ul>
            {
                items
                    .filter((item) => item.englishName.toLowerCase().includes(surah.toLowerCase()))
                    .map((item) => (
                        <li key={ item.number }>
                            <Link
                                to={ `/surah/${item.number}` }
                                className={ "block px-6 transition-colors hover:bg-[#f7f7f7]" + ((item.number === parseInt(surahId || '1')) ? ' !bg-[rgb(255,249,213)]' : '') }>
                                    <span className="block py-3 border-b border-dq-border">
                                        <span className="mr-1">{ item.number }.</span>
                                        { item.englishName }
                                    </span>
                            </Link>
                        </li>
                    ))
            }
        </ul>
    )
}