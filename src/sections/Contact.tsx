import { Fade } from "react-awesome-reveal"
import { WhatsappLogoIcon, TelegramLogoIcon } from "@phosphor-icons/react"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { Button } from "../components/Button"
import { Card } from "../components/Card"
import { useRef } from "react"

const whatsAppLink = `https://wa.me/55${import.meta.env.VITE_WHATSAPP_NUMBER}?text=Ol%C3%A1%2C%20acessei%20seu%20site%20e%20estou%20interessado(a)%20em%20seus%20servi%C3%A7os.`
const telegramLink = `https://t.me/${import.meta.env.VITE_TELEGRAM_USERNAME}?text=Sua%20mensagem%20preenchida%20aqui`

gsap.registerPlugin(ScrollTrigger)

export function Contact() {
	const triggerRef = useRef<HTMLDivElement>(null)

	useGSAP(() => {
		gsap.to(
			'#squeeze',
			{
				rotateZ: -16,
				scrollTrigger: {
					trigger: triggerRef.current,
					start: 'top 80%',
					end: 'bottom 50%',
					toggleActions: 'play none none none',
					scrub: true
				}
			}
		)

		gsap.fromTo(
			'#water',
			{
				rotate: -70,
				left: '6.4rem',
				top: -60,
				width: 50,
				height: 80
			},
			{
				rotate: -50,
				left: '3rem',
				top: -160,
				width: 160,
				height: 210,
				scrollTrigger: {
					trigger: triggerRef.current,
					start: 'top 80%',
					end: 'bottom 50%',
					toggleActions: 'play none none none',
					scrub: true
				}
			}
		)
	}, { scope: triggerRef })

	return (
		<section className="flex justify-center mb-10 lg:px-12 relative md:mt-20" id="contact" ref={triggerRef}>
			<div className="absolute left-30 z-50 hidden lg:block">
				<img src="/water2.png" id="water" className="absolute w-96 h-60 object-fill" alt="" />
				<img src="/squeeze2.png" id="squeeze" className="w-40 -mt-8 object-contain" alt="" />
			</div>

			<Fade direction="left" triggerOnce delay={300}>
				<div className="mx-8">
					<Card className="lg:max-w-160 xl:max-w-200 gap-6 py-10 px-14 xl:px-16">
						<h1 className="text-center lg:text-right w-full">Vamos conversar</h1>

						<p className="text-gray-400 text-sm leading-relaxed text-right">
							Envie uma mensagem contando sobre seus objetivos, sua rotina, alimentação e eu terei o maior prazer em lhe atender.
						</p>

						<div className="flex flex-col items-center sm:justify-end sm:flex-row gap-3 sm:gap-6 w-full">
							<Button variant="white" onClick={() => { window.open(whatsAppLink, '_blank') }} className="mt-4">
								<WhatsappLogoIcon className="h-6 w-6" />
								WhatsApp
							</Button>

							<Button variant="white" onClick={() => { window.open(telegramLink, '_blank') }} className="mt-4">
								<TelegramLogoIcon className="h-5 w-5" />
								Telegram
							</Button>
						</div>
					</Card>
				</div>
			</Fade>
		</section>
	)
}