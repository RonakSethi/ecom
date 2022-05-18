import { Card, Box, makeStyles, Typography, Button } from "@material-ui/core";
import React from "react";



const useStyles = makeStyles({
  cardContainer: {
    display: "flex",
    borderRadius: 0,
    borderTop: "#f0f0f0",
  },
  leftContainer: {
    margin: 20,
    display:'flex',
    flexDirection:'column'
  },
  rightContainer: {
    margin: 20,
  },
  smallText: {
    fontSize: 14,
  },
  greyTextColor: {
    color: "#878787",
  },
  price: {
    fontSize: 18,
    fontWeight: 600,
  },
  cartImg: {
    height: 110,
    width: 110,
  },
  removeBt: {
    marginTop: 20,
    fontSize: 16,
  },
});
const CartItem = ({ item, removeItemFromCart }) => {
  const classes = useStyles();
  return (
    <Card className={classes.cardContainer}>
      <Box className={classes.leftContainer}>
        <img
          className={classes.cartImg}
          src={item.url}
          alt="item.title.shortTitle"
        />
       
      </Box>
      <Box className={classes.rightContainer}>
        <Typography>{item.title.longTitle}</Typography>
     
        <Typography>
          <span className={classes.price}>₹{item.price.cost}</span>
     
        </Typography>
        <Button
          className={classes.removeBt}
          onClick={() => removeItemFromCart(item._id)}
        >
          Remove
        </Button>
      </Box>
    </Card>
  );
};

export default CartItem;
