
import { useState } from "react";
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/**
 * Dashboard component showing all short links with edit/delete controls.
 * • Tailwind wrapper for layout consistency.
 * • MUI Table for rich interactions / accessibility.
 */
export default function Dashboard() {
	// Mock data — replace with fetch to your API.
	const [links, setLinks] = useState([
		{
			id: 1,
			alias: "w2",
			target: "https://www.youtube.com/watch?v=rmrzahr2ses&ab_channel=bbal1breakdown",
			created: "2025-06-29",
		},
		{
			id: 2,
			alias: "6MagicTricks",
			target: "https://www.youtube.com/watch?v=EqCeqYTXJpE",
			created: "2025-06-29",
		},
	]);

	const handleDelete = (id) => {
		// TODO: call DELETE /api/links/:id
		setLinks((prev) => prev.filter((l) => l.id !== id));
	};

	const handleEdit = (id) => {
		// TODO: open modal or navigate to edit form
		console.log("edit", id);
	};

	return (
		<div className="min-h-screen bg-slate-100 font-sans text-slate-800">
			{/* ======= Header ======= */}
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

			{/* ======= Table ======= */}
			<section className="mx-auto max-w-5xl px-4 py-12">
				<motion.h1
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3 }}
					className="mb-6 text-2xl font-semibold text-sky-700"
				>
					Your Short Links
				</motion.h1>
				<Paper elevation={2} className="shadow-md">
					<TableContainer>
						<Table size="small" aria-label="links table">
							<TableHead sx={{ backgroundColor: "#f1f5f9" }}>
								<TableRow>
									<TableCell className="font-medium">Alias</TableCell>
									<TableCell>Destination URL</TableCell>
									<TableCell>Created</TableCell>
									<TableCell align="right">Actions</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{links.map((row) => (
									<TableRow key={row.id} hover>
										<TableCell className="font-semibold text-sky-700">/{row.alias}</TableCell>
										<TableCell className="truncate max-w-xs md:max-w-lg">
											<a
												href={row.target}
												target="_blank"
												rel="noreferrer"
												className="text-sky-600 underline hover:text-sky-800"
											>
												{row.target}
											</a>
										</TableCell>
										<TableCell>{row.created}</TableCell>
										<TableCell align="right">
											<IconButton size="small" onClick={() => handleEdit(row.id)}>
												<EditIcon fontSize="small" />
											</IconButton>
											<IconButton size="small" onClick={() => handleDelete(row.id)}>
												<DeleteIcon fontSize="small" />
											</IconButton>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</Paper>
			</section>

			<footer className="bg-slate-200 py-6 text-center text-xs text-slate-500">
				© {new Date().getFullYear()} Traffic Portal
			</footer>
		</div>
	);
}
