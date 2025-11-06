import { MenuIcon } from "lucide-react";

export function Navbar() {
	return (
		<div className="flex justify-between items-center w-full pl-8 pr-12 lg:px-12 py-4 lg:py-0">
			<img src="/logo3.png" className="h-11 hidden lg:block" />
			<img src="/logo2.png" className="h-16 lg:hidden" />

			<img src="/logo2.png" className="h-20 mx-auto mt-12 hidden lg:block" />

			<div>
				<MenuIcon className="text-gray-400 cursor-pointer hover:opacity-80" />

				<nav className="hidden">
					<ul>
						<li>Home</li>
					</ul>
				</nav>
			</div>
		</div>
	)
}