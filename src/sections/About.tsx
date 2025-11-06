import { Fade } from "react-awesome-reveal"
import { Card } from "../components/Card"

export function About() {
	return (
		<section className="flex justify-center mb-10 lg:mb-0" id="about">
			<div className="relative flex gap-10 w-full px-8 lg:px-0 lg:mt-20 lg:w-228">
				<Fade direction="left" triggerOnce delay={300}>
					<Card className="items-start lg:w-160 lg:m-12 gap-6" variant="glass">
						<h1>Kleizy Guimarães</h1>

						<p className="text-gray-400 text-sm leading-relaxed lg:max-w-116">
							Sou Kleizy Guimarães, personal trainer <span className="font-semibold text-white">especializada</span> em musculação e treinamento funcional. Meu objetivo é ajudar você a <span className="font-semibold text-white">transformar</span> o seu corpo e sua rotina, com um acompanhamento sério, personalizado e focado em <span className="font-semibold text-white">resultados reais</span>.
						</p>

						<p className="text-gray-400 text-sm leading-relaxed lg:max-w-105">
							O treino vai muito <span className="font-semibold text-white">além da estética</span> — é sobre disciplina, superação e bem-estar. Cada aluno tem um ponto de partida e um <span className="font-semibold text-white">objetivo diferente</span>, e é justamente por isso que desenvolvo programas de treino <span className="font-semibold text-white">individualizados</span>, adaptados à sua rotina, nível de condicionamento e metas pessoais.
						</p>
					</Card>
				</Fade>

				<img src="/woman3.png" alt="" className="absolute hidden lg:block bottom-0 right-0 w-105" />
			</div>
		</section>
	)
}