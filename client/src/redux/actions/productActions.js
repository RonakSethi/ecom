import * as actionTypes from "../constants/product.constant";
import base from "../../service/base";
import { CssBaseline } from "@material-ui/core";

export const getProducts = () => async (dispatch) => {
  try {
    console.log("Enter Here");
    const  data  = await CssBaseline.get(`/products`);
    dispatch({ type: actionTypes.GET_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actionTypes.GET_PRODUCT_FAIL, payload: error.response });
    console.log("Error while fetch product api:", error.response);
  }
};

export const getProductDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });
    const data = await base.get(`/product/${id}`);
    dispatch({ type: actionTypes.GET_PRODUCT_DETAIL_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCT_DETAIL_FAIL,
      payload: error.response,
    });
    console.log("Error while fetching product detail : ", error.response);
  }
};

export const removeProductDetails = () => (dispatch) => {
  dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_RESET });
};
