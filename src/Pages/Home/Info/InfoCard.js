import React from "react";

const InfoCard = (props) => {
	const { img, header, description, bgColor } = props.t;
	return (
		// <div
		// 	className={`flex max-w-md mx-auto overflow-hidden  rounded-lg shadow-lg dark:bg-gray-800 ${bgColor}`}
		// >
		// 	<div className=" ">
		// 		<img className="w-24" src={img} alt="" />
		// 	</div>

		// 	<div className=" p-4 md:p-4">
		// 		<h1 className="text-2xl font-bold text-white">{header}</h1>

		// 		<p className="mt-2 text-sm text-white">{description}</p>
		// 	</div>
		// </div>

		<div className="flex">
			<div
				className={`flex justify-center items-center flex-col md:flex-row md:max-w-xl rounded-lg  shadow-lg ${bgColor} w-full md:w-96  p-3`}
			>
				<img className=" w-20 " src={img} alt="me" />
				<div className="p-6 flex flex-col justify-center">
					<h5 className="text-white text-2xl font-medium mb-2 md:text-left text-center">
						{header}
					</h5>
					<p className="text-white text-base mb-4 md:text-left text-center">
						{description}
					</p>
				</div>
			</div>
		</div>
	);
};

export default InfoCard;
