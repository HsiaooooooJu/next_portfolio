import SideNav from './ui/sidenav'
import Main from './ui/main'

export default function Home() {
    return (
        <div className="relative flex w-full min-w-96 max-w-5xl max-h-80 flex-row items-center justify-center md:justify-end">
            <SideNav />
            <Main />
        </div>
    )
}
