import {
    useState,
    useEffect,
} from 'react'

import {
    Link,
    useParams
} from 'react-router-dom'

import axios from 'axios'

import {
    APIUrl
} from '../../config'

import type { TypeSurah } from '../../types/Surah'

const initialSurahs: TypeSurah[] = JSON.parse(
    localStorage.getItem('digital_quran_surahs') || '[]'
)

interface Props {
    surah: string
}

export function Surahs({ surah }: Props) {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [surahs, setSurahs] = useState<TypeSurah[]>(initialSurahs)

    const { surahId } = useParams()

    useEffect(() => {
        if (surahs.length) {
            setIsLoading(false)
            return
        }

        axios.get(`${APIUrl}/surah`)
            .then(({ data }) => {
                if ( data.code === 200 ) {
                    localStorage.setItem('digital_quran_surahs', JSON.stringify(data.data))
                    setSurahs(data.data)
                }

                setIsLoading(false)
            })
    }, [])

    return isLoading ? null : (
        <ul>
            {
                surahs
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