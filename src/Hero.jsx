import React from 'react';
import sentinelLogo from './assets/sentinel-logo.png';
import dashboardPreview from './assets/dashboard-preview.svg';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
	return (
		<div className="min-h-screen bg-[#020817] text-white relative overflow-hidden">
			<header className="w-full border-b border-[#ffffff14] backdrop-blur-[20px]">
				<div className="flex justify-between items-center max-w-[1024px] mx-auto w-full h-16 pl-[max(env(safe-area-inset-left),24px)] pr-[max(env(safe-area-inset-right),24px)]">
					<div className="flex items-center gap-2">
						<img
							src={sentinelLogo}
							alt="Sentinel Logo"
							className="h-5"
						/>
					</div>
					<nav className="flex items-center gap-2">
						<a
							href="#features"
							className="text-[13px] font-[410] text-[#8A8F98] transition-[border,background-color,color,box-shadow,opacity,filter,transform] duration-[.16s] ease-[var(--ease-out-quad)] flex items-center gap-1 py-[6px] px-[13px] rounded-[8px] hover:bg-[#1A1D24]"
						>
							Features
						</a>
						<a
							href="https://calendly.com/rayan-dabbagh/sentinel-demo?month=2025-06"
							target="_blank"
							rel="noopener noreferrer"
							className="bg-white text-black text-[13px] font-[410] py-[6px] px-[13px] rounded-[8px] hover:bg-gray-200 transition"
						>
							Book a demo
						</a>
					</nav>
				</div>
			</header>

			<main className="max-w-[1024px] mx-auto mt-[72px] pl-[max(env(safe-area-inset-left),24px)] pr-[max(env(safe-area-inset-right),24px)]">
				<div className="inline-block text-xs font-medium px-[14px] py-[10px] bg-[#081021] text-[#B8C4D7] border border-[#101B2D] rounded-full mb-3">
					Built for homes and businesses
				</div>

				<h1 className="text-4xl md:text-[56px] font-[510] leading-[1.1] tracking-[-0.03em] [font-variation-settings:'opsz'_28]">
					Turn any camera into an AI
					<br className="hidden md:block" />
					security guard you can talk to.
				</h1>

				<p className="text-white/70 text-[1.3125rem] mt-6 max-w-[70%] font-[400] leading-[1.33] tracking-[-0.0012em]">
					Legacy security sucks: It makes you feel safe, but the data proves you're not. Sentinel
					sees, reasons, and acts faster than any human guard — with human precision now possible at scale.
				</p>

				<div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
					<a
						href="https://calendly.com/rayan-dabbagh/sentinel-demo?month=2025-06"
						target="_blank"
						rel="noopener noreferrer"
						className="bg-white text-black text-[15px] font-[410] h-[40px] py-[6px] px-[17px] rounded-[10px] transition-[border,background-color,color,box-shadow,opacity,filter,transform] duration-[.16s] ease-[var(--ease-out-quad)] hover:bg-gray-200 flex items-center"
					>
						Book a demo
					</a>

					<button className="text-[15px] transition-[border,background-color,color,box-shadow,opacity,filter,transform] duration-[.16s] ease-[var(--ease-out-quad)] flex items-center gap-1 rounded-[8px] py-[6px] px-[13px] h-[40px] hover:bg-[#1A1D24]">
						<span className="bg-gradient-to-r from-white to-[#8A8F98] bg-clip-text text-transparent">
							20+ deployments across homes and businesses
						</span>
						<ChevronRight className="w-4 h-4 text-[#8A8F98]" />
					</button>
				</div>
			</main>

			<div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[140%] h-[60vh] bg-gradient-to-b from-transparent via-[#616A731F] to-transparent pointer-events-none" />

			<div className="w-screen bg-[#020817] mt-32 relative">
				<div className="[perspective:4000px] [perspective-origin:100%_0] [transform-style:preserve-3d] h-[700px] relative">
					<div className="rounded-2xl overflow-hidden [transform:translateX(5%)_scale(1)_rotateX(45deg)_rotateY(28deg)_rotate(326deg)] [transform-origin:top_left] relative w-[1600px] z-10">
						<img
							src={dashboardPreview}
							alt="Dashboard preview"
							className="w-full rounded-2xl shadow-2xl object-cover opacity-90"
						/>
						<div className="absolute inset-0 border border-[#181A24] rounded-2xl [mask-image:linear-gradient(to_left,transparent_0%,#020817_10%)]" />
					</div>
				</div>
				<div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-b from-transparent from-[0%] via-[rgb(2,8,23,0.95)] via-[60%] to-[rgb(2,8,23)] z-0"></div>
			</div>
		</div>
	);
}
