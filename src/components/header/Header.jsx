import React, { useRef, useEffect } from 'react'
import { RiMovie2Line } from 'react-icons/ri'
import { Link, useLocation } from 'react-router-dom'

import './Header.scss'

const headerNav = [
	{
		display: 'Home',
		path: '/*'
	},
	{
		display: 'TV Series',
		path: '/tv'
	},
	{
		display: 'Movies',
		path: '/movies'
	}
]

const Header = () => {
	const { pathName } = useLocation()
	const headerRef = useRef(null)
	const active = headerNav.findIndex(e => e.path === pathName)

	useEffect(() => {
		const shrinkHeader = () => {
			if (document.documentElement.scrollTop > 100 || document.body.scrollTop > 100) {
				headerRef.current.classList.add('shrink')
			} else {
				headerRef.current.classList.remove('shrink')
			}
		}
		window.addEventListener('scroll', shrinkHeader )
		return () => {
			window.removeEventListener('scroll', shrinkHeader )
		}
	}, [])
	

	return (
		<div className='header' ref={headerRef}>
			<div className='header__inner container'>
				<div className="header__logo">
					<RiMovie2Line className='header__logo-img' size={`50`}/>
					<Link to={`/`} className='header__logo-txt'>WATCH MORE</Link>
				</div>
				<nav className="header__nav">
					<ul className="header__nav-list">
						{
							headerNav.map((e, index) => (
								<li
									key={index}
									className={`${index === active ? 'active' : ''}`}
								>
									<Link
										to={e.path}
									>
										{e.display}
									</Link>
								</li>
							))
						}
					</ul>
				</nav>
			</div>
		</div>
	)
}

export default Header
