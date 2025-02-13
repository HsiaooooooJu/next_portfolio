import { gochiHand } from '@/app/ui/fonts';
import cz from 'clsx';

export default function SideNav() {
	return (
		<div className={cz(gochiHand.className, "relative flex-center flex-col w-1/3 text-black text-3xl")}>
			<div className="-m-1 size-5 rounded-full bg-white"></div>
			<div className="w-1.5 h-72 bg-white"></div>
			<div className="w-20 h-5 rounded-[50%] bg-white"></div>
			<div className="navItem top-12 w-48 h-12 bg-yellow rotate-2">About</div>
			<div className="navItem top-32 w-40 h-12 bg-pink -rotate-6 translate-x-2">Project</div>
			<div className="navItem top-56 w-64 h-12 bg-blue rotate-6">Contact</div>
		</div>
	)
}