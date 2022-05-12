import React from "react";

const Button = (props) => {
	return (
		<button className="btn btn-primary bg-gradient-to-r from-secondary to-primary hover:bg-gradient-to-l hover:border-none border-none text-white">
			{props.children}
		</button>
	);
};

export default Button;
