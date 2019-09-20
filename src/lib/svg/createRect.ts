type SVGRectProps = {
	width: string;
	height: string;
	fill?: string;
	stroke: string;
	strokeWidth?: string;
	bottom?: string;
	left?: string;
	right?: string;
	top?: string;
	id?: string;
};

export function createRect(options: SVGRectProps): SVGRectElement {
	const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");

	rect.setAttribute("width", options.width);
	rect.setAttribute("height", options.height);
	rect.setAttribute("fill", options.fill || "none");
	rect.setAttribute("stroke", options.stroke);
	rect.setAttribute("stroke-width", options.strokeWidth || "1");
	rect.setAttribute("left", options.left || "0");
	rect.setAttribute("top", options.top || "0");
	rect.setAttribute("bottom", options.bottom || "");
	rect.setAttribute("right", options.right || "");
	rect.setAttribute("id", options.id || "");

	// enable to trigger events on svg
	rect.style.pointerEvents = "all";

	return rect;
}
