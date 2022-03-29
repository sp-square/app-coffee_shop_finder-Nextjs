import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Component {...pageProps} />
			<footer>This is a footer</footer>
		</>
	);
}

export default MyApp;
