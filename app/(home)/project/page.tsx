const list = [
    {
        id: 'parkit',
        title: 'Parkit',
        subtitle: 'React/JS',
        path: 'https://hsiaooooooju.github.io/parkit/#/home',
    },
    {
        id: 'hangman',
        title: 'Hangman',
        subtitle: 'React/TS',
        path: 'https://hsiaooooooju.github.io/react-hangman/',
    },
    {
        id: 'friends_list',
        title: 'Friends List',
        subtitle: 'HTML/CSS/JS',
        path: 'https://hsiaooooooju.github.io/Friend-List/index.html',
    },
]

export default function Project() {
    return (
        <ul className="flex flex-col gap-6">
            {list.map((item) => (
                <li
                    key={item.id}
                    className="hover:tracking-[0.2em] hover:opacity-50 cursor-pointer"
                >
                    <a href={item.path} target='_blank'>
                        <p className="mb-1 text-5xl font-medium text-right">{item.title}</p>
                        <p className="text-lg text-right">{item.subtitle}</p>
                    </a>
                </li>
            ))}
        </ul>
    )
}
