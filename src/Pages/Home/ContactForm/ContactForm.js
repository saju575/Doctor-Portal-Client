import React from "react";
import Button from "../../Common/Button/Button";

const ContactForm = () => {
	return (
		<section
			className="py-12 px-2"
			style={{
				background: "url('./assets/images/appointment.png') no-repeat",
				backgroundSize: "cover",
			}}
		>
			<div className="container mx-auto flex flex-col items-center justify-center">
				<div>
					<p className="text-secondary font-bold text-center">
						Contact Us
					</p>
					<h3 className="text-white text-3xl my-5 text-center">
						Stay connected with us
					</h3>
				</div>
				<div className="w-4/5 md:w-3/5 lg:w-5/12">
					<form>
						<input
							type="email"
							placeholder="Email address"
							className="input w-full  block my-4"
							required
						/>
						<input
							type="text"
							placeholder="Subject"
							className="input w-full block my-4"
							required
						/>
						<textarea
							className="textarea block w-full my-4"
							rows={"6"}
							placeholder="Your message"
							required
						></textarea>
						<div className="text-center">
							<Button>Submit</Button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default ContactForm;
