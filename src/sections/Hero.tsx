import { Fade } from "react-awesome-reveal"
import { Player } from 'video-react'
import { Button } from "../components/Button"
import { Navbar } from "../components/Navbar"

export function Hero() {
	return (
		<section className="w-full flex flex-col gap-6 pb-16 select-none">
			<Navbar />
			
			<div className="flex justify-between gap-16">
				<div className="px-10 lg:pl-24 flex flex-col gap-4 mt-8">
					<Fade cascade direction="up" triggerOnce>
						<h1>Quer mudar o seu corpo?</h1>

						<p className="text-gray-400 font-medium">Treinamento sério e compromisso com o resultado.</p>
						
						<p className="text-gray-400 font-light text-sm">As vagas são limitadas, então corra e faça sua matrícula.</p>

						<Button onClick={() => { document.location = '/#contact' }} className="mt-4">
							Saber mais
						</Button>
					</Fade>
				</div>

				<Fade direction="up" delay={1500} triggerOnce>
					<div className="flex-col gap-2 pr-16 hidden lg:flex">
						<span className="text-sm text-gray-400 text-right mr-8">Transformando metas em conquistas.</span>

						<div className="w-[560px] h-[296px] rounded-lg overflow-hidden">
							<Player loop autoPlay muted {...({ loop: true } as any)} disableDefaultControls>
								<source src="/video-hero.mp4" />
							</Player>
						</div>
					</div>
				</Fade>
			</div>
		</section>
	)
}