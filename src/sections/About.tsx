import { Fade } from "react-awesome-reveal"
import { Card } from "../components/Card"

export function About() {
	return (
		<section className="flex justify-center mb-10 lg:mb-0" id="about">
			<div className="relative flex gap-10 w-108 px-4 lg:px-0 lg:mt-20 lg:w-228">
				<Fade direction="left" triggerOnce delay={300}>
					<Card className="items-start lg:w-160 lg:m-12 gap-6" variant="glass">
						<h1>Juliana Silva</h1>

						<p className="text-gray-400 text-sm leading-relaxed lg:max-w-116">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque <span className="font-semibold text-white">laborum</span>, sequi impedit voluptatem dolorum soluta doloribus unde <span className="font-semibold text-white">illo et</span> asperiores corrupti ipsum aliquid! Rem velit blanditiis expedita, explicabo quae fugiat?
						</p>

						<p className="text-gray-400 text-sm leading-relaxed lg:max-w-105">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque <span className="font-semibold text-white">laborum</span>, sequi impedit voluptatem dolorum soluta doloribus unde.
						</p>
					</Card>
				</Fade>

				<img src="/woman.png" alt="" className="absolute hidden lg:block bottom-0 right-0 w-105" />
			</div>
		</section>
	)
}