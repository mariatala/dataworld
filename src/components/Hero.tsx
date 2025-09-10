import { Archivo_Narrow } from "next/font/google";
const archivoNarrow = Archivo_Narrow({ subsets: ["latin"] });

export default function Hero() {
	return (
		<section className="mx-8 md:mx-12 lg:mx-16 h-full flex flex-col gap-8 justify-start items-start text-center text-[var(--light)] py-20 sm:py-24 md:py-32">
			<h1
				className={`${archivoNarrow.className} font-extrabold bg-clip-text text-transparent bg-[url('/bg_text.jpg')] text-left uppercase tracking-tight bg-cover bg-center bg-no-repeat
					text-4xl sm:text-6xl md:text-7xl xl:text-9xl leading-tight`}
			>
				Revolutionizing business success with data
			</h1>
			<p className="mt-4 font-light tracking-wider text-base md:text-lg text-left">
				Empowering businesses with data-driven insights and innovative solutions.
			</p>
		</section>
	);
}
