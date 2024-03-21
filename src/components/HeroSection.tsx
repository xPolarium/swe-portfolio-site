import drinkImage from "../assets/drink.svg";
import { Button } from "./ui/button";

export default function HeroSection() {
	return (
		<section className="container mx-auto min-h-screen flex justify-center items-center">
			<div className="flex flex-col items-center gap-24">
				<div className="flex justify-center items-center gap-16">
					<div className="space-y-4">
						<p className="text-2xl">Hello, I'm Miguel</p>
						<p className="text-6xl font-extrabold">
							Software Engineer
						</p>
						<p className="text-2xl">
							B.S. in Computer Science @ UTRGV
						</p>
					</div>
					<div>
						<img
							className="h-96 w-72 rounded bg-gray-300 object-cover"
							src={drinkImage.src}
							alt="Image shot of someone drinking coffee."
						/>
					</div>
				</div>
				<div className="flex gap-8 items-center">
					<Button className="h-14 w-32 text-xl rounded-sm font-semibold">
						Resume
					</Button>
					<div className="w-[2px] h-16 bg-gray-300"></div>
					<Button className="h-14 w-32 text-xl rounded-sm font-semibold">
						Contact
					</Button>
				</div>
			</div>
		</section>
	);
}
