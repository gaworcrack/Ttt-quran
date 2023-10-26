import type { TypeAyah } from '../../types/Ayah'
import '../../fonts/lpmq/style.css'

interface Props {
    items: TypeAyah[]
}

export function Ayahs({ items }: Props) {
    return (
        <ul className="flex flex-wrap gap-6 mt-6">
            { items.map((item, index) => (
                <li key={ index } className="flex w-full pb-6 border-b border-dq-border">
                    <span className="flex w-10 h-10 min-w-[40px] border-2 border-dq-black rounded-full items-center justify-center text-lg font-medium">
                        { item.nomorAyat }
                    </span>
                    <span className="block flex-grow pl-6">
                        <p className="text-3xl lg:text-4xl font-lpmq">
                            { item.teksArab }
                        </p>
                        <p className="mt-6 italic">
                            { item.teksLatin }
                        </p>
                        <p className="mt-5">
                            { item.teksIndonesia }
                        </p>
                    </span>
                </li>
            )) }
        </ul>
    )
}