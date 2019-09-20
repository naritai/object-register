type SVGAnimateProps = {
	attributeType?: string;
	attributeName?: string;
	from?: string;
	to?: string;
	dur?: string;
	repeatCount?: string;
	className: string;
};

export function animateRect(rect: SVGRectElement, options: SVGAnimateProps) {
	// TODO: Legacy
	// const animate = document.createElementNS(
	// 	"http://www.w3.org/2000/svg",
	// 	"animate"
	// );

	// animate.setAttribute("attributeType", options.attributeName || "XML");
	// animate.setAttribute("attributeName", options.attributeName);
	// animate.setAttribute("from", options.from);
	// animate.setAttribute("to", options.to);
	// animate.setAttribute("dur", options.dur || "5s");
	// animate.setAttribute("repeatCount", options.repeatCount || "1");
	// animate.setAttribute("additive", "sum");

	// rect.appendChild(animate);
	// return rect;

	rect.classList.add(options.className);
}
