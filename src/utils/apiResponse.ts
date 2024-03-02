import { Response } from "express";

const apiResponse = (res: Response, status: number, data: object): void => {
  res.status(status).json(data);
};

const successResponse = (res: Response, data: object): void => {
  apiResponse(res, 200, data);
};

const errorResponse = (
  res: Response,
  status: number,
  message: string
): void => {
  apiResponse(res, status, { message });
};

const notFoundResponse = (res: Response): void => {
  apiResponse(res, 404, { message: "Route not found" });
};

const serverErrorResponse = (res: Response): void => {
  apiResponse(res, 500, { message: "An error occurred" });
};

export {
  apiResponse,
  successResponse,
  errorResponse,
  notFoundResponse,
  serverErrorResponse,
};
