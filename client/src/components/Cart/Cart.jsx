import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography, Button, Grid } from "@material-ui/core";
import { removeFromCart } from "../../redux/actions/cartActions";
//components
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import TotalView from "./TotalView";


const Cart = () => {
  const { cartItems } = useSelector((state) => state.addtocart);
  const dispatch = useDispatch();

  const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  useEffect(() => {
    console.log({ cartItems });
  });
  const buyNow = async () => {
    // let response = await payByPaytm({
    //   amount: 500,
    //   email: "ronaksethi@yopmail.com",
    // });
    // let information = {
    //   action: "https://securegw-stage.paytm.in/order/process",
    //   params: response,
    // };
    // post(information);
  };
  return (
    <>
      {cartItems.length ? (
        <Grid container >
          <Grid lg={9} md={9} sm={12} xs={12} item >
            <Box >
              <Typography style={{ fontWeeight: 600, fontSize: 18 }}>
                My Cart ({cartItems.length})
              </Typography>
            </Box>
            {cartItems.map((item) => (
              <CartItem item={item} removeItemFromCart={removeItemFromCart} />
            ))}
            <Box >
              <Button
                onClick={() => buyNow()}
                
                variant="contained"
              >
                Place Order
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

export default Cart;
