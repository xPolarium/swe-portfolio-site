import ProjectCard from "./ProjectCard";

const projects = [
	{
		title: "My Portfolio Website",
		image: "/project_showcase1.jpg",
		description:
			"I created my portfolio website to share my skills and experience in Software Engineering and Web Development. It includes a blog where I post recent interests I've worked on. It was built using Astro and is hosted on Netlify.",
		github_url: "https://github.com/xPolarium/swe-portfolio-site",
		demo_url: "",
	},
];

export type ProjectItem = (typeof projects)[number];

export default function Projects() {
	return (
		<section className="container mx-auto">
			<p className="mb-16 text-4xl font-bold underline">My Projects</p>
			<div className="grid grid-cols-3 gap-16 items-start">
				{projects.map((project) => (
					<ProjectCard project={project} />
				))}
			</div>
		</section>
	);
}
