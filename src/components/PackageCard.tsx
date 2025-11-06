import { Button } from "./Button";
import type { ComponentProps, ReactNode } from "react";
import { Card } from "./Card";

type PackageCardProps = ComponentProps<'div'> & {
	icon: ReactNode
}

export function PackageCard({ icon, ...props }: PackageCardProps) {
	return (
		<Card {...props}>
			<div className="bg-linear-to-tr from-purple-500 to-blue-500  rounded-full flex items-center justify-center mb-4 -mt-16">
				<div className="w-16 h-16 flex items-center justify-center">
					{icon}
				</div>
			</div>

			<h2 className="text-2xl font-semibold mb-4">Semestral</h2>

			<ul className="space-y-2 text-sm text-gray-200">
				<li>✔ Planejamento de Treino em até 48h úteis</li>
				<li>✔ Planejamento de Dieta em até 48h úteis</li>
				<li>✔ Suporte individual via chat e WhatsApp</li>
				<li>✔ Atualização de protocolo após 3 meses</li>
				<li>✔ Prêmios</li>
			</ul>

			<Button variant="white" className="text-sm mt-4 w-full">
				Escolher plano
			</Button>
		</Card>
	)
}