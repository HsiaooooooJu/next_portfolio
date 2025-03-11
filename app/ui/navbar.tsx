import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
    return (
        <div className="mb-14 flex w-full max-w-5xl items-center justify-between">
            <Link href="/">
                <Image src="/egg.svg" width="60" height="60" alt="egg" />
            </Link>
            <Image src="/moon.svg" width="40" height="40" alt="moon" />
        </div>
    )
}
