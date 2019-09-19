import React from "react";
import "./VideoElement.css";


const VideoElement = ({ showObjects, hideObjects }) => {
	return (
		<div className="video-element">
			<video onPlay={showObjects} 
						 onPause={hideObjects}
						 preload="true"
						 controls
						 width="900" 
						 height="600" 
						 loop 
						 muted>
				<source src="https://static.videezy.com/system/resources/previews/000/038/133/original/FHD0110.mp4" type="video/mp4" />
			</video>
		</div>
   )
}

export default VideoElement;