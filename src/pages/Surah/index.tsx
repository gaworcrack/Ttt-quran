import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { APIUrl } from '../../config'
import type { TypeSurah } from '../../types/Surah'

export function Surah() {
    const { surahId } = useParams()

    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [surah, setSurah] = useState<TypeSurah | null>(null)

    useEffect(() => {
        axios.get(`${APIUrl}/surah/${surahId || '1'}/id.indonesian`)
            .then(({ data }) => {
                if ( data.code === 200 ) {
                    setSurah(data.data)
                }

                setIsLoading(false)
            })
    }, [surahId])

    return isLoading ? null : (
        <div className="py-6 px-10">
            <Helmet>
                <title>{ `${surah?.englishName || 'Loading...'}` } | Digital Quran</title>
            </Helmet>
            <p className="mb-8 p-4 bg-[rgb(255,249,213)] rounded-lg">
                API Source: <a href="https://api.alquran.cloud" className="underline font-semibold">https://api.alquran.cloud</a>. Fork me on <a href="https://github.com/fachririyanto/digital-quran" className="underline font-semibold">Github</a>.
            </p>
            <header className="pb-6 border-b border-dq-border">
                <h1 className="text-4xl font-medium">
                    <span className="mr-2">{ surah?.number }.</span>
                    { surah?.englishName }
                </h1>
                <p className="mt-2">
                    { surah?.englishNameTranslation }, { surah?.numberOfAyahs } Ayah, { surah?.revelationType }
                </p>
            </header>
        </div>
    )
}