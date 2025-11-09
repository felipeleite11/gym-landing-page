import type { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type ButtonProps = ComponentProps<'button'> & {
	variant?: 'default' | 'white'
}

export function Button({ className, variant = 'default', ...props }: ButtonProps) {
	if(variant === 'default') {
		return (
			<button 
				className={twMerge('relative group overflow-hidden bg-transparent border-0 text-white font-semibold text-base py-3 px-8 rounded-full shadow-lg cursor-pointer', className)}
				{...props}
			>
				<span className="absolute inset-0 bg-linear-to-r from-purple-500 to-pink-500 transition-all duration-300 ease-in-out group-hover:from-purple-600 group-hover:to-pink-600"></span>
				<span className="absolute inset-0.5 bg-gray-900 group-hover:bg-black/10 rounded-full transition-colors duration-300 ease-in-out"></span>
				<span className="relative z-10">ENTRAR EM CONTATO</span>
			</button>
		)
	}

	let variantClasses = twMerge(
		'flex justify-center items-center gap-2 px-6 py-2 font-medium cursor-pointer hover:opacity-90 transition-all duration-300 w-fit uppercase relative overflow-hidden',
		'after:content-[""] after:absolute after:top-[-50%] after:left-[-25%] after:w-[150%] after:h-[200%] after:bg-[linear-gradient(45deg,transparent,rgba(255,255,255,0.3),transparent)] after:translate-x-[-100%] after:transition-all after:duration-[0.6s] hover:after:translate-x-[100%]'
	)

	switch(variant) {
		case 'white':
			variantClasses += twMerge(variantClasses, 'bg-white text-gray-800 rounded-md')
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