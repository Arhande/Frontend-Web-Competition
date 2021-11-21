import React from 'react';
import Slider from 'react-slick';

function SixthLayout() {
	
	let settings = {
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		pauseOnHover: true,
		centerPadding: '200px',
		adaptiveHeight: true,
		arrows: false
	};
	return (
		<div className="py-24">
			<div className="w-8/12 mx-auto flex items-center justify-center  ">
				<div className="w-10/12 ml-8">
					<Slider {...settings}>
						<div>
							<div className="flex items-center">
								<div className="w-1/2">
									<div>
										<p className="px-4 py-2 bg-blue-100 text-third font-bold text-sm w-2/12 rounded-lg">Events</p>
										<div className="my-12 flex flex-col gap-y-6">
											<h3 className="text-third font-bold text-xl">INFORMATIONALL 2021</h3>
											<p className="w-4/5">
												InformationALL merupakan event tahunan terbesar yang diselenggarakan oleh Himpunan Mahasiswa
												Teknik Informatika Universitas Muhammadiyah Jakarta.
											</p>
											<p className="w-4/5">
												Seperti tahun-tahun sebelumnya. InformationALL 2021 ini akan ada rangkaian acara seru yang akan
												hadir.
											</p>
										</div>
										<div className="flex items-center">
											<p className="text-third font-bold">See More</p>{' '}
											<div className="">
												<img src="./images/arrow-right.png" alt="" className="ml-2 mt-0.5 w-3 h-3" />
											</div>
										</div>
									</div>
								</div>
								<div className="w-1/2">
									<img src="./images/carousel-2-1.png" alt="carousel" className="h-full" />
								</div>
							</div>
						</div>
						<div>
							<div className="flex items-center">
								<div className="w-1/2">
									<div>
										<p className="px-4 py-2 bg-blue-100 text-third font-bold text-sm w-2/12 rounded-lg">Events</p>
										<div className="my-12 flex flex-col gap-y-6">
											<h3 className="text-third font-bold text-xl">Pra LDKM HMIF BEM FT-UMJ 2021</h3>
											<p className="w-4/5">
												Adalah pengkaderan awal HMIF BEM FT-UMJ bagi angkatan 2020 dengan tema “Membentuk Karakter Kader
												HMIF BEM FT-UMJ Yang Berintegritas, Berjiwa Sosial Yang Berdasarkan Catur darma Perguruan Tinggi
												Muhammadiyah"
											</p>
										</div>
										<div className="flex items-center cursor-pointer">
											<p className="text-third font-bold">See More</p>{' '}
											<div className="">
												<img src="./images/arrow-right.png" alt="" className="ml-2 mt-0.5 w-3 h-3" />
											</div>
										</div>
									</div>
								</div>
								<div className="w-1/2">
									<img src="./images/carousel-2-2.png" alt="carousel" className="h-full" />
								</div>
							</div>
						</div>
					</Slider>
				</div>
			</div>
		</div>
	);
}

export default SixthLayout;
