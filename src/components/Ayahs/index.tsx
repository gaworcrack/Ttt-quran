import type { TypeAyah } from '../../types/Ayah'

interface Props {
    items: TypeAyah[]
}

export function Ayahs({ items }: Props) {
    return (
        <ul className="mt-6">
            { items.map((item, index) => (
                <li key={ index } className="mb-4">
                    <p className="text-2xl text-dq-text">
                        <span className="text-dq-number">{ item.numberInSurah }.</span>
                        { item.text }
                    </p>
                    <p className="mt-2 text-dq-translation">
                        { item.text }
                    </p>
                </li>
            )) }
        </ul>
    )
}