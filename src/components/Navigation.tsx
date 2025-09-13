import Link from 'next/link';

export default function Navigation() {
	return (
		<div className="mx-4 md:mx-12 lg:mx-16 py-8 flex justify-between items-center text-[var(--light)] bg-blend-darken md:bg-blend-normal">
			<div className="flex flex-col items-start lg:flex-row gap-8 lg:items-center px-2 py-1">
				<Link href="/">
					<h1
						className={` w-fit text-xl p-2 border-2 border-solid border-[var(--light)] tracking-wide uppercase font-semibold text-[var(--light)] hover:bg-[var(--accent)] hover:border-[var(--accent)] transition-all duration-500 ease-in-out`}
					>
						DataWorld
					</h1>
				</Link>
				<nav className='hidden md:block'>
					<ul className="flex flex-col items-start md:flex-row gap-8 imd:items-center font-semibold uppercase text-xs tracking-widest">
						<li className=" hover:underline decoration-[var(--accent)] underline-offset-[4px] decoration-2 transition-all duration-500 ease-in-out">
							{' '}
							<Link href="/">Home</Link>{' '}
						</li>
						<li className="hover:underline decoration-[var(--accent)] underline-offset-[4px] decoration-2 transition-all duration-500 ease-in-out">
							{' '}
							<Link href="#about">About</Link>{' '}
						</li>

						<li className="hover:underline decoration-[var(--accent)] underline-offset-[4px] decoration-2 transition-all duration-500 ease-in-out">
							{' '}
							<Link href="#services">Services</Link>{' '}
						</li>
						<li className="hover:underline decoration-[var(--accent)] underline-offset-[4px] decoration-2 transition-all duration-500 ease-in-out">
							{' '}
							<Link href="#benefits">Benefits</Link>{' '}
						</li>
						<li className="hover:underline decoration-[var(--accent)] underline-offset-[4px] decoration-2 transition-all duration-500 ease-in-out">
							{' '}
							<Link href="#teams">Teams</Link>{' '}
						</li>
						<li className="hover:underline decoration-[var(--accent)] underline-offset-[4px] decoration-2 transition-all duration-500 ease-in-out">
							{' '}
							<Link href="#contact">Contact</Link>{' '}
						</li>
					</ul>
				</nav>
			</div>
			<div className="flex gap-4 ">
				<Link href="/register">
					<button className="button-teal button-data w-fit">
						Book a strategy call
					</button>
				</Link>
			
			</div>{' '}
		</div>
	);
}
