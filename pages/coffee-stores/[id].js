import { useRouter } from 'next/router';
import Link from 'next/link';

const CoffeeStorePage = () => {
	const router = useRouter();
	return (
		<div className="">
			Coffee Store Page {router.query.id}
			<Link href="/">
				<a>Back to home</a>
			</Link>
			<Link href="/coffee-stores/two">
				<a>Go to dynamic</a>
			</Link>
		</div>
	);
};

export default CoffeeStorePage;
