
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/**
 * Single-page Login / Sign‑Up component.
 * Mirrors the TrafficPortal look & feel (Tailwind + soft shadows).
 */
export default function AuthPortal() {
	const [mode, setMode] = useState("login"); // "login" | "signup"
	const [form, setForm] = useState({ email: "", password: "" });

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// TODO: hook up to API; here we just log
		console.log(`${mode} with`, form);
	};

	return (
		<div className="min-h-screen bg-slate-100 font-sans text-slate-800">
			{/* ======= Navbar (re‑use) ======= */}
			<header className="bg-white shadow-sm">
				<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
					<Link to="/" className="flex items-center gap-2 text-lg font-semibold hover:opacity-80 transition-opacity">
						<svg viewBox="0 0 24 24" className="h-6 w-6 fill-green-600">
							<path d="M4 4h16v4H4zm0 6h10v4H4zm0 6h6v4H4z" />
						</svg>
						<span className="text-sky-700">Traffic</span>
						<span className="text-slate-600">Portal</span>
					</Link>
				</div>
			</header>

			{/* ======= Auth Card ======= */}
			<section className="mx-auto flex max-w-md flex-col items-center px-4 py-16 sm:px-0">
				<motion.div
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					className="w-full rounded-2xl bg-white p-8 shadow-md"
				>
					<h1 className="mb-6 text-center text-2xl font-semibold text-sky-700 capitalize">
						{mode === "login" ? "Login" : "Create an account"}
					</h1>

					{/* Toggle buttons */}
					<div className="mb-8 flex justify-center gap-4">
						<button
							onClick={() => setMode("login")}
							className={`rounded px-4 py-2 text-sm font-medium shadow-sm transition ${mode === "login"
									? "bg-sky-600 text-white"
									: "bg-slate-200 text-slate-700 hover:bg-slate-300"
								}`}
						>
							Login
						</button>
						<button
							onClick={() => setMode("signup")}
							className={`rounded px-4 py-2 text-sm font-medium shadow-sm transition ${mode === "signup"
									? "bg-emerald-600 text-white"
									: "bg-slate-200 text-slate-700 hover:bg-slate-300"
								}`}
						>
							Sign&nbsp;Up
						</button>
					</div>

					{/* Form */}
					<form onSubmit={handleSubmit} className="space-y-4">
						<div>
							<label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-600">
								Email
							</label>
							<input
								id="email"
								name="email"
								type="email"
								required
								value={form.email}
								onChange={handleChange}
								className="w-full rounded border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
								placeholder="you@example.com"
							/>
						</div>

						<div>
							<label htmlFor="password" className="mb-1 block text-sm font-medium text-slate-600">
								Password
							</label>
							<input
								id="password"
								name="password"
								type="password"
								required
								value={form.password}
								onChange={handleChange}
								className="w-full rounded border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
								placeholder="••••••••"
							/>
						</div>

						<button type="submit" className="mt-6 w-full rounded bg-sky-600 py-2 text-sm font-semibold text-white shadow hover:bg-sky-700">
							{mode === "login" ? "Login" : "Create account"}
						</button>
					</form>
				</motion.div>
			</section>

			<footer className="bg-slate-200 py-6 text-center text-xs text-slate-500">
				© {new Date().getFullYear()} Traffic Portal
			</footer>
		</div>
	);
}
