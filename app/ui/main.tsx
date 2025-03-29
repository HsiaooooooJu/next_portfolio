import { poppins, gochiHand, code } from '@/app/ui/fonts'
import cx from 'clsx'

export default function Main() {
    return (
        <div
            className={cx(
                code.className,
                'scale-[90%] md:scale-[100%] min-w-md relative md:mr-[5%] lg:mr-[10%] text-6xl font-bold leading-[5rem]'
            )}
        >
            <p className={poppins.className}>IF &nbsp; NOT</p>
            <div className="absolute right-2 top-2 h-16 w-16 pr-2 pt-2 rounded-tr-full bg-blue code_pack">
                if
            </div>
            <div className="absolute left-0 top-16 translate-y-1/2 h-14 w-5/12 rounded-lg bg-orange-400 code_pack">
                {'(!calm) {'}
            </div>
            <p className={cx('text-right', poppins.className)}>CALM</p>
            <p className={cx('px-10 py-4 border border-pink rounded-full text-5xl', poppins.className)}>KEEP CALM</p>
            <div className="h-10 w-10 translate-y-10 rounded-full bg-yellow code_pack">
                {'}'}
            </div>
            <p className={cx('translate-y-4', poppins.className)}>&emsp; ; ELSE</p>
            <div className="absolute right-6 bottom-8 translate-x-12 h-14 w-28 rotate-90 rounded-full bg-pink code_pack">
                {'else {'}
            </div>
            <div className="right-[12px] h-10 w-10 translate-y-14 rounded-full bg-yellow code_pack">
                {'}'}
            </div>
            <p className={cx('relative translate-y-10 tracking-[0.1em] border-b-4 border-blue border-double text-5xl -z-10', gochiHand.className)}>CODE ON;</p>
        </div>
    )
}
