import User from "../models/user.model.js";

export const userSignup = async (req, res, next) => {
  try {
    const user = req.body;
    const isExists = await User.findOne({ username: req.body.username });
    if (isExists) {
      return res.status(401).json("Username already exists");
    }
    const newUser = User(user);
    await newUser.save();
    return res.status(200).json("User sign up successfully");
  } catch (error) {
    console.log("Error :", error);
  }
};
export const userLogin = async (req, res, next) => {
  try {
    const user = req.body;
    const isUser = await User.findOne({ username: req.body.username, password:req.body.password });
    if (!isUser) {
      return res.status(401).json("Invalid username password");
    }
    return res.status(200).json(`${req.body.username} login successfully`)
  } catch (error) {
    console.log("Error :", error);
  }
};
