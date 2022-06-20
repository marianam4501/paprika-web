import React from "react";

function Footer() {
	return (
		<>
			<div className="bg-black h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-5">
				<div >
					<ul>
						<img
                            className="object-cover relative h-20"
                            src="https://rb.gy/iq70yv"
                            alt="Logo Paprika"
                      />
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-dark-orange text-2xl pb-4  hover:text-white cursor-pointer">About</p>
						
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-dark-orange text-2xl pb-4 hover:text-white cursor-pointer">Contact Us</p>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-dark-orange text-2xl pb-4 hover:text-white cursor-pointer">Support</p>
					</ul>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center text-center  p-2 bg-black">
				<h1 className=" text-white">
					© 2022 All rights reserved | Build with ❤ by{" "}
					<span className="hover:text-light-orange font-semibold cursor-pointer">
						Paprika{" "}
					</span>
                    team
				</h1>
			</div>
		</>
	);
}

export default Footer;