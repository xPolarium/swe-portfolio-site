import { useState } from "react";
import { FaGithub, FaExpand, FaPlay } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

import clsx from "clsx";

import type { ProjectItem } from "./Projects";

export default function ProjectCard({
	project: { title, image, description, github_url, demo_url },
}: {
	project: ProjectItem;
}) {
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
				src={image}
				className={clsx(
					"transition-all w-full object-cover border-b-2 border-primary",
					isExpanded ? "h-64" : "h-24"
				)}
			/>

			<div className="p-4">
				<p className="text-xl font-semibold">{title}</p>
				<p className={clsx(isExpanded ? "" : "truncate")}>
					{description}
				</p>

				<div className="flex justify-end gap-2">
					<a
						href={github_url}
						target="_blank"
						className="flex text-sm items-center bg-foreground text-background gap-1 px-2 py-0.5 rounded-full mt-4"
					>
						<FaGithub />
						Code
					</a>
					<a
						href={demo_url}
						target="_blank"
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
