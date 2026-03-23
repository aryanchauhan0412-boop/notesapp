const User =  require("../models/User.js");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const signup = async(req, res) => {
  try{
    const {name, email, password} = req.body;

    const existingUser = await User.findOne({email});

    if(existingUser){
      return res.status(400).json({message: "User already exists"})
    }

    const hashedPassword = await bcrypt.hash(password,10);

    const user = new User({
      name, email, password: hashedPassword
    })

    await user.save();

     const token = jwt.sign(
      { id: user._id },
      "secretKey",
      { expiresIn: "1d" }
    );

    res.status(201).json({
      token,
      user: {
        name: user.name,
        email: user.email
      }
    });

    res.status(201).json({message: "user created successfully"})

  }catch(err){
    res.status(500).json({err: err.message})
  }
}

const login = async(req, res) => {
  try{
    const {email, password} = req.body;

    const user = await User.findOne({email});

    if(!user){
      return res.status(400).json({message: "user not found"});
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch){
      return res.status(400).json({message: "Invaild password"})
    }

    const token = jwt.sign(
      {id: user._id},
      "secretKey",
      {expiresIn: "1d"}
    )

    res.json({
      token,
      user: {
        name: user.name,
        email: user.email
      }
    })
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  signup,
  login
}