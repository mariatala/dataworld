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
export default function Process() {
	const title: string = 'Process';
	const tagline: string = 'Our Seamless Workflow';
	const sub_tagline: string =
		'Discover how we streamline your data management.';
	return (
		<section
			id="process"
			className=" bg-gray-200 py-24 flex justify-center items-center"
		>
			<div className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 flex flex-col justify-center items-center  md:w-3/4 lg:w-4/5 xl:w-2/3">
				<div className="flex flex-col justify-center items-center gap-8 tex-center">
					<SectionTitle
						title={title}
						tagline={tagline}
						sub_tagline={sub_tagline}
					/>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-16 ">
					<div className="flex gap-8 border-1 border-[var(--light)] rounded-md col-span-2">
						<div className="w-1/2 h-full rounded-r-md ">
							<Image
								src="/features.jpg"
								width={500}
								height={500}
								className="rounded-l-md h-full object-cover bg-amber-600"
								alt="Data Storage Solutions"
							/>
						</div>
						<div className="flex w-1/2 flex-col justify-center items-start gap-4 py-8 px-4 rounded-md">
							{' '}
							<h3
								className={`${cormorant.className} text-lg font-semibold text-[var(--less-light)]`}
							>
								Steps
							</h3>
							<h4
								className={`${cormorant.className} text-3xl font-medium leading-tight`}
							>
								Our Proven Methodology
							</h4>
							<p
								className={`${cabin.className} text-sm  font-thin leading-relaxed tracking-wider text-[var(--less-light)]`}
							>
								A structured approach to data management, from assessment to
								implementation and support.
							</p>
							<button className="group button-data w-fit hover:translate-x-0.5 transition-all duration-300 text-[var(--less-light)]">
								Learn{' '}
								<FaAngleRight className="inline-block  group-hover:translate-x-1 transition-transform duration-300" />
							</button>
						</div>
					</div>

					<div className="flex flex-col gap-4 border-1 border-[var(--light)] rounded-md">
						<Image
							src="/features_two.jpg"
							width={1000}
							height={500}
							className="rounded-t-md h-full object-cover"
							alt="Scalable Solutions"
						/>
						<div className="flex flex-col gap-4 p-4">
							{' '}
							<h3 className={`${cormorant.className} text-lg font-semibold`}>
								Stages
							</h3>
							<h4
								className={`${cormorant.className} text-3xl font-medium leading-tight`}
							>
								Step-by-Step Implementation
							</h4>
							<p
								className={`${cabin.className} text-sm  font-thin leading-relaxed tracking-wider text-[var(--less-light)]`}
							>
								From consultation to deployment, we ensure a smooth integration
								into your existing systems.
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
					</div>
				</div>
			</div>
		</section>
	);
}
