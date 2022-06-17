import { Request, Response } from "express";
import UserModel from "./../models/user.model";
import jwt from "jsonwebtoken";
import { signUpErrors, signInErrors } from "./../utils/errors.utils";

const maxAge = 3 * 21 * 60 * 60 * 1000;
const createToken = (id: string) => {
  return jwt.sign({ id }, process.env.TOKEN_SECRET, {
    expiresIn: maxAge,
  });
};

export const signUp = async (req: Request, res: Response) => {
  const { pseudo, email, password } = req.body;
  try {
    const user = await UserModel.create({ pseudo, email, password });
    res.status(201).send({ user: user._id });
  } catch (err) {
    const errors = signUpErrors(err);
    res.status(400).send({ errors });
  }
};
export const signIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.login(email, password);
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge });
    res.status(200).json({ user: user._id });
  } catch (err) {
    const errors = signInErrors(err);
    res.status(400).send({ errors });
  }
};

export const logout = (req: Request, res: Response) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.redirect("/");
};
