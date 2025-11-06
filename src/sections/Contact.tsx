import { Fade } from "react-awesome-reveal"
import { WhatsappLogoIcon, TelegramLogoIcon } from "@phosphor-icons/react"
import { Button } from "../components/Button"
import { Card } from "../components/Card"

const whatsAppLink = `https://wa.me/55${import.meta.env.VITE_WHATSAPP_NUMBER}?text=Ol%C3%A1%2C%20acessei%20seu%20site%20e%20estou%20interessado(a)%20em%20seus%20servi%C3%A7os.`
const telegramLink = `https://t.me/${import.meta.env.VITE_TELEGRAM_USERNAME}?text=Sua%20mensagem%20preenchida%20aqui`

export function Contact() {
	return (
		<section className="flex justify-center mb-10 lg:px-12" id="contact">
			<Fade direction="left" triggerOnce delay={300}>
				<Card className="w-100 lg:max-w-200 gap-6" variant="glass">
					<h1 className="text-center lg:text-left">Vamos conversar</h1>

					<p className="text-gray-400 text-sm leading-relaxed">
						Envie uma mensagem contando sobre seus objetivos, sua rotina, alimentação e eu terei o maior prazer em lhe atender.
					</p>

					<div className="flex flex-col items-center sm:flex-row gap-6">
						<Button onClick={() => { window.open(whatsAppLink, '_blank') }} className="mt-4">
							<WhatsappLogoIcon className="h-6 w-6" />
							WhatsApp
						</Button>

						<Button onClick={() => { window.open(telegramLink, '_blank') }} className="mt-4">
							<TelegramLogoIcon className="h-5 w-5" />
							Telegram
						</Button>
					</div>
				</Card>
			</Fade>
		</section>
	)
}