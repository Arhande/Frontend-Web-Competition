import React from 'react';

function Footer() {
	return (
		<footer className="py-16 bg-thirdtailwind text-white flex flex-col md:flex-row  w-full">
			<div className="md:w-1/2">
				<div className="w-8/12 mx-auto">
					<p className="text-xl font-bold">Hubungi Kami</p>
					<div className="flex gap-x-8 my-6 items-center">
						<img src="./images/gps.png" alt="" />
						<p>Alamat : Jl. Cempaka Putih 2 Tengah No. 27, Jakarta Pusat</p>
					</div>
					<div className="flex gap-x-8 my-6 items-center">
						<img src="./images/call.png" alt="" />
						<p>Telepon : (021) 425 6024</p>
					</div>
					<div className="flex gap-x-8 my-6 items-center">
						<img src="./images/email.png" alt="" />
						<p>Email : himpunan@hmif.org</p>
					</div>
				</div>
			</div>
			<div className="md:w-1/2 ">
				<div className="w-8/12 mx-auto">
					<p className="text-xl font-bold hidden md:inline">Hubungi Kami</p>
					<div className="flex gap-x-8 my-6 items-center">
						<img src="./images/instagram.png" alt="" />
						<img src="./images/twitter.png" alt="" />
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
