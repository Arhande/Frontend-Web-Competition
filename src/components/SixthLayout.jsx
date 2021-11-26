import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';

SwiperCore.use([Autoplay, Pagination, Navigation]);

function SixthLayout() {
	return (
		<div className="py-24 ">
			<div className="w-11/12 md:w-8/12 mx-auto flex items-center justify-center  text-xs md:text-base">
				<div className="w-full">
					<Swiper
						spaceBetween={30}
						centeredSlides={true}
						autoplay={{
							delay: 2500,
							disableOnInteraction: false,
						}}
						pagination={{
							clickable: true,
						}}
						className="mySwiper"
						loop={true}
					>
						<SwiperSlide>
							<div>
								<div className="flex items-center">
									<div className="w-1/2 text-xs md:text-base">
										<div>
											<p className="px-4 py-2 bg-blue-100 text-thirdtailwind font-bold md:text-sm w-1/2 md:w-3/12 rounded-lg">
												Events
											</p>
											<div className="my-4 md:my-12 flex flex-col md:gap-y-6">
												<h3 className="text-thirdtailwind font-bold text-sm md:text-xl">INFORMATIONALL 2021</h3>
												<p className="md:w-4/5 text-left">
													InformationALL merupakan event tahunan terbesar yang diselenggarakan oleh Himpunan Mahasiswa
													Teknik Informatika Universitas Muhammadiyah Jakarta. Seperti tahun-tahun sebelumnya.
													InformationALL 2021 ini akan ada rangkaian acara seru yang akan hadir.
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
									<div className="w-1/2 ml-4 md:ml-0">
										<img src="./images/carousel-2-1.png" alt="carousel" className="h-full" />
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div>
								<div className="flex items-center">
									<div className="w-1/2 text-xs md:text-base">
										<div>
											<p className="px-4 py-2 bg-blue-100 text-thirdtailwind font-bold md:text-sm w-1/2 md:w-3/12 rounded-lg">
												Events
											</p>
											<div className="my-4 md:my-12 flex flex-col md:gap-y-6">
												<h3 className="text-thirdtailwind font-bold text-sm md:text-xl">
													Pra LDKM HMIF BEM FT-UMJ 2021
												</h3>
												<p className="md:w-4/5 text-left">
													Adalah pengkaderan awal HMIF BEM FT-UMJ bagi angkatan 2020 dengan tema “Membentuk Karakter
													Kader HMIF BEM FT-UMJ Yang Berintegritas, Berjiwa Sosial Yang Berdasarkan Catur darma
													Perguruan Tinggi Muhammadiyah"
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
									<div className="w-1/2 ml-4 md:ml-0">
										<img src="./images/carousel-2-2.png" alt="carousel" className="h-full" />
									</div>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</div>
	);
}

export default SixthLayout;
