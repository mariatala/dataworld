type benefit = {
	icon: string;
	title: string;
	description: string;
};

const benefits: benefit[] = [
	{
		icon: '📊',
		title: 'Data-Driven Insights',
		description:
			'Leverage data analytics to gain actionable insights and drive business growth.',
	},
	{
		icon: '💡',
		title: 'Innovative Solutions',
		description:
			'Implement cutting-edge technologies to streamline operations and enhance productivity.',
	},
	{
		icon: '👩‍💼',
		title: 'Expert Support',
		description:
			'Access a team of data experts dedicated to helping you achieve your business objectives.',
	},
	{
		icon: '🔒',
		title: 'Data Security',
		description:
			'Ensure the safety and privacy of your data with robust security measures.',
	},
	{
		icon: '🌐',
		title: 'Scalable Infrastructure',
		description:
			'Build a flexible and scalable infrastructure to support your growing data needs.',
	},
];

export default function About() {
	return (
		<>
			<div className="flex flex-col md:flex-row gap-8 justify-center items-center text-[var(--light)] my-8 mx-4 md:mx-12 lg:mx-16">
				{benefits.map((benefit, index) => (
					<div
						key={index}
						className="group hover:bg-[var(--less-light)]  w-96 h-36 relative flex flex-col items-center justify-center gap-4 p-4 border-1 border-[var(--less-light)] rounded-md transition-all duration-700 ease-in-out cursor-pointer"
					>
						<span className="group-hover:hidden">{benefit.icon}</span>
						<h2 className="group-hover:hidden uppercase text-sm font-bold tracking-wider">
							{benefit.title}
						</h2>
						<p className="absolute inset-0 p-4 z-20 hidden group-hover:block transition-all duration-700 ease-in-out self-center text-center text-sm">
							{benefit.description}
						</p>
					</div>
				))}
			</div>
		</>
	);
}
