import React from "react";
import Button from "../../Common/Button/Button";

const Care = () => {
	return (
		<section className="pb-[120px] hero min-h-screen ">
			<div className=" container mx-auto hero-content  flex-col lg:flex-row gap-16">
				<img
					src="./assets/images/treatment.png"
					className="sm:w-3/5 lg:max-w-sm rounded shadow-2xl"
				/>
				<div className="w-5/6 lg:w-1/2">
					<h1 className="text-3xl md:text-5xl font-bold text-accent">
						Exceptional Dental Care, on Your Terms
					</h1>
					<p className="py-6">
						It is a long established fact that a reader will be
						distracted by the readable content of a page when
						looking at its layout. The point of using Lorem Ipsumis
						that it has a more-or-less normal distribution of
						letters,as opposed to using 'Content here, content
						here', making it look like readable English. Many
						desktop publishing packages and web page
					</p>
					<Button>get started</Button>
				</div>
			</div>
		</section>
	);
};

export default Care;
