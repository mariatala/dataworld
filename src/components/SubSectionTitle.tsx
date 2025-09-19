import { Cormorant_Garamond } from 'next/font/google';
import { Cabin } from 'next/font/google';
import { FaAngleRight } from 'react-icons/fa6';
import Link from 'next/link';

const cormorant = Cormorant_Garamond({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
});
const cabin = Cabin({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
});

type SubTitleProps = {
	subTagline?: string;
	subTitle: string;
	description: string;
	buttonText: string;
	linkUrl: string;
	subTitleClass?: string;
};
export default function SubSectionTitle({
	subTagline,
	subTitle,
	description,
	buttonText,
	linkUrl,
	subTitleClass = '',
}: SubTitleProps) {
	return (
		<div className="flex flex-col gap-4 py-3 px-2 rounded-md ">
			{' '}
			<h3
				className={`${cormorant.className} text-lg font-semibold text-[var(--less-light)]`}
			>
				{subTagline}
			</h3>
			<h4
				className={`${cormorant.className} font-medium leading-6 ${subTitleClass}`}
			>
				{subTitle}
			</h4>
			<p
				className={`${cabin.className} text-sm  font-thin leading-relaxed tracking-wider text-[var(--less-light)]`}
			>
				{description}
			</p>
			<Link href={linkUrl}>
				<button className="group button-data w-fit hover:translate-x-0.5 transition-all duration-300 text-[var(--less-light)]">
					{buttonText}{' '}
					<FaAngleRight className="inline-block  group-hover:translate-x-1 transition-transform duration-300" />
				</button>
			</Link>
		</div>
	);
}
