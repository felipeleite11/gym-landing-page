import { Flame, Star, Trophy } from "lucide-react";
import { PackageCard } from "../components/PackageCard";
import { Fade } from "react-awesome-reveal";

export function Packages() {
	return (
		<section className="w-full flex flex-col gap-12" id="packages">
			<Fade cascade direction="up" triggerOnce>
				<h1 className="text-center">Pacotes</h1>
			</Fade>

			<div className="flex flex-col lg:flex-row gap-16 lg:gap-8 justify-center px-8 lg:px-16 pb-12 pt-4">
				<Fade cascade triggerOnce>
					<PackageCard icon={<Star />} title="Starter" className="lg:max-w-88" />
					<PackageCard icon={<Flame />} title="Advanced" className="lg:max-w-88" />
					<PackageCard icon={<Trophy />} title="Pro" className="lg:max-w-88" />
				</Fade>
			</div>
		</section>
	)
}