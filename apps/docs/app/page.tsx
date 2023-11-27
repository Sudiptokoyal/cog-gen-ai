import Image from "next/image";
import {Button, cn} from "@cgai/ui";
import "@cgai/ui/styles.css"
// import styles from "./page.module.css";


export default function Page(): JSX.Element {
	return (
		<div>
			<h1>Docs</h1>
			<Button variant="destructive">Shared UI button</Button>

		</div>
	);
}
