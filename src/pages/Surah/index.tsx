import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { APIUrl, appName } from '../../config'
import type { TypeSurah } from '../../types/Surah'
import { Skeleton } from './Skeleton'
import { Ayahs } from '../../components/Ayahs'

export function Surah() {
    const { surahId } = useParams()

    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [surah, setSurah] = useState<TypeSurah | null>(null)

    useEffect(() => {
        setIsLoading(true)

        axios.get(`${APIUrl}/surat/${surahId || '1'}`)
            .then(({ data }) => {
                if ( data.code === 200 ) {
                    setSurah(data.data)
                }

                setIsLoading(false)
            })
    }, [surahId])

    return (
        <div className="py-6 px-4 md:px-8 lg:px-10">
            <Helmet>
                {
                    isLoading ?
                        <title>{ `Loading` } | { `${appName}` }</title> :
                        <title>{ `${surah?.namaLatin}` } | { `${appName}` }</title>
                }
            </Helmet>

            <p className="mb-8 p-4 bg-[rgb(255,249,213)] rounded-lg">
                Tofik: <a href="https://equran.id/" className="underline font-semibold">https://tofikkk.com/</a>" className="underline font-semibold">Github</a>.
            </p>

            { isLoading ? <Skeleton /> : (
                <>
                    <header className="pb-6 border-b border-dq-border">
                        <h1 className="text-3xl lg:text-4xl font-medium">
                            <span className="mr-2">{ surah?.nomor }.</span>
                            { surah?.namaLatin }
                        </h1>
                        <p className="mt-2">
                            { surah?.namaLatin }, { surah?.jumlahAyat } Ayah, { surah?.tempatTurun }
                        </p>
                    </header>

                    <Ayahs items={ surah?.ayat || [] } />
                </>
            ) }
        </div>
    )
}