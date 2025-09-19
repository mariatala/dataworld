import { LuBrainCircuit } from 'react-icons/lu';
import { FaCartPlus } from "react-icons/fa6";
import { Cormorant } from 'next/font/google';
import Image from 'next/image';
const cormorant = Cormorant({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
});

export default function Testimonials() {
	return (
		<section
			id="testimonials"
			className="py-24 flex justify-center items-center"
		>
			<div className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 flex flex-col justify-center items-center  md:w-3/4 lg:w-4/5">
				<h2
					className={`${cormorant.className}text-3xl md:text-4xl lg:text-5xl font-semibold text-left leading-none tracking-wide`}
				>
					{' '}
					Customer Testimonials
				</h2>
				<p className="text-lg mt-8">What our clients say about us.</p>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-24">
					{[
						{
							id: 1,
							rating: 5,
							name: 'John Doe',
							photo: '/john.jpg',
							position: 'CEO, Company Inc.',
							feedback:
								' We DataWorld transformed our business with their innovative data solutions. Highly recommend!',
							project: 'E-commerce Analytics Platform',
							icon: <FaCartPlus />,
						},
						{
							id: 2,
							rating: 4,
							name: 'Jane Smith',
							photo: '/jane.jpg',
							position: 'CTO, Tech Solutions',
							feedback:
								'Professional and reliable service. Our data management has never been better.',
							project: 'AI-Powered Chatbot',
							icon: <LuBrainCircuit />
						},
						// {
						// 	id: 3,
						// 	rating: 5,
						// 	name: 'Mike Johnson',
						// 	photo: '/mike.jpg',
						// 	position: 'Founder, Startup Hub',
						// 	feedback:
						// 		'Exceptional expertise in data analytics. Helped us make informed decisions.',
						// 	project: 'Startup Growth Dashboard',
						// 	logo: '/company3.png',
						// },
						
					].map((testimonial, id) => {
						return (
							<div className="flex flex-col py-4 px-8" key={id}>
								{testimonial.rating === 5 ? (
									<div className="text-[var(--dark)]">★★★★★</div>
								) : testimonial.rating === 4 ? (
									<div className="text-[var(--dark)]">★★★★☆</div>
								) : testimonial.rating === 3 ? (
									<div className="text-[var(--dark)]">★★★☆☆</div>
								) : testimonial.rating === 2 ? (
									<div className="text-[var(--dark)]">★★☆☆☆</div>
								) : (
									<div className="text-[var(--dark)]">★☆☆☆☆</div>
								)}
								<p className="mt-4 text-base text-[var(--less-dark)]">
									"{testimonial.feedback}"
								</p>
								<div className="mt-4 flex flex-col md:flex-row items-start gap-4 ">
									<div className="flex gap-4 items-center ">
										<div className=" w-12 h-12 rounded-full overflow-hidden">
											<Image
												src={testimonial.photo}
												alt={testimonial.name}
												height={50}
												width={50}
												objectFit="none"
											/>
										</div>
										<div className="flex flex-col gap-1">
											<p className=" font-semibold">- {testimonial.name}</p>
											<p className="text-sm text-[var(--less-light)]">
												{testimonial.position}
											</p>
										</div>
									</div>
									<div className="flex flex-col gap-1 md:border-l-2 border-l-0 border-[var(--dark)] md:pl-4 ml-4">
										<p className="text-sm">Project: {testimonial.project}</p>
										<div>{testimonial.icon}</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
