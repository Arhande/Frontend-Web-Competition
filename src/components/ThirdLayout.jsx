import React from 'react';
import Slider from 'react-slick';

function ThirdLayout() {
	return (
		<div style={{ backgroundImage: "url('./images/bg-3.png')" }} className="h-72 bg-no-repeat bg-contain">
			<div className="w-10/12 mx-auto flex h-full items-center justify-between  text-6xl font-bold">
				<div></div>
				<p className="max-w-xl text-third">STRUKTUR KEPENGURUSAN</p>
			</div>
		</div>
	);
}

export default ThirdLayout;
