import { prependBasePath } from "./router"

export function Logo({ className }: { className?: string }) {
	return (
		<img
			src={prependBasePath("/static/camcore-logo.svg")}
			alt="CamCore – Cameron Family Secure Network"
			className={className}
			style={{ height: "2.5rem", width: "auto", objectFit: "contain" }}
			draggable={false}
		/>
	)
}
