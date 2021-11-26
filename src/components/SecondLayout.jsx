import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

function SecondLayout() {
	return (
		<div className="py-24">
			<div className="w-10/12 mx-auto flex items-center justify-center">
				<div className="w-full md:w-10/12 mx-auto ">
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
						navigation={true}
						className="mySwiper"
						loop={true}
					>
						<SwiperSlide>
							<div>
								<img src="./images/gambar-1.png" alt="" className="w-full" />
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div>
								<img src="./images/gambar-2.png" alt="" className="w-full" />
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div>
								<img src="./images/gambar-3.png" alt="" className="w-full" />
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</div>
	);
}

export default SecondLayout;
