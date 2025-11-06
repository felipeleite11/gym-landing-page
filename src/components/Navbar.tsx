import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
import { useEffect, useRef, useState } from "react";
import { cn } from "../utils/cn";
import { Fade } from "react-awesome-reveal"
import { useIsMobile } from "../hooks/useIsMobile"

export function Navbar() {
	const [isOpen, setIsOpen] = useState(false)

	const { isMobile } = useIsMobile()

	const menuRef = useRef<HTMLDivElement>(null)
	const rippleOpenAnimation = useRef<gsap.core.Timeline>(null)
	const triggerOpenAnimation = useRef<gsap.core.Timeline>(null)

	useGSAP(() => {
		rippleOpenAnimation.current = gsap.timeline({ paused: true })
		triggerOpenAnimation.current = gsap.timeline({ paused: true })

		rippleOpenAnimation.current.to('#ripple', {
			width: isMobile ? '114vh' : '110vw',
			height: isMobile ? '114vh' : '110vw',
			top: isMobile ? '-40dvh' : '-39dvw',
			right: isMobile ? '-47dvh' : '-39dvw'
		})

		triggerOpenAnimation.current.fromTo('#menu-icon', {
			right: '6vw'
		}, {
			position: 'fixed',
			right: isMobile ? '1vw' : '2vw',
			duration: .1
		})
	}, { 
		scope: menuRef, 
		dependencies: [isMobile]
	})

	useEffect(() => {
		if(isOpen) {
      		rippleOpenAnimation.current?.restart()
      		triggerOpenAnimation.current?.restart()
		} else {
			rippleOpenAnimation.current?.reverse()
			triggerOpenAnimation.current?.reverse()
		}
	}, [isOpen])
	
	return (
		<div className="flex justify-between items-center w-full min-h-36 pl-8 pr-12 lg:px-12 relative">
			<img src="/logo3.png" className="h-11 hidden lg:block" />
			<img src="/logo5.png" className="h-18 lg:hidden" />
			<img src="/logo5.png" className="h-24 mx-auto mt-12 hidden lg:block" />

			<div ref={menuRef} className="absolute top-0 right-0 z-10">
				<div 
					id="menu-icon" 
					className={cn('text-gray-400 cursor-pointer hover:opacity-80 absolute z-20', { 'open': isOpen })}
					onClick={() => { setIsOpen(old => !old) }}
				>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</div>
				
				<div id="ripple" className="bg-white text-slate-800 rounded-full fixed w-0 h-0 -top-5 -right-5 shadow-md z-10">
					<nav className={cn('fixed top-32 md:top-32 right-8 md:right-24 z-20 hidden flex-col gap-14 items-center', { flex: isOpen })}>
						<Fade cascade damping={0.1} delay={200}>
							<img src="/logo6.png" alt="logo" className="h-24 md:h-32" />
						</Fade>

						<ul className="text-base md:text-lg lg:text-xl text-gray-600 space-y-6 w-32 text-right">
							<Fade cascade damping={0.1} delay={200}>
								<li className="hover:text-gray-800 hover:scale-105 transition-all cursor-pointer outline-0">
									<a href="/#about" onClick={() => { setIsOpen(false) }}>
										Sobre mim
									</a>
								</li>

								<li className="hover:text-gray-800 hover:scale-105 transition-all cursor-pointer outline-0">
									<a href="/#packages" onClick={() => { setIsOpen(false) }}>
										Pacotes
									</a>
								</li>

								<li className="hover:text-gray-800 hover:scale-105 transition-all cursor-pointer outline-0">
									<a href="/#contact" onClick={() => { setIsOpen(false) }}>
										Contato
									</a>
								</li>

								<li className="hover:text-gray-800 hover:scale-105 transition-all cursor-pointer outline-0">
									<a href="#" onClick={() => { setIsOpen(false) }}>
										Loja
									</a>
								</li>
							</Fade>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	)
}