import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import UserModel from "./../models/user.model";

export const checkUser = (req: Request, res: Response, next: () => void) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(
      token,
      process.env.TOKEN_SECRET,
      async (err: any, decodedToken: { id: any }) => {
        if (err) {
          res.locals.user = null;
          res.cookie("jwt", "", { maxAge: 1 });
          next();
        } else {
          let user = await UserModel.findById(decodedToken.id);
          res.locals.user = user;
          next();
        }
      }
    );
  } else {
    res.locals.user = null;
    next();
  }
};
export const requireAuth = (req: Request, res: Response, next: () => void) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(
      token,
      process.env.TOKEN_SECRET,
      async (err: any, decodedToken: { id: any }) => {
        if (err) {
          console.log(err);
        } else {
          console.log(decodedToken.id);
          next();
        }
      }
    );
  } else {
    console.log("No token");
  }
};
