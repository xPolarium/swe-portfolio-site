import { LuAlignJustify } from "react-icons/lu";

import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetDescription,
	SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
	return (
		<>
			<nav className="lg:fixed w-full py-6 bg-background">
				<div className="grid grid-cols-3 place-items-center">
					<div></div>
					<a
						href="/"
						className="rounded-full grid place-items-center h-16 w-16 bg-foreground text-background text-3xl"
					>
						MT
					</a>
					<div className="hidden lg:block">
						<ul className="flex gap-6">
							<li className="hover:scale-110">
								<a
									href="#projects"
									className="text-2xl text-primary"
								>
									Projects
								</a>
							</li>
							<li className="hover:scale-110">
								<a
									href="#skills"
									className="text-2xl text-primary"
								>
									Skills
								</a>
							</li>
							<li className="hover:scale-110">
								<a
									href="#contact"
									className="text-2xl text-primary"
								>
									Contact Me
								</a>
							</li>
						</ul>
					</div>
					<Sheet>
						<SheetTrigger className="lg:hidden">
							<LuAlignJustify className="h-8 w-8" />
						</SheetTrigger>
						<SheetContent side="right">
							<SheetHeader className="gap-4">
								<SheetDescription>
									<a
										href="#skills"
										className="text-4xl text-primary hover:font-semibold"
									>
										Skills
									</a>
								</SheetDescription>
								<SheetDescription className="text-4xl">
									<a
										href="#projects"
										className="text-4xl text-primary hover:font-semibold"
									>
										Projects
									</a>
								</SheetDescription>
								<SheetDescription className="text-4xl">
									<a
										href="#contact"
										className="text-4xl text-primary hover:font-semibold"
									>
										Contact Me
									</a>
								</SheetDescription>
							</SheetHeader>
						</SheetContent>
					</Sheet>
				</div>
			</nav>
		</>
	);
}
