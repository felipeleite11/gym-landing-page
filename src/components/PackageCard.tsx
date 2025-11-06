import { Button } from "./Button";
import type { ComponentProps, ReactNode } from "react";
import { Card } from "./Card";
import { CheckCircleIcon, XCircleIcon } from "lucide-react";

type PackageCardProps = ComponentProps<'div'> & {
	icon: ReactNode
	title: string
	items: string[]
	itemsX?: string[]
}

export function PackageCard({ icon, title, items, itemsX = [], ...props }: PackageCardProps) {
	return (
		<Card {...props}>
			<div className="bg-linear-to-tr from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-4 -mt-16">
				<div className="w-16 h-16 flex items-center justify-center">
					{icon}
				</div>
			</div>

			<h2 className="text-2xl font-semibold mb-4">{title}</h2>

			<ul className="space-y-3 text-sm text-gray-200">
				{items.map(item => (
					<li key={item} className="grid grid-cols-[1.4rem_auto] gap-2 items-center">
						<CheckCircleIcon className="h-5 w-5" />
						{item}
					</li>
				))}

				{itemsX.map(item => (
					<li key={item} className="grid grid-cols-[1.4rem_auto] gap-2 items-center text-gray-400">
						<XCircleIcon className="h-5 w-5" />
						{item}
					</li>
				))}
			</ul>

			<Button variant="white" className="text-sm mt-4 w-full">
				Escolher plano
			</Button>
		</Card>
	)
}