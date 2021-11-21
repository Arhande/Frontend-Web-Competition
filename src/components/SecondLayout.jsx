import React from 'react';
import Slider from 'react-slick';

function SecondLayout() {
	function SampleNextArrow(props) {
		const { className, style, onClick } = props;
		return (
			<div
				className={`${className} rounded-full `}
				style={{ ...style, display: 'block', background: 'gray' }}
				onClick={onClick}
			/>
		);
	}

	function SamplePrevArrow(props) {
		const { className, style, onClick } = props;
		return (
			<div
				className={`${className} rounded-full`}
				style={{ ...style, display: 'block', background: 'gray' }}
				onClick={onClick}
			/>
		);
	}
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
			<div className="md:w-10/12 mx-auto flex items-center justify-center  ">
				<div className="w-full md:w-10/12 mx-auto ">
					<Slider {...settings}>
						<div>
							<img src="./images/gambar-1.png" alt="" className="w-full" />
						</div>
						<div>
							<img src="./images/gambar-2.png" alt="" className="w-full" />
						</div>
						<div>
							<img src="./images/gambar-3.png" alt="" className="w-full" />
						</div>
					</Slider>
				</div>
			</div>
		</div>
	);
}

export default SecondLayout;
