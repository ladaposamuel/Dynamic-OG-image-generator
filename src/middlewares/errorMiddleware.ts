import { Request, Response, NextFunction } from "express";

function errorMiddleware(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error(error.message);
  res.status(500).send("An error occurred");
}

export default errorMiddleware;
