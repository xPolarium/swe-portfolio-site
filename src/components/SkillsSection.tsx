const skills = {
	Languages: [
		{ name: "C++", icon: "" },
		{ name: "TypeScript", icon: "" },
	],
	Tools: [
		{ name: "Astro", icon: "" },
		{ name: "NextJS", icon: "" },
		{ name: "AWS", icon: "" },
	],
	Database: [{ name: "PostgreSQL", icon: "" }],
};

type Skill = { name: string; icon: string };

function SkillBar({
	skillType,
	skills,
}: {
	skillType: string;
	skills: Skill[];
}) {
	return (
		<div className="bg-secondary px-4 py-2 w-40 rounded-md">
			<p className="text-2xl mb-4">{skillType}</p>
			<ul className="flex flex-col gap-2">
				{skills.map((skill) => (
					<li>{skill.name}</li>
				))}
			</ul>
		</div>
	);
}

export default function SkillsSection() {
	return (
		<section className="container mx-auto">
			<p className="mt-32 mb-16 text-4xl font-bold underline">
				My Skills
			</p>
			<div className="flex justify-center gap-16">
				{Object.entries(skills).map((entry) => (
					<SkillBar skillType={entry[0]} skills={entry[1]} />
				))}
			</div>
		</section>
	);
}
