import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
export default function Header() {
	return (
		<header className="relative min-h-max h-dvh bg-[url('/bg_image.jpg')] bg-cover bg-center bg-no-repeat backdrop:blur-xl">
			<div className="absolute inset-0 bg-[var(--dark)]/50  backdrop-blur-2xl">
				<Navigation />
				<Hero />
			</div>
		</header>
	);
}
