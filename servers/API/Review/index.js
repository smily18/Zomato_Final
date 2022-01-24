import express from "express";

import {ReviewModal} from "../../database/allModels";

const Router = express.Router();

/*
Route        /
Des          Get review
Params       None
Access       Public
Method       GET
*/

Router.get("/", async(req,res)=> {
  try {
    const {city} = req.query;
    const restaurants = await RestaurantModel.find({city});
    return res.json({restaurants});
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
});
