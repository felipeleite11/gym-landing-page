import type { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type ButtonProps = ComponentProps<'button'> & {
	variant?: 'default' | 'white'
}

export function Button({ className, variant = 'default', ...props }: ButtonProps) {
	let variantClasses = twMerge(
		'px-6 py-2 font-medium cursor-pointer hover:opacity-90 transition-all duration-300 w-fit uppercase relative overflow-hidden',
		'after:content-[""] after:absolute after:top-[-50%] after:left-[-25%] after:w-[150%] after:h-[200%] after:bg-[linear-gradient(45deg,transparent,rgba(255,255,255,0.3),transparent)] after:translate-x-[-100%] after:transition-all after:duration-[0.6s] hover:after:translate-x-[100%]'
	)

	switch(variant) {
		case 'white':
			variantClasses += twMerge(variantClasses, 'bg-white text-gray-800 rounded-md')
			break

		case 'default':
			variantClasses += twMerge(
				variantClasses, 
				'rounded-xl text-white bg-linear-to-r from-blue-900 to-pink-800 shadow-lg shadow-pink-500/20 hover:scale-105',
				'border border-[#5e3268]'
			)
			break
	}

	return (
		<button
			className={twMerge(
				variantClasses,
				className
			)}
			{...props}
		/>
	)
}