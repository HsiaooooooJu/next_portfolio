import Image from 'next/image'
import cx from 'clsx'
import { code, gochiHand } from '@/app/ui/fonts'
import { CakeIcon, GithubIcon, MediumIcon } from '@/app/ui/icons'

const list = [
    {
        id: 'Cake',
        title: '',
        icon: <CakeIcon />,
        path: 'https://www.cake.me/hsiaoju-ko',
    },
    {
        id: 'Github',
        title: 'Github',
        icon: <GithubIcon />,
        path: 'https://hsiaooooooju.github.io/',
    },
    {
        id: 'Medium',
        title: '',
        icon: <MediumIcon />,
        path: 'https://medium.com/@kelllllyko'
    }
]

export default function Contact() {
    return (
        <main
            className={cx(
                gochiHand.className,
                'flex flex-col items-center text-lg leading-[1.5] tracking-widest text-white'
            )}
        >
            <Image src='/portrait.png' width='150' height='150' alt='Avatar' className='mb-4 rounded-full glow' />
            <p className="text-3xl">KO HSIAO-JU</p>
            <p className={cx(code.className, 'mb-4 text-lg')}>Frontend Developer</p>
            <div className="flex justify-center gap-6">
                {list.map(item => (
                    <a key={item.id} href={item.path} className='flex' target='_blank'>
                        {item.icon}
                        {item.title && <span className='pl-2'>{item.title}</span>}
                    </a>
                ))}
            </div>
        </main>
    )
}
