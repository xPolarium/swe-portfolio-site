import drinkImage from "../assets/drink.svg";
import { Button } from "./ui/button";

export default function HeroSection() {
	return (
		<section className="container mx-auto min-h-screen flex justify-center items-center">
			<div className="flex flex-col items-center gap-24">
				<div className="flex flex-col lg:flex-row justify-center items-center gap-16">
					<div className="space-y-4">
						<p className="text-3xl font-semibold">
							Hey, how's it going!{" "}
							<span className="text-5xl">&#128075;</span>
						</p>
						<p className="text-6xl font-extrabold flex flex-col">
							<span className="text-xl font-normal">
								My name is
							</span>
							Miguel A. Torres
						</p>
						<p className="flex flex-col text-right text-3xl font-semibold">
							Software Engineer
							<span className="text-xl font-normal">
								B.S. in Computer Science @ UTRGV
							</span>
						</p>
					</div>
					<div>
						<img
							className="h-96 w-72 rounded bg-foreground object-cover"
							src={drinkImage.src}
							alt="Image shot of someone drinking coffee."
						/>
					</div>
				</div>
				<div className="flex gap-8 items-center">
					<Button className="h-14 w-32 text-xl rounded-sm font-semibold">
						Resume
					</Button>
					<div className="w-[2px] h-16 bg-foreground"></div>
					<Button className="h-14 w-32 text-xl rounded-sm font-semibold">
						Contact
					</Button>
				</div>
			</div>
		</section>
	);
}
