import React, { useState } from 'react';
import { Button, Navbar, Nav, NavDropdown, Form, Container, FormControl } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';

function FirstLayout() {
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
		<div style={{ backgroundImage: "url('./images/bg-1.png')" }} className="bg-cover bg-no-repeat md:h-screen">
			<div className="w-11/12 md:w-10/12 mx-auto relative">
				<Navbar expand="lg">
					<Container fluid>
						<Navbar.Brand href="#">
							<img src="./images/logo.png" alt="logo" className="w-20 h-20" />
						</Navbar.Brand>
						<p className="max-w-xs text-sm ml-4 text-white  font-semibold text-primary hidden lg:block">
							HIMPUNAN MAHASISWA TEKNIK INFORMATIKA BADAN EKSEKUTIF MAHASISWA FAKULTAS TEKNIK UNIVERSITAS MUHAMMADIYAH
							JAKARTA
						</p>
						<Navbar.Toggle aria-controls="navbarScroll" className="bg-white" />
						<Navbar.Collapse id="navbarScroll">
							<Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll></Nav>
							<Nav className="my-2 my-lg-0 d-flex" style={{ maxHeight: '100px' }} navbarScroll>
								<Nav.Link href="#action1" className="text-primarytailwind hover:text-secondarytailwind">
									Home
								</Nav.Link>
								<Nav.Link
									href=""
									className="text-primarytailwind hover:text-secondarytailwind"
									onClick={() => document.getElementById('the-structure').scrollIntoView()}
								>
									The Structure
								</Nav.Link>
								<Nav.Link
									href=""
									className="text-primarytailwind hover:text-secondarytailwind"
									onClick={() => document.getElementById('program').scrollIntoView()}
								>
									Programs
								</Nav.Link>
								<Nav.Link
									href=""
									className="text-primarytailwind hover:text-secondarytailwind"
									onClick={() => document.getElementById('implemented').scrollIntoView()}
								>
									Implemented
								</Nav.Link>
								<Nav.Link
									href=""
									className="text-primarytailwind hover:text-secondarytailwind"
									onClick={() => document.getElementById('location').scrollIntoView()}
								>
									Location
								</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
				<div className="flex justify-center items-center text-center pt-12 pb-64 md:pb-0 text-white w-full">
					<animated.h1 style={props}>
						<p className="max-w-5xl font-bold text-3xl leading-relaxed md:text-5xl md:leading-relaxed">
							HIMPUNAN MAHASISWA TEKNIK INFORMATIKA BADAN EKSEKUTIF MAHASISWA FAKULTAS TEKNIK UNIVERSITAS MUHAMMADIYAH
							JAKARTA PERIODE 2021
						</p>
					</animated.h1>
				</div>
			</div>
		</div>
	);
}

export default FirstLayout;
