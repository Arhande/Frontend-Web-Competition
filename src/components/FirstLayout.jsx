import React from 'react';

function FirstLayout() {
	return (
		<div style={{ backgroundImage: "url('./images/bg-1.png')" }} className="h-screen bg-cover bg-no-repeat">
			<div className="w-10/12 mx-auto relative">
				<nav className="flex justify-between py-4">
					<div className="flex items-center">
						<img src="./images/logo.png" alt="logo" className="w-20 h-20" />
						<p className="max-w-xs text-sm ml-4 font-semibold text-primary">
							HIMPUNAN MAHASISWA TEKNIK INFORMATIKA BADAN EKSEKUTIF MAHASISWA FAKULTAS TEKNIK UNIVERSITAS MUHAMMADIYAH
							JAKARTA
						</p>
					</div>
					<div className="flex gap-x-8 items-center text-lg text-primary">
						<p className="text-secondary">Home</p>
						<p>The Structure</p>
						<p>Programs</p>
						<p>Implemented</p>
						<p>Location</p>
					</div>
				</nav>
				<div className="flex justify-center item text-center mt-24 text-white font-bold text-5xl  leading-normal w-full">
					<p className="max-w-5xl">
						HIMPUNAN MAHASISWA TEKNIK INFORMATIKA BADAN EKSEKUTIF MAHASISWA FAKULTAS TEKNIK UNIVERSITAS MUHAMMADIYAH
						JAKARTA PERIODE 2021
					</p>
				</div>
			</div>
		</div>
	);
}

export default FirstLayout;
