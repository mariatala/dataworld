import Link from 'next/link';
import { FaA, FaAnglesRight } from 'react-icons/fa6';
export default function Footer() {
	return (
		<footer className="mx">
			<div className="flex gap-10 mx-0 md:mx-8 lg:mx-16 py-16">
				<div className="about flex-1">
					<h2 className="text-3xl font-bold text-amber-500 flex items-center gap-2">
						<FaA className="rotate-90" />
						DataWorld
					</h2>
					<p className="mt-4">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
						quisquam.
					</p>
				</div>
				<div className="policy flex-1">
					<h2 className="text-3xl font-bold text-amber-500 flex items-center gap-2">
						<FaAnglesRight className="rotate-90" />
						Privacy Policy
					</h2>
					<p className="mt-4">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
						quisquam.
					</p>
				</div>
				<div className="quick-links flex-1">
					<h2 className="text-3xl font-bold text-amber-500 flex items-center gap-2">
						<FaAnglesRight className="rotate-90" />
						Quick Links
					</h2>
					<p className="mt-4">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
						quisquam.
					</p>
				</div>

			</div>

			<div className="footer-bottom flex justify-center items-center py-4 bg-gray-900 text-white">
				<p>
					Copyright &copy; {new Date().getFullYear()} All rights reserved |
					DataWorld
				</p>
			</div>
		</footer>
	);
}
