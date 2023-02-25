import React from 'react';
import { Link } from 'react-router-dom';

// import miImagen from './../../../assets/images/achirvo.svg';

const PosHeader = () => {
	return (
		<header className="header">
			<div className="header__logo">
				{/* <img src={miImagen} alt="" /> */}
				<img src="/images/logo.svg" alt="" />
			</div>
			<div className="header__buscador">
				<img src="/images/search.svg" alt="" />
				<input
					type="text"
					className="header__input"
					placeholder="Busca un término"
				/>
			</div>
			<div className="header__usuario">
				<Link to="/admin/dashboard" className="btn btn-success">
					Ir a Dashboard
				</Link>
				<img src="https://cdn.shopify.com/s/files/1/0011/6005/2795/files/Lofi-2-1-1_2048x2048.jpg?v=1638369760" alt="" />
				<span>Mario Camna</span>
			</div>
		</header>
	);
};

export default PosHeader;
