import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
import { useEffect, useRef, useState } from "react";
import { cn } from "../utils/cn";
import { Fade } from "react-awesome-reveal"
import { isMobile } from "react-device-detect";

export function Navbar() {
	const [isOpen, setIsOpen] = useState(false)

	const menuRef = useRef<HTMLDivElement>(null)
	const rippleOpenAnimation = useRef<gsap.core.Timeline>(null)
	const rippleCloseAnimation = useRef<gsap.core.Timeline>(null)

	useGSAP(() => {
		rippleOpenAnimation.current = gsap.timeline({ paused: true })
		rippleCloseAnimation.current = gsap.timeline({ paused: true })

		rippleOpenAnimation.current.to('#ripple', {
			width: isMobile ? '94dvh' : '78dvw',
			height: isMobile ? '94dvh' : '78dvw',
			top: isMobile ? '-40dvh' : '-39dvw',
			right: isMobile ? '-47dvh' : '-39dvw'
		})

		rippleCloseAnimation.current.to('#ripple', {
			width: 0,
			height: 0
		})
	}, { scope: menuRef })

	useEffect(() => {
		if(isOpen) {
      		rippleOpenAnimation.current?.restart()
		} else {
			rippleOpenAnimation.current?.reverse()
		}
	}, [isOpen])
	
	return (
		<div className="flex justify-between items-center w-full pl-8 pr-12 lg:px-12">
			<img src="/logo3.png" className="h-11 hidden lg:block" />
			<img src="/logo2.png" className="h-18 lg:hidden" />
			<img src="/logo2.png" className="h-24 mx-auto mt-12 hidden lg:block" />

			<div ref={menuRef}>
				<div 
					id="menu-icon" 
					className={cn('text-gray-400 cursor-pointer hover:opacity-80 fixed z-20', { open: isOpen })}
					onClick={() => { setIsOpen(old => !old) }}
				>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</div>
				
				<div id="ripple" className="bg-white text-slate-800 rounded-full fixed w-0 h-0 -top-5 -right-5 shadow-md z-10">
					<nav className={cn('fixed top-32 sm:top-40 right-8 sm:right-34 z-20 hidden', { block: isOpen })}>
						<ul className="text-xl text-gray-600 space-y-6 w-56">
							<Fade cascade damping={0.1} delay={200}>
								<li className="hover:text-gray-800 hover:scale-105 transition-all cursor-pointer">
									<a href="/#about" onClick={() => { setIsOpen(false) }}>
										Sobre mim
									</a>
								</li>

								<li className="hover:text-gray-800 hover:scale-105 transition-all cursor-pointer">
									<a href="/#packages" onClick={() => { setIsOpen(false) }}>
										Pacotes
									</a>
								</li>

								<li className="hover:text-gray-800 hover:scale-105 transition-all cursor-pointer">
									<a href="/#contact" onClick={() => { setIsOpen(false) }}>
										Contato
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