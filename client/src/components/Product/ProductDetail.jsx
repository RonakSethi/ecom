import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {getProductDetail} from '../../redux/actions/productActions';
import { addToCart } from "../../redux/actions/cartActions";
import {Box, Button, Grid, Typography} from '@material-ui/core';

const ProductDetail = () => {
	const {id} = useParams();
    const navigate = useNavigate();
	const dispatch = useDispatch();
	const {product} = useSelector((state) => state.getProductDetail);

    
    const addToBag = (id) => {
      dispatch(addToCart(id));
      navigate("/cart");
    };
  
    const buyNow = async () => {
    //   let response = await payByPaytm({
    //     amount: 500,
    //     email: "ronaksethi@yopmail.com",
    //   });
    //   let information = {
    //     action: "https://securegw-stage.paytm.in/order/process",
    //     params: response,
    //   };
     
    };

	useEffect(() => {
		console.log({product});
		console.log({id});
		if (product && id !== product._id) dispatch(getProductDetail(id));
	}, [dispatch, id]);

	return (
		<Box>
			
			{ product && Object.keys(product).length && (
				<Grid>
					<img src={product.detailUrl} alt='productImg' />
					<Grid item lg={4} md={4} sm={8} xs={12}>
						<Box>
							
							<br />
							<Button
								onClick={() => addToBag(product._id)}
								variant='contained'>
							
								Add to Cart
							</Button>
							
						</Box>
					</Grid>
					<Grid item lg={8} md={8} sm={8} xs={12}>
						<Typography>{product.title.longTitle}</Typography>

						<Typography>
							<span>₹{product.price.cost}</span>
						</Typography>
					
					</Grid>
				</Grid>
			)}
		</Box>
	);
};

export default ProductDetail;
