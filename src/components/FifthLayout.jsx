import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

function FifthLayout() {
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
		<div className="w-full md:my-12" id="program">
			<div className="flex w-full h-full items-center justify-between text-3xl  md:text-6xl font-bold">
				<div className="w-full">
					<animated.h1 style={props}>
						<p className="text-thirdtailwind text-center text-2xl md:text-5xl lg:text-6xl font-bold">PROGRAM KERJA</p>
					</animated.h1>
				</div>
				<div className="w-full items-end flex justify-end">
					<img src="./images/bg-4.png" alt="" className="w-xxl" />
				</div>
			</div>
		</div>
	);
}

export default FifthLayout;
