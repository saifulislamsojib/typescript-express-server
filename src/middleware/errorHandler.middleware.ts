import { ErrorRequestHandler, RequestHandler } from "express";

export const notFound: RequestHandler = (_req, res) => {
  return res.status(404).send("Requested URL is not found");
};

const errorHandler: ErrorRequestHandler = (err, _req, res, next) => {
  if (res.headersSent) {
    return next("There was a problem!");
  }
  return res.status(500).send(err.message || "Something went wrong!");
};

export default errorHandler;
