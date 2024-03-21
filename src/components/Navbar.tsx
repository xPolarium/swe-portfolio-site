import { AlignJustify } from "lucide-react";

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
			<nav className="fixed w-full py-6">
				<div className="flex justify-around items-center">
					<div></div>
					<a
						href="/"
						className="rounded-full grid place-items-center h-16 w-16 dark:bg-gray-300 text-3xl dark:text-slate-900"
					>
						MT
					</a>
					<Sheet>
						<SheetTrigger
							onClick={() => {
								console.log("Hello");
							}}
						>
							<AlignJustify className="h-8 w-8 dark:text-gray-300 " />
						</SheetTrigger>
						<SheetContent side="right">
							<SheetHeader className="gap-4">
								<SheetDescription>
									<a
										href="#skills"
										className="text-4xl hover:text-gray-200"
									>
										Skills
									</a>
								</SheetDescription>
								<SheetDescription className="text-4xl">
									<a
										href="#projects"
										className="text-4xl hover:text-gray-200"
									>
										Projects
									</a>
								</SheetDescription>
								<SheetDescription className="text-4xl">
									<a
										href="#contact"
										className="text-4xl hover:text-gray-200"
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
