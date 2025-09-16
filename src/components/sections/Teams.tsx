import { Cormorant_Garamond, Cabin } from 'next/font/google';
import { FaAngleRight } from 'react-icons/fa6';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

const cormorant = Cormorant_Garamond({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
});
const cabin = Cabin({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
});
export default function Teams() {
	return (
		<section className=" bg-[var(--accent)] py-24 flex  flex-col justify-center items-center">
			<div className="flex flex-col md:flex-row justify-between items-center">
				<div className="flex flex-col text-left gap-8 text-[var(--light)]">
					<h2 className="">Team</h2>

					<h2
						className={`${cormorant.className} text-2xl lg:text-5xl font-semibold leading-none tracking-wide`}
					>
						{' '}
						Our Professional Team
					</h2>
					<p>
						Visionary leader with 15 years of experience in enterprise data
						solutions
					</p>

					<button className=" text-[var(--dark)] border-1 rounded-sm border-[var(--dark)] px-4 py-1 w-fit  hover:bg-[var(--dark)] hover:text-[var(--light)] transition-colors duration-500">
						Open Position
					</button>
				</div>
				<div className="mt-16 md:mt-0 flex flex-col gap-8 md:gap-4">
					{[
						{
							name: 'Michael Chang',
							position: 'CEO',
							description:
								'Technical expert specializing in cloud infrastructure and data security',
							social_links: [
								'https://linkedin.com/in/johndoe',
								'https://github.com/johndoe',
							],
						},
						{
							name: 'Emily Rodriguez',
							position: 'CTO',
							description:
								'Leading expert in advanced analytics and machine learning technologies',
							social_links: [
								'https://linkedin.com/in/janesmith',
								'https://github.com/janesmith',
							],
						},
						{
							name: 'David Kim',
							position: 'Chief Data Scientist',
							description:
								'Dedicated to delivering exceptional customer experiences and tailored strategies',
							social_links: [
								'https://linkedin.com/in/janesmith',
								'https://github.com/janesmith',
							],
						},
					].map((member, index) => (
						<div key={index} className="flex flex-col">
							<span className="font-semibold">{member.name}</span>
							<span className="text-sm">{member.position}</span>
							<p className="text-[var(--less-light)] text-sm">
								{member.description}
							</p>
							<div className="flex gap-4 mt-2">
								{member.social_links.map((link, linkIndex) => (
									<a
										key={linkIndex}
										href={link}
										className="text-[var(--light)] hover:underline"
										target="_blank"
										rel="noopener noreferrer"
									>
										{link}
									</a>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
