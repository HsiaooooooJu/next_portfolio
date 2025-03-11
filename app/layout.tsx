import { poppins } from '@/app/ui/fonts'
import './ui/globals.css'
import cx from 'clsx'
import Navbar from './ui/navbar'

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="zh-tw">
            <body className={cx(poppins.className, 'antialiased')}>
                <main className="mx-4 mt-6 flex min-w-80 flex-col items-center justify-center md:m-8">
                    <Navbar />
                    {children}
                </main>
            </body>
        </html>
    )
}
