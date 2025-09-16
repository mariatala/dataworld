import { Cormorant_Garamond } from 'next/font/google';
import { Cabin } from 'next/font/google';
import { FaAngleRight } from 'react-icons/fa6';
import Image from 'next/image';

const cormorant = Cormorant_Garamond({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
});
const cabin = Cabin({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
});
export default function Features() {
	return (
		<section id="benefits" className="py-24 flex justify-center items-center">
			<div className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 flex flex-col justify-center items-center  md:w-3/4 lg:w-4/5 xl:w-2/3">
				<div className="flex flex-col justify-center items-center gap-8 text-center">
					<h2 className="text-[var(--accent)]">Benefits</h2>

					<h2
						className={`${cormorant.className} text-2xl lg:text-5xl font-semibold text-center leading-none tracking-wide`}
					>
						{' '}
						Key Advantages of Our Services
					</h2>
					<p
						className={`${cabin.className} text-sm  text-center max-w-3xl font-thin leading-relaxed tracking-wider text-[var(--less-light)]`}
					>
						Unlock the full potential of your data with our innovative
						solutions. Discover how our secure, scalable, and intelligent
						services empower your business to make data-driven decisions,
						streamline operations, and achieve sustainable growth. Experience
						the difference with tailored benefits designed to meet your unique
						needs and drive success.
					</p>
				</div>
				<div className="flex flex-col justify-center items-center">
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-16">
						{[
							{
								logo: '/benefits_one.jpg',
								logo_alt: 'Proven Results',
								title: 'Proven Results for Your Business',
								desc: 'Protect your data with our advanced security protocols and encryption methods.',
							},
							{
								logo: '/benefits_two.jpg',
								logo_alt: 'Tailored Solutions',
								title: 'Tailored Solutions for Every Need',
								desc: 'Our solutions grow with your business, ensuring seamless adaptability.',
							},
							{
								logo: '/benefits_three.jpg',
								logo_alt: 'Data Insights',
								title: 'Intelligent Data Insights',
								desc: 'Optimize your data management costs with our affordable and effective services.',
							},
						].map((benefit, id) => (
							<div
								key={id}
								className="flex flex-col justify-center  gap-4 items-center"
							>
								<Image
									src={benefit.logo}
									alt={benefit.logo_alt}
									width={64}
									height={64}
									className="rounded-full"
								/>
								<div className="flex flex-col justify-center items-center gap-2">
									<h3
										className={`${cormorant.className} text-3xl font-medium text-center leading-tight text-[var(--less-dark)]`}
									>
										{benefit.title}
									</h3>
									<p
										className={`${cabin.className} text-sm  text-center max-w-3xl font-thin leading-relaxed tracking-wider text-[var(--less-light)]`}
									>
										{benefit.desc}
									</p>
								</div>
							</div>
						))}
					</div>{' '}
					<div className="flex gap-8 mt-16">
						<button className=" border-1 rounded-sm border-[var(--dark)] px-4 py-1 w-fit hover:bg-[var(--dark)] hover:text-[var(--light)] transition-colors duration-500">
							Learn
						</button>
						<button className="group button-data w-fit hover:translate-x-0.5 transition-all duration-300">
							Discover{' '}
							<FaAngleRight className="inline-block  group-hover:translate-x-1 transition-transform duration-300" />
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
