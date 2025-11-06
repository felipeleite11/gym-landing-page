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
					<PackageCard
						icon={<Star />} 
						title="Starter" 
						items={[
							'Avaliação física inicial',
							'Treino personalizado (atualização mensal)',
							'Acompanhamento via WhatsApp (1x por semana)',
							'Dicas básicas de alimentação'
						]}
						itemsX={[
							'Acesso à plataforma de treinos online',
							'Vídeos demonstrativos dos exercícios',
							'Descontos exclusivos na WB Suplementos'
						]}
						className="lg:max-w-88"
					/>
					<PackageCard
						icon={<Flame />} 
						title="Advanced" 
						items={[
							'Avaliação física completa',
							'Treino personalizado (atualização quinzenal)',
							'Acompanhamento via WhatsApp (3x por semana)',
							'Plano alimentar personalizado',
							'Acesso à plataforma de treinos online',
							'Vídeos demonstrativos dos exercícios'
						]}
						itemsX={[
							'Descontos exclusivos na WB Suplementos'
						]}
						className="lg:max-w-88"
					/>
					<PackageCard
						icon={<Trophy />} 
						title="Pro" 
						items={[
							'Avaliação física completa + reavaliação mensal',
							'Treino totalmente customizado (atualização semanal)',
							'Suporte diário via WhatsApp',
							'Plano alimentar personalizado',
							'Acesso exclusivo a lives e aulas extras',
							'Vídeos demonstrativos dos exercícios',
							'Descontos exclusivos na WB Suplementos'
						]}
						className="lg:max-w-88"
					/>
				</Fade>
			</div>
		</section>
	)
}