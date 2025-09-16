import About from '@/components/sections/About';
import Header from '@/components/sections/Header';
import Features from '@/components/sections/Features';
import Testimonials from '@/components/sections/Testimonials';
import Process from '@/components/sections/Process';
import Benefits from '@/components/sections/Benefits';
import Teams from '@/components/sections/Teams';

export default function Home() {
	return (
		<main className="">
			<Header />
			<About />
			<Features />
			<Testimonials />
			<Process />
			<Benefits />
			<Teams />
		</main>
	);
}
