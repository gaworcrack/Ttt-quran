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
            { items
                .filter((item) => item.namaLatin.toLowerCase().includes(surah.toLowerCase()))
                .map((item) => (
                    <li key={ item.nomor }>
                        <Link
                            to={ `/surah/${item.nomor}` }
                            className={ "block px-6 transition-colors hover:bg-[#f7f7f7]" + ((item.nomor === parseInt(surahId || '1')) ? ' !bg-[rgb(255,249,213)]' : '') }>
                                <span className="block py-3 border-b border-dq-border">
                                    <span className="mr-1">{ item.nomor }.</span>
                                    { item.namaLatin }
                                </span>
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}