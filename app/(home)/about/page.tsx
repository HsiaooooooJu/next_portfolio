import { gochiHand } from '@/app/ui/fonts'
import cx from 'clsx'

export default function About() {
	return (

			<main
				className={cx(
					gochiHand.className,
					'text-3xl leading-[1.5] tracking-widest text-white'
				)}
			>
				<p>{'(function repeat() {'}</p>
				<p> &emsp; {'eat();'}</p>
				<p> &emsp; {'sleep();'}</p>
				<p> &emsp; {'code++;'}</p>
				<p> &emsp; {'repeat();'}</p>
				<p>{'})();'}</p>
			</main>

	)
}
