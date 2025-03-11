import SideNav from '../ui/sidenav'

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="relative flex w-full min-w-96 max-w-5xl flex-row items-center justify-center md:justify-end">
            <SideNav />
            <div className='min-h-80 md:mr-[5%] lg:mr-[10%]'>
                {children}
            </div>
        </div>
    )
}
