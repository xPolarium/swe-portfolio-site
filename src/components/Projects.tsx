import { useState } from "react";
import { FaGithub, FaExpand, FaPlay } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

import showcase1Image from "../assets/project_showcase1.jpg";
import clsx from "clsx";

function ProjectCard() {
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<div className="relative rounded-md border overflow-hidden border-primary">
			<button
				onClick={() => setIsExpanded(!isExpanded)}
				className={clsx(
					"transition-all absolute right-3 top-3 text-xl hover:scale-125",
					isExpanded ? "scale-125" : "scale-100"
				)}
			>
				{isExpanded ? <IoClose /> : <FaExpand />}
			</button>
			<img
				src={showcase1Image.src}
				className={clsx(
					"transition-all w-full object-cover border-b-2 border-primary",
					isExpanded ? "h-64" : "h-24"
				)}
			/>

			<div className="p-4">
				<p className="text-xl font-semibold">Title of Project</p>
				<p className={clsx(isExpanded ? "" : "truncate")}>
					This is my project I developed 2 years ago. It was built
					using TypeScript, React, and TailwindCSS.
				</p>

				<div className="flex justify-end gap-2">
					<a
						href=""
						className="flex text-sm items-center bg-foreground text-background gap-1 px-2 py-0.5 rounded-full mt-4"
					>
						<FaGithub />
						Code
					</a>
					<a
						href=""
						className="flex text-sm items-center bg-foreground text-background gap-1 px-2 py-0.5 rounded-full mt-4"
					>
						<FaPlay />
						Demo
					</a>
				</div>
			</div>
		</div>
	);
}

export default function Projects() {
	return (
		<section className="container mx-auto">
			<p className="mb-16 text-4xl font-bold underline">My Projects</p>
			<div className="grid grid-cols-3 gap-16 items-start">
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
			</div>
		</section>
	);
}
