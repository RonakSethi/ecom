import { Box, Typography } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";


const TotalView = ({ cartItems }) => {
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    TotalAmount();
  }, [cartItems]);

  const TotalAmount = () => {
    let price = 0,
      discount = 0;

    cartItems.map((item) => {
      price += item.price.mrp;
      discount += item.price.mrp - item.price.cost;
    });
    setPrice(price);
    setDiscount(discount);
  };

  const deliveryPrice = 40
  return (
    <Box >
      <Box >
        <Typography>PRICE DETAILS</Typography>
      </Box>
      <Box >
        <Typography>
          Price ({cartItems.length} items)
          <span >₹ {price}</span>
        </Typography>
        <Typography>
          Discount <span >₹ {discount}</span>
        </Typography>
        <Typography>
          Delivery Charge <span >₹ {deliveryPrice}</span>
        </Typography>
        <Typography >
          Total Amount <span>₹ {price-discount + deliveryPrice} </span>
        </Typography>
        <Typography style ={{color:'green'}}>You will save ₹ {discount - deliveryPrice} on this order</Typography>
      </Box>
    </Box>
  );
};

export default TotalView;
