import { Box, Button, Typography } from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router-dom";

const EmptyCart = () => {
const navigate = useNavigate()
  const addItem = () =>{
    navigate('/')
  }
  return (
    <Box >
      <Box >
        <Typography>Your cart is empty!</Typography>
        <Typography>Add items to it now.</Typography>
        <Button  variant="contained" onClick={()=>addItem()}>Shop Now</Button>
      </Box>
    </Box>
  );
};

export default EmptyCart;
