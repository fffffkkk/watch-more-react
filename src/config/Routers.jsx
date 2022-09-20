import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Catalog from '../pages/Catalog'
import Detail from '../pages/Detail'
import Home from '../pages/Home'

const Routers = () => {
	return (
		<Routes>
			<Route 
				path='/:category/search/:keyword' 
				element={<Catalog />}
			/>
			<Route 
				path='/:category/:id' 
				element={<Detail />}

			/>
			<Route 
				path='/:category' 
				element={<Catalog />}

			/>
			<Route 
				path='/*'
				element={<Home />}
			/>
		</Routes>
	)
}

export default Routers
