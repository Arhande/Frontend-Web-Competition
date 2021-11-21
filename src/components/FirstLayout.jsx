import React from 'react';
import { Button, Navbar, Nav, NavDropdown, Form, Container, FormControl } from 'react-bootstrap';

function FirstLayout() {
	return (
		<div style={{ backgroundImage: "url('./images/bg-1.png')" }} className="h-screen bg-cover bg-no-repeat">
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
								<Nav.Link href="#action1" className="text-secondarytailwind">
									Home
								</Nav.Link>
								<Nav.Link href="#action2" className="text-primarytailwind">
									The Structure
								</Nav.Link>
								<Nav.Link href="#action2" className="text-primarytailwind">
									Programs
								</Nav.Link>
								<Nav.Link href="#action2" className="text-primarytailwind">
									Implemented
								</Nav.Link>
								<Nav.Link href="#action2" className="text-primarytailwind">
									Location
								</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
				<div className="flex justify-center item text-center md:mt-24 text-white font-bold text-4xl leading-relaxed md:text-5xl md:leading-relaxed w-full">
					<p className="max-w-5xl">
						HIMPUNAN MAHASISWA TEKNIK INFORMATIKA BADAN EKSEKUTIF MAHASISWA FAKULTAS TEKNIK UNIVERSITAS MUHAMMADIYAH
						JAKARTA PERIODE 2021
					</p>
				</div>
			</div>
		</div>
	);
}

export default FirstLayout;
