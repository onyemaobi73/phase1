const express = require("express");
const UserModel = require("../Model/UserModel");

//get all users
const getAllUsers = async (req, res) => {
  try {
    const getUsers = await UserModel.find();
    res.status(200).json({
      message: "gotten all users",
      data:getUsers
    });
  } catch (error) {
    res.status(400).json({
      message: "all users not found",
    });
  }
};

//CREATE NEW USER

const NewUsers = async (req, res) => {
  try {
    const { name, email, password, phoneNum, isFemale } = req.body;
    const CreateUser = await UserModel.create({
      name,
      email,
      password,
      isFemale,
      phoneNum,
    });
    res.status(201).json({
      message: "Created a new user",
      data: CreateUser,
    });
  } catch (error) {
    res.status(400).json({
      message: "Couldn't create users",
    });
  }
};

// UpdateUsers

const UpdateUsers = async (req, res) => {
  try {
    const { name, email, password, phoneNum, isFemale }= req.body

    const updatingUser = await UserModel.FindByIdAndUpdate 
    (
      req.params.userId,
      {
        name,
        email,
        password,
        isFemale,
        phoneNum
      },
      {new:true}
    )
    res.status(201).json({
      message:"user updated successfully",
      data: updatingUser,
    })
  } catch (error) {
    res.status(400).json({
      message:"couldn,t update user",
      error
    })
  }
}

const deleteUser = async(req,res)=>{
  try {
    const gettingId = req.params.userId;

    const deleteUser = await UserModel.FindByIdAndDelete(gettingId)
    res.status(201).json({
      message:"User deleted successfully"
    })
  } catch (error) {
    res.status(400).json({
      message:"unable to delecte user",
      error
    })
  }
}

module.exports = { getAllUsers, NewUsers,deleteUser, UpdateUsers };
