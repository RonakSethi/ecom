import { Button, Grid, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CreateOrder } from "../../service/checkout";
import TotalView from "../Cart/TotalView";

const signupInitialValues = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
};

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.addtocart);
  const [signup, setSignup] = useState(signupInitialValues);

  const userCheckout = async () => {
    const checkoutData = {
      userData: signup,
      cartItem: cartItems,
    };
    let response = await CreateOrder(checkoutData);

    if (!response) return;

    navigate("/orders");
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };
  return (
    <Grid style={{ display: "flex", justifyContent: "space-around" }}>
      <Grid
        item
        style={{ display: "flex", flexDirection: "column", width: "400px" }}
      >
        <TextField
          onChange={(e) => onInputChange(e)}
          name="firstname"
          label="Enter First Name"
        />
        <TextField
          onChange={(e) => onInputChange(e)}
          name="lastname"
          label="Enter Last Name"
        />

        <TextField
          onChange={(e) => onInputChange(e)}
          name="email"
          label="Enter Email"
        />

        <TextField
          onChange={(e) => onInputChange(e)}
          name="phone"
          label="Enter Mobile number"
        />
        <Button
          style={{ margin: "10px" }}
          variant="contained"
          color="primary"
          onClick={() => userCheckout()}
        >
          Checkout
        </Button>
      </Grid>
      <Grid item lg={3} md={3} sm={12} xs={12}>
        <TotalView cartItems={cartItems} />
      </Grid>
    </Grid>
  );
};

export default Checkout;
