// @flow

import { Link } from 'gatsby'
import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

const styles = {
	active: {
		color: 'white',
		backgroundColor: '#4592cb',
	},
}

const Header = () => (
	<Navbar>
		<Navbar.Header>
			<Navbar.Brand>
				<Link to="/">Zach Azar</Link>
			</Navbar.Brand>
		</Navbar.Header>
		<Nav pullRight>
			<NavItem eventKey={1}>
				<Link activeStyle={styles.active} to="/">
					Résumé
				</Link>
			</NavItem>
			<NavItem eventKey={2}>
				<Link activeStyle={styles.active} to="/about">
					About
				</Link>
			</NavItem>
			<NavItem eventKey={3}>
				<Link activeStyle={styles.active} to="/contact">
					Contact
				</Link>
			</NavItem>
		</Nav>
	</Navbar>
)

export default Header
