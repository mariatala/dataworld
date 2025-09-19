import Link from 'next/link';
import {
	FaFacebook,
	FaInstagram,
	FaXTwitter,
	FaLinkedin,
	FaYoutube,
} from 'react-icons/fa6';

export default function Footer() {
	return (
		<footer className=" bg-[var(--accent)] py-24 md:py-12  flex justify-center items-center ">
			<div className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 flex flex-col justify-center items-center  md:w-3/4 lg:w-4/5">
				<div className=" w-full flex flex-col md:flex-row justify-center sm:justify-between  items-center border-b-1 border-b-[var(--light)] py-12">
					<div className="logo">
						<Link href="/">
							<h1
								className={` w-fit text-lg p-2 border-1 border-solid border-[var(--light)] tracking-wide uppercase font-semibold text-[var(--light)] hover:bg-[var(--accent)] hover:border-[var(--accent)] transition-all duration-500 ease-in-out`}
							>
								DataWorld
							</h1>
						</Link>
					</div>

					<nav className="flex flex-col md:flex-row gap-4 font-semibold text-[var(--light)] tracking-wide">
						<Link href="/#" target="_blank" rel="noopener noreferrer">
							Services
						</Link>
						<Link href="/#" target="_blank" rel="noopener noreferrer">
							Solutions
						</Link>
						<Link href="/#" target="_blank" rel="noopener noreferrer">
							Insights
						</Link>
						<Link href="/#" target="_blank" rel="noopener noreferrer">
							Careers
						</Link>
						<Link href="/#" target="_blank" rel="noopener noreferrer">
							Contact
						</Link>
					</nav>

					<div className="footer-socials flex gap-4 w-fit p-4 text-[var(--light)] text-xl">
						<FaFacebook />
						<FaInstagram />
						<FaXTwitter />
						<FaLinkedin />
						<FaYoutube />
					</div>
				</div>
				<div className="py-8 copyright flex flex-col  justify-center md:flex-row gap-8 items-center w-9/12">
					<p className="text-[var(--light)]">
						&copy;{new Date().getFullYear()} Dataworld. All rights reserved.
					</p>
					<div className="footer_links text-sm text-[var(--light)] flex gap-8">
						<Link href="/#" target="_blank" rel="noopener noreferrer">
							Privacy Policy
						</Link>
						<Link href="/#" target="_blank" rel="noopener noreferrer">
							Terms of service
						</Link>
						<Link href="/#" target="_blank" rel="noopener noreferrer">
							Cookie settings
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
