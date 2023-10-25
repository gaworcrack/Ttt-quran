import { Helmet } from 'react-helmet'

export function Home() {
    return (
        <div>
            <Helmet>
                <title>Home | Digital Quran</title>
            </Helmet>
            <h1 className="text-5xl underline">Home</h1>
        </div>
    )
}