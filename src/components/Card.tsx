import type { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type CardProps = ComponentProps<'div'> & {
	variant?: 'default' | 'glass'
}

export function Card({ className, variant = 'default', ...props }: CardProps) {
	let variantClasses = twMerge('flex flex-col items-center gap-2 rounded-3xl shadow-sm border border-[#36333b] p-8 h-fit')

	switch(variant) {
		case 'default': 
			variantClasses += twMerge(variantClasses, 'bg-[linear-gradient(to_bottom_right,#1f1035,#130a22,#0d0624)]')
			break

		case 'glass':
			variantClasses += twMerge(variantClasses, 'bg-gray-600/10 backdrop-blur-sm')
			break
	}

	return (
		<div 
			className={twMerge(variantClasses, className)}
			{...props}
		/>
	)
}
