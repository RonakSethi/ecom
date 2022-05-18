import React, {useEffect, useState} from 'react';
import {getProducts} from '../../service/product';
import {Box, Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';

const Products = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		getProducts().then((data) => {
			setProducts(data);
		});
	}, []);

	return (
		<>
			<Box style={{display: 'flex', justifyContent: 'center'}}>
				{products &&
					products.map((product, key) => (
						<Link key={key} to={`product/${product._id}`}>
							<Box style={{margin: '0px 20px'}}>
								<img
									style={{maxWidth: '100px'}}
									src={product.url}
									alt={key}
								/>
								<Typography>
									{product.title.shortTitle}
								</Typography>
							</Box>
						</Link>
					))}
			</Box>
		</>
	);
};

export default Products;
