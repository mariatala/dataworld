import { Cormorant_Garamond, Cabin } from 'next/font/google';
import { FaAngleRight } from 'react-icons/fa6';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

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
		<section className=" bg-[var(--accent)] py-24 md:py-12  flex justify-center items-center h-screen md:h-[80vh] ">
			<div className="h-full mx-4 sm:mx-8 md:mx-12 lg:mx-16 flex flex-col md:flex-row justify-center md:justify-between md:gap-8 items-center md:items-start md:pt-16 lg:pt-24 md:w-4/5">
				<div className="flex  h-full flex-col justify-start items-start text-left gap-8 text-[var(--light)]">
					<h2 className="">Team</h2>

					<h2
						className={`${cormorant.className} text-3xl md:text-4xl lg:text-5xl  font-semibold leading-none tracking-wide`}
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
				<div className="mt-16 md:mt-0 flex flex-col gap-8 md:gap-16">
					{[
						{
							image_url: '/team_one.jpg',
							name: 'Michael Chang',
							position: 'CEO',
							description:
								'Technical expert specializing in cloud infrastructure and data security',
							social_links: [
								<Link
									href="https://linkedin.com/in/johndoe"
									target="_blank"
									rel="noopener noreferrer"
								>
									<FaLinkedin />
								</Link>,
								<Link
									href="https://github.com/johndoe"
									target="_blank"
									rel="noopener noreferrer"
								>
									<FaGithub />
								</Link>,
								<Link
									href="https://github.com/johndoe"
									target="_blank"
									rel="noopener noreferrer"
								>
									<FaTwitter />
								</Link>,
							],
						},
						{
							image_url: '/team_two.jpg',
							name: 'Emily Rodriguez',
							position: 'CTO',
							description:
								'Leading expert in advanced analytics and machine learning technologies',
							social_links: [
								<Link
									href="https://linkedin.com/in/janesmith"
									target="_blank"
									rel="noopener noreferrer"
								>
									<FaLinkedin />
								</Link>,
								<Link
									href="https://github.com/janesmith"
									target="_blank"
									rel="noopener noreferrer"
								>
									<FaGithub />
								</Link>,
								<Link
									href="https://twitter.com/janesmith"
									target="_blank"
									rel="noopener noreferrer"
								>
									<FaTwitter />
								</Link>,
							],
						},
						{
							image_url: '/team_three.jpg',
							name: 'David Kim',
							position: 'Chief Data Scientist',
							description:
								'Dedicated to delivering exceptional customer experiences and tailored strategies',
							social_links: [
								<Link
									href="https://linkedin.com/in/janesmith"
									target="_blank"
									rel="noopener noreferrer"
								>
									<FaLinkedin />
								</Link>,
								<Link
									href="https://github.com/janesmith"
									target="_blank"
									rel="noopener noreferrer"
								>
									<FaGithub />
								</Link>,
								<Link
									href="https://twitter.com/janesmith"
									target="_blank"
									rel="noopener noreferrer"
								>
									<FaTwitter />
								</Link>,
							],
						},
					].map((member, index) => (
						<div key={index} className="flex h-full flex-col gap-3">
							<div className="flex  h-fit items-start gap-4">
								<div className="w-16 h-16 rounded-full overflow-hidden">
									<Image
										src={member.image_url}
										alt={member.name}
										width={100}
										height={100}
									/>
								</div>
								<div className="flex flex-col gap-2 text-[var(--light)]">
									<div className="flex flex-col gap-1">
										<span className="font-semibold">{member.name}</span>
										<span className="font-bold">{member.position}</span>
									</div>
									<p className="text-[var(--dark)] text-sm">
										{member.description}
									</p>
									<div className="flex gap-4">
										{member.social_links.map((social, socialIndex) => (
											<div key={socialIndex}>{social}</div>
										))}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
