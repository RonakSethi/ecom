import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography, Button, Grid } from "@material-ui/core";
import { removeFromCart } from "../../redux/actions/cartActions";
import { useNavigate } from "react-router-dom";
//components
import CartItem from "../Cart/CartItem";
import EmptyCart from "../Cart/EmptyCart";
import TotalView from "../Cart/TotalView";

const Orders = () => {
  const { cartItems } = useSelector((state) => state.addtocart);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id));
  };
  const addItem = () => {
    navigate("/");
  };

  useEffect(() => {
    console.log({ cartItems });
  });
  const goToCheckout = async () => {
   navigate('/checkout')
  };
  return (
    <>
      {cartItems.length ? (
        <Grid container>
          <Grid lg={9} md={9} sm={12} xs={12} item>
            <Box>
              <Typography style={{ fontWeeight: 600, fontSize: 18 }}>
                My Cart ({cartItems.length})
              </Typography>
            </Box>
            {cartItems.map((item) => (
              <CartItem item={item} removeItemFromCart={removeItemFromCart} />
            ))}
            <Box>
              <Button onClick={() => goToCheckout()} variant="contained">
                Place Order
              </Button>
              <Button style={{margin:"10px"}} variant="contained" onClick={() => addItem()}>
                Shop More
              </Button>
            </Box>
          </Grid>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <TotalView cartItems={cartItems} />
          </Grid>
        </Grid>
      ) : (
        <Box>
          <EmptyCart />
        </Box>
      )}
    </>
  );
};

export default Orders;
