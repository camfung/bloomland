
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function TrafficPortal() {
	const [alias, setAlias] = useState("w2");
	const [url, setUrl] = useState("https://www.youtube.com/watch?v=rmrzahr2ses&ab_channel=bbal1breakdown");

	return (
		<div className="min-h-screen bg-slate-100 font-sans leading-relaxed text-slate-800">
			{/* ======= Navbar ======= */}
			<header className="bg-white shadow-sm">
				<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
					<div className="flex items-center gap-2 text-lg font-semibold">
						{/* Fake logo */}
						<svg viewBox="0 0 24 24" className="h-6 w-6 fill-green-600">
							<path d="M4 4h16v4H4zm0 6h10v4H4zm0 6h6v4H4z" />
						</svg>
						<span className="text-sky-700">Traffic</span>
						<span className="text-slate-600">Portal</span>
						<span className="ml-2 text-sm font-normal text-slate-400 hidden sm:inline">A single tool with unlimited options</span>
					</div>
					<nav className="hidden gap-6 text-sm font-medium sm:flex">
						<Link to="/dashboard" className="text-slate-600 hover:underline">
							Dashboard
						</Link>
						<Link to="/auth" className="text-sky-700 hover:underline">
							Register
						</Link>
						<Link to="/auth" className="text-slate-600 hover:underline">
							Login
						</Link>
					</nav>
				</div>
			</header>

			{/* ======= Hero / Shortener ======= */}
			<section className="mx-auto max-w-4xl space-y-6 px-4 py-10">
				<motion.h1
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					className="text-2xl font-semibold text-sky-700 md:text-3xl"
				>
					Unique personalized FREE link shortener &mdash; no registration, no payment. Just use it.
				</motion.h1>
				<p className="text-sm text-slate-500">
					Choose a short, easy‑to‑remember word or generate a random combination of letters. Provide the destination. No
					registration needed!
				</p>

				{/* Form */}
				<div className="grid grid-cols-12 gap-2">
					{/* Alias */}
					<input
						value={alias}
						onChange={(e) => setAlias(e.target.value)}
						className="col-span-2 rounded border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
						placeholder="alias"
					/>

					{/* Destination URL */}
					<input
						value={url}
						onChange={(e) => setUrl(e.target.value)}
						className="col-span-8 rounded border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
						placeholder="https://example.com"
					/>

					{/* Save button */}
					<button className="col-span-2 rounded bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-green-700">
						Save
					</button>
				</div>

				<p className="text-xs text-slate-500">
					Be aware that your trial shortener expires in <span className="font-medium">24 hours</span> since created. In order to keep it and to have a lot of extra services, please create an
					account.
				</p>

				{/* Call‑to‑auth */}
				<div className="flex items-center gap-4">
					<Link to="/auth" className="flex items-center gap-2 rounded bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-emerald-700 transition-colors">
						<svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
							<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 14.59L16.59 13l1.42 1.42L13 19.42 6.99 13.41 8.4 12l4.6 4.59V6h2v10.59Z" />
						</svg>
						Register
					</Link>
					<Link to="/auth" className="flex items-center gap-2 rounded bg-slate-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-slate-700 transition-colors">
						<svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
							<path d="M10 17v-6h4v6h5v-8h3L12 3 2 9h3v8z" />
						</svg>
						Login
					</Link>
				</div>
			</section>

			{/* ======= Features ======= */}
			<section className="mt-10 space-y-0">
				{[
					{
						title: "Just name it",
						desc: "Choose your own meaningful word or easy‑to‑remember code. Define as many aliases or synonyms as you want. Random keys are available also, but how about /6MagicTricks/ instead of https://www.youtube.com/watch?v=EqCeqYTXJpE",
						color: "bg-sky-50",
					},
					{
						title: "Manage your traffic",
						desc: "Following the rules, defined by you, the same link can have different destinations for different devices (phones or computers), user locations, locales (language or timezone), origins (websites, notifications, emails or scanned QR codes) and user history (first time or returning users). You can define a calendar and a schedule for rotating the destinations.",
						color: "bg-green-50",
					},
					{
						title: "Adaptive Marketing",
						desc: "The flexible Load Balancer dispatches the requests in desired proportion. 50/50? 10/20/70? No problem! Integrate the balancer with any marketing data (e.g. sales through different ads) and the frequency of the ads will be optimised for the profit!",
						color: "bg-blue-50",
					},
					{
						title: "Dynamic Content",
						desc: "The rules are applicable not only to redirects, but also to the sources of the content. You can show different images or embedded elements, for example, for different time of the day (local or global).",
						color: "bg-slate-100",
					},
				].map((f, idx) => (
					<div key={idx} className={`${f.color} py-8`}>
						<div className="mx-auto max-w-4xl px-4">
							<h2 className="mb-2 flex items-center gap-2 text-lg font-semibold text-sky-700 md:text-xl">
								{/* icon */}
								<svg className="h-5 w-5 shrink-0 fill-current" viewBox="0 0 24 24">
									<path d="M5 3L19 12 5 21 5 3Z" />
								</svg>
								{f.title}
							</h2>
							<p className="text-sm text-slate-700 md:text-base">{f.desc}</p>
						</div>
					</div>
				))}
			</section>

			{/* ======= Footer  ======= */}
			<footer className="bg-slate-200 py-6 text-center text-xs text-slate-500">
				Screenshots by PagePeeker
			</footer>
		</div>
	);
}
