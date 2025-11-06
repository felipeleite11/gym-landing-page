import { useState, useEffect } from 'react'

const breakpoint = 768

export function useIsMobile() {
	const [isMobile, setIsMobile] = useState<boolean>(
		typeof window !== 'undefined' ? window.innerWidth <= breakpoint : false
	)

	useEffect(() => {
		function handleResize() {
			setIsMobile(window.innerWidth <= breakpoint)
		}

		window.addEventListener('resize', handleResize)
		
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return { isMobile }
}
