import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';

function EighthLayout() {
	const data = {
		center: {
			lat: -6.171986362462043,
			lng: 106.87262131134155,
		},
		zoom: 18,
	};
	return (
		<div className="mb-24" id="location">
			<div className="w-10/12 text-thirdtailwind mx-auto flex flex-col items-center gap-y-4 text-3xl">
				<div>
					<img src="./images/gps-besar.png" alt="" />
				</div>
				<div className="text-center  font-bold">
					<p>Fakultas Teknik</p>
					<p>Universitas Muhammadiyah Jakarta</p>
				</div>
				<div className="border-12 rounded-lg border-thirdtailwind">
					<div className="w-64 h-48 md:w-xxl md:h-xl ">
						<GoogleMapReact
							bootstrapURLKeys={{ key: 'AIzaSyCLAn8LJIyVQu-6T5jT4fLXi5YxhgbqjX4' }}
							defaultCenter={data.center}
							defaultZoom={data.zoom}
						></GoogleMapReact>
					</div>
				</div>
				<p className="mt-4 text-center text-lg md:text-3xl">
					Alamat : Jl. Cempaka Putih 2 Tengah No. 27, Jakarta Pusat
				</p>
			</div>
		</div>
	);
}

export default EighthLayout;
