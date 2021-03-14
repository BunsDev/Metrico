import React from 'react'
import { Navbar } from 'react-bootstrap';
// import { Logo } from '../../components/Logo/Logo'
import './Header.scss'

export const Header = (): JSX.Element => {
	return (
		<>
			<Navbar expand='md'>
				{/* <Navbar.Brand href='/'>
					<Logo />
				</Navbar.Brand> */}
			</Navbar>
		</>)
}