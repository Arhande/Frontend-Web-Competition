import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

function ThirdLayout() {
	const [flip, set] = useState(false);
	const props = useSpring({
		to: { opacity: 1 },
		from: { opacity: 0 },
		reset: true,
		reverse: flip,
		delay: 200,
		onRest: () => set(!flip),
	});
	return (
		<div className="bg-no-repeat bg-contain" id="the-structure">
			<div className="flex h-full items-center justify-between text-2xl md:text-4xl lg:text-6xl font-bold">
				<div className="w-full items-start flex justify-end">
					{' '}
					<img src="./images/bg-3.png" alt="" className="w-xxl" />
				</div>
				<div className="w-full">
					<animated.h1 style={props}>
						<p className="text-thirdtailwind text-center text-2xl md:text-5xl lg:text-6xl font-bold">STRUKTUR KEPENGURUSAN</p>
					</animated.h1>
				</div>
			</div>
		</div>
	);
}

export default ThirdLayout;
