import { useEffect, useState } from "react";

type SVGFiledProps = {
	width: string;
	height: string;
	fill: string;
	viewBox?: string;
	id?: string;
};

export function useSVGField(options: SVGFiledProps) {
	const [SVGFiled, setSVGFiled] = useState<any>(
		useEffect(() => {
			const svg1 = document.createElementNS(
				"http://www.w3.org/2000/svg",
				"svg"
			);

			svg1.setAttribute("width", options.width);
			svg1.setAttribute("height", options.height);
			svg1.setAttribute("fill", options.fill);
			svg1.setAttribute("id", options.id || "");

			setSVGFiled(svg1);

			return () => {
				try {
					const parent = svg1.parentNode as any;
					parent.removeChild(svg1);
				} catch (err) {
					console.error("Error: cannot remove the svg node from the DOM");
					console.error(err.message);
				}
			};
		}, [])
	);

	return SVGFiled;
}
