import express, { Request, Response } from "express";

const rootRoute = express.Router();

rootRoute.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the server boss!");
});

export default rootRoute;
