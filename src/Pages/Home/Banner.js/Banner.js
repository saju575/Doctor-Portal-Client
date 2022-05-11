import React from "react";
import "./Banner.css";

const Banner = () => {
	return (
		<div className="container px-6 py-16 mx-auto bg">
			<div className="items-center flex lg:flex-row flex-col-reverse gap-7">
				<div className="w-full lg:w-1/2">
					<div className="lg:max-w-lg">
						<h1 className="text-2xl font-semibold text-gray-800 uppercase dark:text-white lg:text-3xl mb-6">
							Your New Smile Starts Here
						</h1>
						<p className="mt-2 text-gray-600 dark:text-gray-400">
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Porro beatae error laborum ab amet sunt
							recusandae?
						</p>
						<button className=" px-3 py-3 mt-6 text-xs font-medium text-white uppercase transition-colors duration-200 transform bg-gradient-to-r from-secondary to-primary rounded-md lg:w-auto hover:bg-gradient-to-l ">
							get started
						</button>
					</div>
				</div>

				<div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
					<img
						className="w-full h-full lg:max-w-2xl"
						src="./assets/images/chair.png"
						alt="Catalogue-pana.svg"
					/>
				</div>
			</div>
		</div>
	);
};

export default Banner;
