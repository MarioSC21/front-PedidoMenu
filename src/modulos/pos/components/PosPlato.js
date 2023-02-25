import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { agregarPlatoAction, eliminarPedidoPorMesaIdAction } from '../../../redux/actions/pedidoAction';

const PosPlato = ({ objPlato }) => {
	const dispatch = useDispatch();
	const { idMesaSeleccionada } = useSelector((state) => state.mesa);

	const handleAgregarPlato = () => {

		if (idMesaSeleccionada !== -1) {
			dispatch(agregarPlatoAction(objPlato, idMesaSeleccionada));
		}
		
	};

	const handleRestarPlato = () => {
		// eliminar el pedido de la mesa -> eliminarPedidoPorMesaIdAction
		if (idMesaSeleccionada !== -1) {
			dispatch(eliminarPedidoPorMesaIdAction(idMesaSeleccionada));
		}
	}
	return (
		<div className="carta__plato">
			<img src={objPlato.plato_img} alt="" />
			<h4 className="carta__titulo">{objPlato.plato_nom}</h4>
			<span className="carta__precio">S/ {objPlato.plato_pre}</span>
			<div className="carta__botones">
				<button className="boton boton-outline-primary boton-restar" onClick={handleRestarPlato}>-1</button>
				<button
					className="boton boton-outline-primary boton-sumar"
					onClick={handleAgregarPlato}
				>
					+1
				</button>
			</div>
		</div>
	);
};

export default PosPlato;
