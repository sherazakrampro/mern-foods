import User from "../models/user.js";

const createCurrentUser = async (req, res) => {
  // check if the user exists
  // create the user if it doesn't exist
  // return the user object to the frontend
  try {
    const { auth0Id } = req.body;
    const existingUser = await User.findOne({ auth0Id });
    if (existingUser) {
      return res.status(200).send();
    }
    const newUser = await User.create(req.body);
    await newUser.save();
    res.status(201).json(newUser.toObject());
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error creating user" });
  }
};

export default { createCurrentUser };
