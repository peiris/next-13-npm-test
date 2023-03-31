import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { Button } from "@hydraui/nextpackage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<main className={styles.main}>
			<Button onClick={() => console.log("Clicked boop")} />
		</main>
	);
}
