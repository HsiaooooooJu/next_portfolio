import Link from 'next/link'
import { gochiHand } from '@/app/ui/fonts'
import Button from './button'
import cx from 'clsx'

export default function SideNav() {
    return (
        <div
            className={cx(
                gochiHand.className,
                'fixed left-1/4 hidden w-1/3 -translate-x-1/2 transform flex-col items-center justify-center text-[1.6rem] text-black md:flex'
            )}
        >
            <div className="-m-1 size-5 rounded-full bg-white"></div>
            <div className="h-72 w-1.5 bg-white"></div>
            <div className="h-5 w-20 rounded-[50%] bg-white"></div>
            <Link href="/about" className="navItem top-12 rotate-2">
                <Button className="h-12 w-48 rounded-lg bg-yellow">
                    About
                </Button>
            </Link>
            <Link href="/project" className="navItem top-32 -rotate-6">
                <Button className="h-12 w-40 rounded-lg bg-pink">
                    Project
                </Button>
            </Link>
            <Link href="/contact" className="navItem top-56 rotate-6">
                <Button className="h-12 w-64 rounded-lg bg-blue">
                    Contact
                </Button>
            </Link>
        </div>
    )
}
