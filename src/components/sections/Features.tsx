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
		<section id="features" className=" bg-gray-400">
			<div className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 my-24 flex flex-col justify-center items-center">
				<div className="flex flex-col justify-center items-center gap-8 my-24 tex-center">
					<h2>Features</h2>

					<h2
						className={`${cormorant.className} text-lg sm:text-2xl lg:text-5xl font-thin text-center leading-none tracking-wide`}
					>
						{' '}
						Core Features Overview
					</h2>
					<p>Empower Our Business with our Cutting-Edge Solutions</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2  gap-8">
					<div className="flex items-start">
						<div className='flex flex-col gap-4'>
							{' '}
							<h3>Tagline</h3>
							<h4>Data Storage Solutions</h4>
							<p>
								Our data storage solutions provide secure and scalable options
								for your business needs.
							</p>
							<button className="group button-data w-fit hover:translate-x-0.5 transition-all duration-300">
								Explore{' '}
								<FaAngleRight className="inline-block  group-hover:translate-x-1 transition-transform duration-300" />
							</button>
						</div>
						<div>
							<Image
								src="/features.jpg"
								width={500}
								height={500}
								alt="Data Storage Solutions"
							/>
						</div>
					</div>

					<div>
						{' '}
						<h3>tagline</h3>
						<h4>Scalable Solutions</h4>
						<p>
							Our solutions are designed to scale with your business, ensuring
							seamless growth and adaptability.
						</p>
						<div className="flex gap-4">
							<button className="button-teal button-data w-fit">
								Explore our services
							</button>
							<button className="button-teal-outline button-data w-fit">
								Explore our services
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
