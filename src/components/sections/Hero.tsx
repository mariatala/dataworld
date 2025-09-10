'use client';
import Header from '../Header';
import { useEffect, useRef } from 'react';
export default function Hero() {
	const videoRef = useRef<HTMLVideoElement>(null);
	useEffect(() => {
		videoRef.current!.playbackRate = 0.2; // Set background video playback speed to 0.2x
	}, []);
	return (
		<section className=" relative h-screen w-full flex overflow-hidden">
			{/* Background Video */}
			<video
				ref={videoRef}
				className="absolute inset-0 w-full h-full object-cover"
				autoPlay
				loop
				muted
			>
				<source src="/videos/bg_hero.mp4" type="video/mp4" />
			</video>
			{/* Gradient Overlay */}
			<div className="absolute inset-0 bg-gradient-to-b from-slate-950/100 via-slate-900/80 to-slate-950/95"></div>
			{/* Content */}
			<div className="relative z-10 container mx-auto px-4 flex flex-col  h-full text-center text-white">
				<Header />
			</div>
		</section>
	);
}
