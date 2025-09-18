import { Cormorant_Garamond } from 'next/font/google';
import { Cabin } from 'next/font/google';
import { FaAngleRight } from 'react-icons/fa6';
import Image from 'next/image';
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
	const title: string = 'Features';
	const tagline: string = 'Core Features Overview';
	const sub_tagline: string =
		'Empower Our Business with our Cutting-Edge Solutions';

	return (
		<section
			id="features"
			className=" bg-gray-200  my-24  py-24 flex justify-center items-center"
		>
			<div className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 flex flex-col justify-center items-center  md:w-3/4 lg:w-4/5 xl:w-2/3">
				<SectionTitle
					title={title}
					tagline={tagline}
					sub_tagline={sub_tagline}
				/>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-16">
					<div className="flex flex-col gap-4">
						<div className="flex gap-8 border-1 border-[var(--light)] rounded-md">
							<div className="flex w-1/2 flex-col gap-4 py-8 px-4 rounded-md">
								{' '}
								<h3
									className={`${cormorant.className} text-lg font-semibold text-[var(--less-light)]`}
								>
									Tagline
								</h3>
								<h4
									className={`${cormorant.className} text-xl font-medium leading-6`}
								>
									Data Storage Solutions
								</h4>
								<p
									className={`${cabin.className} text-sm  font-thin leading-relaxed tracking-wider text-[var(--less-light)]`}
								>
									Our data storage solutions provide secure and scalable options
									for your business needs.
								</p>
								<button className="group button-data w-fit hover:translate-x-0.5 transition-all duration-300 text-[var(--less-light)]">
									Explore{' '}
									<FaAngleRight className="inline-block  group-hover:translate-x-1 transition-transform duration-300" />
								</button>
							</div>
							<div className="w-1/2 h-full rounded-r-md ">
								<Image
									src="/features.jpg"
									width={500}
									height={500}
									className="rounded-r-md h-full object-cover bg-amber-600"
									alt="Data Storage Solutions"
								/>
							</div>
						</div>
						<div className=" flex gap-4">
							<div className="flex flex-col gap-4  border-1 border-[var(--light)] rounded-md p-4">
								<h4
									className={`${cormorant.className} text-xl font-medium leading-6`}
								>
									Advanced Data Analytics
								</h4>
								<p
									className={`${cabin.className} text-sm  font-thin leading-relaxed tracking-wider text-[var(--less-light)]`}
								>
									Designed to provide actionable insights and drive business
									growth.
								</p>
								<button className="group button-data w-fit hover:translate-x-0.5 transition-all duration-300 text-[var(--less-light)]">
									Explore{' '}
									<FaAngleRight className="inline-block  group-hover:translate-x-1 transition-transform duration-300" />
								</button>
							</div>
							<div className="flex flex-col gap-4 border-1 border-[var(--light)] rounded-md p-4">
								<h4
									className={`${cormorant.className} text-xl font-medium leading-6`}
								>
									Robust Data Security
								</h4>
								<p
									className={`${cabin.className} text-sm  font-thin leading-relaxed tracking-wider text-[var(--less-light)]`}
								>
									Comprehensive protection and integrity of your data
								</p>
								<button className="group button-data w-fit hover:translate-x-0.5 transition-all duration-300 text-[var(--less-light)]">
									Explore{' '}
									<FaAngleRight className="inline-block  group-hover:translate-x-1 transition-transform duration-300" />
								</button>
							</div>
						</div>
					</div>

					<div className="flex flex-col gap-4 border-1 border-[var(--light)] rounded-md">
						<div className="flex flex-col gap-4 p-4">
							{' '}
							<h3 className={`${cormorant.className} text-lg font-semibold`}>
								Tagline
							</h3>
							<h4
								className={`${cormorant.className} text-3xl font-medium leading-tight`}
							>
								Scalable Solutions
							</h4>
							<p
								className={`${cabin.className} text-sm  font-thin leading-relaxed tracking-wider text-[var(--less-light)]`}
							>
								Our solutions are designed to scale with your business, ensuring
								seamless growth and adaptability.
							</p>
							<div className="flex gap-8 mt-4">
								<button className=" border-1 rounded-sm border-[var(--accent)] px-4 py-1 w-fit hover:bg-[var(--less-dark)] hover:text-[var(--light)] transition-colors duration-500">
									Get Started
								</button>
								<button className="group button-data w-fit hover:translate-x-0.5 transition-all duration-300">
									Explore{' '}
									<FaAngleRight className="inline-block  group-hover:translate-x-1 transition-transform duration-300" />
								</button>
							</div>
						</div>
						<Image
							src="/features_two.jpg"
							width={1000}
							height={500}
							className=" h-full object-cover"
							alt="Scalable Solutions"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
