import { Fade } from "react-awesome-reveal"
import { Button } from "../components/Button"
import { Card } from "../components/Card"

export function Contact() {
	return (
		<section className="flex justify-center">
			<div className="relative flex gap-10 w-[66vw]">
				<Fade direction="left" triggerOnce delay={300}>
					<Card className="items-start w-160 max-w-160 m-12 gap-6" variant="glass">
						<h1>Juliana Silva</h1>

						<p className="text-gray-400 text-sm leading-relaxed max-w-116">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque <span className="font-semibold text-white">laborum</span>, sequi impedit voluptatem dolorum soluta doloribus unde <span className="font-semibold text-white">illo et</span> asperiores corrupti ipsum aliquid! Rem velit blanditiis expedita, explicabo quae fugiat?
						</p>

						<p className="text-gray-400 text-sm leading-relaxed max-w-105">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque <span className="font-semibold text-white">laborum</span>, sequi impedit voluptatem dolorum soluta doloribus unde.
						</p>

						<Button onClick={() => {}} className="mt-4">
							FAZER MINHA MATRÍCULA
						</Button>
					</Card>
				</Fade>

				<img src="/woman.png" alt="" className="absolute bottom-0 right-0 w-105 mt-6" />
			</div>
		</section>
	)
}