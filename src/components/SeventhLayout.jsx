import React, { useState } from 'react';

function SeventhLayout() {
	const dataProker = [
		{
			name: 'Informatic Bootcamp',
			image: './images/proker/informatic-bootcamp.png',
			terlaksana: false,
		},
		{
			name: 'Maintenance Content',
			image: './images/proker/maintenance-content.png',
			terlaksana: false,
		},
		{
			name: 'Tech Talk',
			image: './images/proker/tech-talk.png',
			terlaksana: false,
		},
		{
			name: 'Forum Diskusi',
			image: './images/proker/forum-diskusi.png',
			terlaksana: false,
		},
		{
			name: 'Kajian Umum',
			image: './images/proker/kajian-umum.png',
			terlaksana: false,
		},
		{
			name: 'Perawatan dan Piket',
			image: './images/proker/perawatan-piket.png',
			terlaksana: false,
		},
		{
			name: 'Inventaris Perpustakaan',
			image: './images/proker/inventaris-perpustakaan.png',
			terlaksana: false,
		},
		{
			name: 'Kerohanian Islam',
			image: './images/proker/kerohanian-islam.png',
			terlaksana: false,
		},
		{
			name: 'Informationall',
			image: './images/proker/informationall.png',
			terlaksana: true,
		},
		{
			name: 'Rencana Tindak Lanjut',
			image: './images/proker/rencana-tindak-lanjut.png',
			terlaksana: true,
		},
		{
			name: 'Pra LDKM',
			image: './images/proker/pra-ldkm.png',
			terlaksana: true,
		},
		{
			name: 'Sosial Masyarakat',
			image: './images/proker/sosial-masyarakat.png',
			terlaksana: true,
		},
	];
	const [prokers, SetProker] = useState(dataProker);
	const [terlaksana, SetTerlaksana] = useState(false);

	const onChange = check => {
		const arrayTmp = check ? dataProker.filter(proker => proker.terlaksana === check) : dataProker;
		SetTerlaksana(check);
		SetProker(arrayTmp);
	};

	return (
		<div className="py-24">
			<div className="w-10/12 mx-auto flex justify-center">
				<div className="flex px-16 py-8 gap-x-6 text-lg">
					<p
						onClick={() => onChange(false)}
						className={`${!terlaksana ? 'underline text-fourth' : 'cursor-pointer hover:text-fourth'}`}
					>
						Semua
					</p>
					<p>|</p>
					<p
						onClick={() => onChange(true)}
						className={`${terlaksana ? 'underline text-fourth' : 'cursor-pointer hover:text-fourth'}`}
					>
						Terlaksana
					</p>
				</div>
			</div>
			<div className="w-8/12 mx-auto grid justify-items-center items-center grid-cols-3 gap-10">
				{prokers.map(proker => (
					<div className="p-3 border-2 border-gray-200 rounded-xl shadow-lg">
						<img src={proker.image} alt="" />
						<p className="text-center my-4 font-black text-third text-lg uppercase">{proker.name}</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default SeventhLayout;
