import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@cgai/ui";

function Gradient({
	conic,
	className,
	small,
}: {
	small?: boolean;
	conic?: boolean;
	className?: string;
}): JSX.Element {
	return (
		<span
			className={[
				styles.gradient,
				conic ? styles.glowConic : undefined,
				small ? styles.gradientSmall : styles.gradientLarge,
				className,
			]
				.filter(Boolean)
				.join(" ")}
		/>
	);
}

const LINKS = [
	{
		title: "Docs",
		href: "https://turbo.build/repo/docs",
		description: "Find in-depth information about Turborepo features and API.",
	},
	{
		title: "Learn",
		href: "https://turbo.build/repo/docs/handbook",
		description: "Learn more about monorepos with our handbook.",
	},
	{
		title: "Templates",
		href: "https://turbo.build/repo/docs/getting-started/from-example",
		description: "Choose from over 15 examples and deploy with a single click.",
	},
	{
		title: "Deploy",
		href: "https://vercel.com/new",
		description: " Instantly deploy your Turborepo to a shareable URL with Vercel.",
	},
];

export default function Page(): JSX.Element {
	return (
		<div>
			<h1>CFRA</h1>
			<button className="bg-green-500 p-3 rounded">Click here</button>
			<Button variant="destructive" className="px-5">Shared UI button</Button>
		</div>
	);
}
