import base from '../../service/base';
import * as actionTypes from '../constants/cart.constatnt';
export const addToCart = (id) => async (dispatch) => {
	try {
		const data = await base.get(`/product/${id}`);
		dispatch({type: actionTypes.ADD_TO_CART, payload: data});
	} catch (error) {
		dispatch({type: '', payload: error.response});
		console.log('Error while fetching cart api');
	}
};

export const removeFromCart = (id) => async (dispatch) => {
	dispatch({type: actionTypes.REMOVE_FROM_CART, payload: id});
};
