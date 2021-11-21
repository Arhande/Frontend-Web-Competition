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
		arrows: false,
	};
	return (
		<div className="py-24">
			<div className=" md:w-8/12 mx-auto flex items-center justify-center  text-xs md:text-base">
				<div className="w-10/12 ml-8">
					<Slider {...settings}>
						<div>
							<div className="flex items-center">
								<div className="w-1/2 text-xs md:text-base">
									<div>
										<p className="px-4 py-2 bg-blue-100 text-thirdtailwind font-bold md:text-sm w-1/2 md:w-3/12 rounded-lg">
											Events
										</p>
										<div className="my-6 md:my-12 flex flex-col md:gap-y-6">
											<h3 className="text-thirdtailwind font-bold text-base md:text-xl">INFORMATIONALL 2021</h3>
											<p className="md:w-4/5">
												InformationALL merupakan event tahunan terbesar yang diselenggarakan oleh Himpunan Mahasiswa
												Teknik Informatika Universitas Muhammadiyah Jakarta.
											</p>
											<p className="md:w-4/5">
												Seperti tahun-tahun sebelumnya. InformationALL 2021 ini akan ada rangkaian acara seru yang akan
												hadir.
											</p>
										</div>
										<div className="flex items-center">
											<p className="text-thirdtailwind font-bold mb-0">See More</p>{' '}
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
										<p className="px-4 py-2 bg-blue-100 text-thirdtailwind font-bold md:text-sm w-1/2 md:w-3/12 rounded-lg">
											Events
										</p>
										<div className="my-12 flex flex-col gap-y-4 md:gap-y-6">
											<h3 className="text-thirdtailwind font-bold text-base md:text-xl">
												Pra LDKM HMIF BEM FT-UMJ 2021
											</h3>
											<p className="w-4/5">
												Adalah pengkaderan awal HMIF BEM FT-UMJ bagi angkatan 2020 dengan tema “Membentuk Karakter Kader
												HMIF BEM FT-UMJ Yang Berintegritas, Berjiwa Sosial Yang Berdasarkan Catur darma Perguruan Tinggi
												Muhammadiyah"
											</p>
										</div>
										<div className="flex items-center cursor-pointer">
											<p className="text-thirdtailwind font-bold mb-0">See More</p>{' '}
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
