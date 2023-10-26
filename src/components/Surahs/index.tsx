import {
    useState,
    useEffect,
} from 'react'

import { useParams } from 'react-router-dom'
import axios from 'axios'
import { APIUrl } from '../../config'
import type { TypeSurah } from '../../types/Surah'
import { ListSurah } from './ListSurah'
import { Skeleton } from './Skeleton'

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

    return isLoading ? <Skeleton /> : <ListSurah items={ surahs } surah={ surah } surahId={ surahId } />
}