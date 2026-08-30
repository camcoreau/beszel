import { prependBasePath } from "./router"

export function Logo({ className }: { className?: string }) {
	return (
		<img
			src={prependBasePath("/static/camcore-logo.svg?v=2026-08-30-approved")}
			alt="CamCore"
			className={className}
			style={{
				height: "2.5rem",
				width: "auto",
				objectFit: "contain",
				padding: "0.3rem 0.5rem",
				backgroundColor: "#07162f",
				borderRadius: "0.5rem",
			}}
			draggable={false}
		/>
	)
}
