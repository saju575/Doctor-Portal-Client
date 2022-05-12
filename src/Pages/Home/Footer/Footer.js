import React from "react";

const Footer = () => {
	return (
		<footer
			className="container mx-auto px-2 py-16"
			style={{
				background: "url('./assets/images/footer.png') no-repeat",
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<div>
				<div className="footer justify-between p-10  text-accent">
					<div>
						<span className="footer-title">Services</span>
						<a className="link link-hover">Emargency Checkup</a>
						<a className="link link-hover">Monthly Checkup</a>
						<a className="link link-hover">Weekly Checkup</a>
						<a className="link link-hover">Deep Chechup</a>
					</div>
					<div>
						<span className="footer-title">oral health</span>
						<a className="link link-hover">Fluoride Treatment</a>
						<a className="link link-hover">Cavity Filling</a>
						<a className="link link-hover">Teath Whitening</a>
					</div>
					<div>
						<span className="footer-title">Our address</span>
						<span>New york - 1000101 Hudson</span>
					</div>
				</div>
			</div>
			<div>
				<p className="text-center">
					Copyright © {new Date().getFullYear()} - All right reserved
					by ACME Industries Ltd
				</p>
			</div>
		</footer>
	);
};

export default Footer;
