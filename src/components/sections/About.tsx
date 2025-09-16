import { Cormorant_Garamond } from 'next/font/google';
import { Cabin } from 'next/font/google';
import { FaAngleRight } from 'react-icons/fa6';

const cormorant = Cormorant_Garamond({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
});
const cabin = Cabin({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
});

export default function About() {
	return (
		<section
			id="about"
			className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 my-24 flex flex-col justify-center items-center"
		>
			<div className=" w-2/3  flex flex-col gap-12 justify-center items-center">
				<h2 className=" tracking-wider text-[var(--accent)]">Innovative</h2>
				<div className="flex flex-col justify-center items-center gap-6">
					<h2
						className={`${cormorant.className} text-2xl lg:text-5xl font-semibold text-center leading-none tracking-wide`}
					>
						Transforming Data Management for Your Business
					</h2>
					<p
						className={`${cabin.className} text-sm  text-center max-w-3xl font-thin leading-relaxed tracking-wider text-[var(--less-light)]`}
					>
						At DataWorld, we understand that effective data management is
						crucial for business success. Our comprehensive solutions are
						designed to help you optimize your data processes, improve
						accessibility, and drive informed decision-making.
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
				<div className="flex gap-8 mt-4">
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
