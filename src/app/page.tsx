import Image from 'next/image';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Teams from '@/components/sections/Teams';
import Benefits from '@/components/sections/Benefits';
import Services from '@/components/sections/Services';

export default function Home() {
	return (
		<main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
			<Hero/>
			<About />
			<Services />
			<Teams />
			<Benefits />
		</main>
	);
}
