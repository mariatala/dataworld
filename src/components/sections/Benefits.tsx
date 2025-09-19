import { Cormorant_Garamond } from 'next/font/google';
import { Cabin } from 'next/font/google';
import { FaAngleRight } from 'react-icons/fa6';
import { FaClipboardCheck } from 'react-icons/fa6';
import { FaLightbulb } from 'react-icons/fa6';
import { FaDatabase } from 'react-icons/fa6';
import SectionTitle from '@/components/SectionTitle';

const cormorant = Cormorant_Garamond({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
});
const cabin = Cabin({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
});
export default function Features() {
	const title: string = 'Benefits';
	const tagline: string = 'Key Advantages of Our Services';
	const sub_tagline: string =
		'Unlock the full potential of your data with our innovative  solutions. Discover how our secure, scalable, and intelligent services empower your business to make data-driven decisions, streamline operations, and achieve sustainable growth. Experience the difference with tailored benefits designed to meet your unique  needs and drive success.';
	return (
		<section id="benefits" className="py-24 flex justify-center items-center">
			<div className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 flex flex-col justify-center items-center  md:w-3/4 lg:w-4/5">
				<SectionTitle
					title={title}
					tagline={tagline}
					sub_tagline={sub_tagline}
				/>

				<div className="flex flex-col justify-center items-center">
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-16">
						{[
							{
								icon: <FaClipboardCheck />,
								title: 'Proven Results for Your Business',
								desc: 'Protect your data with our advanced security protocols and encryption methods.',
							},
							{
								icon: <FaLightbulb />,
								title: 'Tailored Solutions for Every Need',
								desc: 'Our solutions grow with your business, ensuring seamless adaptability.',
							},
							{
								icon: <FaDatabase />,
								title: 'Intelligent Data Insights',
								desc: 'Optimize your data management costs with our affordable and effective services.',
							},
						].map((benefit, id) => (
							<div
								key={id}
								className="flex flex-col justify-center  gap-4 items-center h-40"
							>
								{' '}
								<div>{benefit.icon}</div>
								<div className="flex flex-col justify-center items-center">
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
