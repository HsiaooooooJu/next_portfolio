import { Poppins, Gochi_Hand } from 'next/font/google'

export const poppins = Poppins({
	subsets: ['latin'],
	weight: ['200', '300', '400', '500', '700'],
	style: ['normal', 'italic'],
})

export const gochiHand = Gochi_Hand({
	subsets: ['latin'],
	weight: ['400']
})
