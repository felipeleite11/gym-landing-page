import { Flame, Star, Trophy } from "lucide-react";
import { PackageCard } from "../components/PackageCard";
import { Fade } from "react-awesome-reveal";

export function Packages() {
	return (
		<section className="w-full flex flex-col gap-12">
			<Fade cascade direction="up" triggerOnce>
				<h1 className="text-center">Pacotes</h1>
			</Fade>

			<div className="flex gap-8 justify-center px-16 pb-12 pt-4">
				<Fade cascade triggerOnce>
					<PackageCard icon={<Star />} className="h-108 max-w-88" />
					<PackageCard icon={<Flame />} className="h-108 max-w-88" />
					<PackageCard icon={<Trophy />} className="h-108 max-w-88" />
				</Fade>
			</div>
		</section>
	)
}