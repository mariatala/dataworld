import { FaA, FaAnglesRight } from 'react-icons/fa6';
import Image from 'next/image';

type team = {
	name: string;
	title: string;
	image: string;
};

const teamMembers: team[] = [
	{
		name: 'Ubong Gregory Udofia',
		title: 'Chief Technology Officer',
		image: '/one.jpg',
	},
	{
		name: 'Jane Doe',
		title: 'Product Manager',
		image: '/two.jpg',
	},
	{
		name: 'John Smith',
		title: 'Lead Developer',
		image: '/four.jpg',
	},
];
export default function Teams() {
	return (
		<section className="bg-slate-950 min-h-dvh w-full">
			<div className="container mx-auto px-4 md:px-8 lg:px-16">
				<h2 className="text-4xl font-bold text-center text-white pt-10">
					Our Team <FaAnglesRight className="inline-block ml-2" />
				</h2>
				<p className="text-center text-gray-300 mt-4">
					Meet the dedicated professionals behind DataWorld
				</p>
			</div>
			<div className="container mx-auto px-4 md:px-8 lg:px-16 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
				{teamMembers.map((member, index) => (
					<div
						key={index}
						className="group relative h-[480px] bg-slate-800 overflow-hidden rounded-md border-2 border-slate-800"
					>
						<div className="absolute inset-0 bg-slate-950/35 group-hover:bg-slate-950/10 transition-colors duration-300 bg-blend-screen">
							<Image
								src={member.image}
								alt={member.name}
								width={400}
								height={450}
								priority
								className="object-cover object-top w-full h-96  group-hover:scale-105 transition-transform duration-300"
							/>

							<div className="p-4 b text-center">
								<h3 className="text-xl font-semibold">{member.name}</h3>
								<p className="text-slate-600">{member.title}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
