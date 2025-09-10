import Link from 'next/link';
import { Libre_Bodoni } from 'next/font/google';
const libreBodoni = Libre_Bodoni({ subsets: ['latin'], weight: ['400'] });
export default function Header() {
	return (
		<header className="sticky top-0 left-0 right-0  bg-black/90 backdrop-blur-md shadow-sm mx-0">
			<div className="mx-0 md:mx-12 lg:mx-16 px-4 py-4 flex justify-between items-center ">
				<Link href="/">
					<h1
						className={`${libreBodoni.className} text-4xl tracking-wider font-bold text-slate-300`}
					>
						DataWorld
					</h1>
				</Link>
				<nav>
					<ul className="flex gap-8 items-center uppercase text-sm font-medium tracking-wider text-slate-300">
						<li className=" hover:text-amber-600 transition-colors duration-300">
							{' '}
							<Link href="/">Home</Link>{' '}
						</li>
						<li className=" hover:text-amber-600 transition-colors duration-300">
							{' '}
							<Link href="#about">About</Link>{' '}
						</li>

						<li className=" hover:text-amber-600 transition-colors duration-300">
							{' '}
							<Link href="#services">Services</Link>{' '}
						</li>
						<li className=" hover:text-amber-600 transition-colors duration-300">
							{' '}
							<Link href="#benefits">Benefits</Link>{' '}
						</li>
						<li className=" hover:text-amber-600 transition-colors duration-300">
							{' '}
							<Link href="#teams">Teams</Link>{' '}
						</li>
						<li className=" hover:text-amber-600 transition-colors duration-300">
							{' '}
							<Link href="#contact">Contact</Link>{' '}
						</li>
					</ul>
				</nav>
				<div className="flex items-center gap-4">
					<Link href="/register">
						<button className="bg-amber-600 p-2 rounded-sm">Get A Quote</button>
					</Link>
					<Link href="/login">
						<button className="bg-amber-600 p-2 rounded-sm">
							Make Appointment
						</button>
					</Link>
				</div>
			</div>
		</header>
	);
}
