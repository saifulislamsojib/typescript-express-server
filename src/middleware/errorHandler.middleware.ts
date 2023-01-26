import type { NextFunction, Request, Response } from "express";

export const notFound = (_req: Request, res: Response) => {
  res.status(404).send("Requested URL is not found");
};

const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  if (res.headersSent) {
    next("There was a problem!");
    return;
  }
  res.status(500).send(err.message || "Something went wrong!");
};

export default errorHandler;
