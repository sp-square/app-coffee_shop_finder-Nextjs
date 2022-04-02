import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import Banner from '../components/banner';

export default function Home() {
	const handleOnBannerBtnClick = (e) => {
		e.preventDefault();
		console.log('Banner button clicked');
	};

	return (
		<div className={styles.container}>
			<Head>
				<title>Coffee Connoisseur</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<Banner
					buttonText="View stores nearby"
					handleOnClick={handleOnBannerBtnClick}
				/>
				<div className={styles.heroImage}>
					<Image
						src="/static/hero-image.png"
						alt="hot coffee cup"
						width={300}
						height={300}
					/>
				</div>
			</main>
		</div>
	);
}
