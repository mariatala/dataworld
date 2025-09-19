import { Cormorant_Garamond } from 'next/font/google';
import { Cabin } from 'next/font/google';

const cormorant = Cormorant_Garamond({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
});
const cabin = Cabin({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
});
type TitleProps = {
	title: string;
	tagline: string;
	sub_tagline: string;
};
export default function SectionTitle({
	title,
	tagline,
	sub_tagline,
}: TitleProps) {
	return (
		<div className="flex flex-col justify-center items-center gap-8 tex-center">
			<h2 className="text-[var(--accent)]">{title}</h2>
			<h2
				className={`${cormorant.className} text-3xl md:text-4xl lg:text-5xl font-semibold text-center leading-none tracking-wide`}
			>
				{' '}
				{tagline}
			</h2>
			<p className="text-center text-[var(--less-light)]">{sub_tagline}</p>
		</div>
	);
}
