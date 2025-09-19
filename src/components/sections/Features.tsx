import { Cormorant_Garamond } from 'next/font/google';
import { Cabin } from 'next/font/google';
import { FaAngleRight } from 'react-icons/fa6';
import Image from 'next/image';
import SectionTitle from '@/components/SectionTitle';
import SubSectionTitle from '@/components/SubSectionTitle';

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
			className=" bg-gray-200  py-24 flex justify-center items-center"
		>
			<div className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 flex flex-col justify-center items-center  md:w-3/4 lg:w-4/5 xl:w-2/3">
				<SectionTitle
					title={title}
					tagline={tagline}
					sub_tagline={sub_tagline}
				/>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-16">
					<div className="flex flex-col gap-4">
						<div className="flex border-1 gap-2 border-[var(--light)] rounded-md">
							<div className="flex w-1/2 flex-col gap-4 py-8 px-4 rounded-md">
								{' '}
								<SubSectionTitle
									subTagline="Tagline"
									subTitle="Data Storage Solutions"
									description="Our data storage solutions provide secure and scalable options for your business needs.."
									buttonText="Explore"
									linkUrl="#DataStorage"
								/>
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
							<div className="flex flex-col gap-4 border-1 border-[var(--light)] rounded-md p-4">
								<SubSectionTitle
									subTitle="Advanced Data Analytics"
									description="Designed to provide actionable insights and drive growth."
									buttonText="Explore"
									linkUrl="#DataAnalytics"
								/>
							</div>

							<div className="flex flex-col gap-4 border-1 border-[var(--light)] rounded-md p-4">
								<SubSectionTitle
									subTitle="Robust Data Security"
									description="
									Comprehensive protection and integrity of your data."
									buttonText="Explore"
									linkUrl="#DataSecurity"
								/>
							</div>
						</div>
					</div>

					<div className="flex flex-col gap-4 border-1 border-[var(--light)] rounded-md">
						<div className="flex flex-col gap-4 p-4">
							{' '}
							<SubSectionTitle
								subTitleClass="text-3xl"
								subTagline="Tagline"
								subTitle="Scalable Solutions"
								description="Our solutions are designed to scale with your business, ensuring seamless growth and adaptability."
								buttonText="Explore"
								linkUrl="#DataSecurity"
							/>
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
