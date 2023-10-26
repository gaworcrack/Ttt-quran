export function Skeleton() {
    return (
        <ul>
            { Array.from({ length: 8 }).map((_, index) => (
                <li key={ index }>
                    <span className="block px-6">
                        <span className="block relative py-3 border-b border-dq-border">
                            <span className="block bg-[#eee] rounded-lg">&nbsp;</span>
                        </span>
                    </span>
                </li>
            )) }
        </ul>
    )
}