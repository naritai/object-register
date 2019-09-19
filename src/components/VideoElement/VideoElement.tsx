import React from "react";
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
				width="900"
				height="600"
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
