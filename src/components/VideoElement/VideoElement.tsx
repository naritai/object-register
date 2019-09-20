import React from "react";
import { height, width } from "./params";
import "./VideoElement.css";

type Props = {
	showObjects: (e: React.UIEvent<any>) => void;
	hideObjects: (e: React.UIEvent<any>) => void;
};

export const VideoElement = ({ showObjects, hideObjects }: Props) => {
	return (
		<div className="video-element">
			<video
				onPlay={showObjects}
				onPause={hideObjects}
				preload="true"
				controls
				width={width}
				height={height}
				loop
				muted
				className="video"
			>
				<source
					src="https://static.videezy.com/system/resources/previews/000/038/133/original/FHD0110.mp4"
					type="video/mp4"
				/>
			</video>
		</div>
	);
};
