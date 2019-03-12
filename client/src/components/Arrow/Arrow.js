import React from "react";
import "./arrowStyle.css";

const Arrow = ({ direction, clickFunction, glyph }) => (
	<span 
		className={ `slide-arrow ${direction}` } 
		onClick={ clickFunction }>
		{ glyph } 
	</span>
);

export default Arrow;