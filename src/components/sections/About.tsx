import { Cormorant_Garamond } from 'next/font/google';
import { Cabin } from 'next/font/google';
import { FaAngleRight } from 'react-icons/fa6';
import SectionTitle from '@/components/SectionTitle';

const cormorant = Cormorant_Garamond({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
});
const cabin = Cabin({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
});

export default function About() {
	const title: string = 'Innovative';
	const tagline: string = 'Transforming Data Management for Your Business';
	const sub_tagline: string =
		'At DataWorld, we understand that effective data management is crucial for business success. Our comprehensive solutions are designed to help you optimize your data processes, improve accessibility, and drive informed decision-making.';

	return (
		<section id="about" className="py-24 flex justify-center items-center">
			<div className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 flex flex-col justify-center items-center  md:w-3/4 lg:w-4/5">
				<SectionTitle
					title={title}
					tagline={tagline}
					sub_tagline={sub_tagline}
				/>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
					{[
						{
							icon: '📊',
							title: 'Data Analytics',
						},
						{
							icon: '🔒',
							title: 'Data Security',
						},
						{
							icon: '☁️',
							title: 'Cloud Solutions',
						},
						{
							icon: '☁️',
							title: 'Cloud Solutions',
						},
					].map((benefit, index) => (
						<div key={index} className="flex items-center">
							<span className="text-4xl">{benefit.icon}</span>
							<h3 className="text-lg font-semibold mt-2">{benefit.title}</h3>
						</div>
					))}
				</div>
				<div className="flex gap-8 mt-8">
					<button className=" border-1 rounded-sm border-[var(--dark)] px-4 py-2 w-fit hover:bg-[var(--dark)] hover:text-[var(--light)] transition-colors duration-500">
						Learn
					</button>
					<button className="group button-data w-fit hover:translate-x-0.5 transition-all duration-300">
						Explore{' '}
						<FaAngleRight className="inline-block  group-hover:translate-x-1 transition-transform duration-300" />
					</button>
				</div>
			</div>
		</section>
	);
}
