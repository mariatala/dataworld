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

export default function Hero() {
	return (
		<section className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 flex justify-between h-10/12">
			<div className="flex flex-col gap-8 justify-end p-4 pb-24 leading-tight text-left">
				<h1 className={`${cormorant.className}  text-lg lg:text-6xl  tracking-normal`}>
					{' '}
					Revolutionizing business success with dataworld solutions.
				</h1>
				<div className="flex gap-4">
					<button className="button-teal button-data w-fit">
						Explore our services
					</button>
					<button className="button-teal-outline button-data w-fit">
						Explore our services
					</button>
				</div>
			</div>
			<div className="w-full ">
				<p className={`${cabin.className} mt-4 font-thin tracking-wide leading-loose text-base text-left`}>
					Empowering businesses with data-driven insights and customized
					solutions for successful strategic decision-making with our modern
					amenities and client-focused philosophy. Discover the power of data
					transformation with us.
				</p>
			</div>
		</section>
	);
}
