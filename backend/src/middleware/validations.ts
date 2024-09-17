import { Request, Response, NextFunction } from "express";
import { body, validationResult } from "express-validator";

const handleValidationErrors = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

export const validateMyUserRequest = [
  body("name").isString().notEmpty().withMessage("Name must be a string"),
  body("addressLine1")
    .isString()
    .notEmpty()
    .withMessage("AddressLine1 must be a string"),
  body("city").isString().notEmpty().withMessage("City must be a string"),
  body("country").isString().notEmpty().withMessage("Country must be a string"),

  handleValidationErrors,
];

export const validateMyRestaurantRequest = [
  body("restaturantName").notEmpty().withMessage("Restaurant name is required"),
  body("city").notEmpty().withMessage("City is required"),
  body("country").notEmpty().withMessage("Country is required"),
  body("deliveryPrice")
    .isFloat({ min: 0 })
    .withMessage("Delivery price must be a positive number"),
  body("deliveryETA")
    .isInt({ min: 0 })
    .withMessage("Estimated delivery time must be a positive integer"),
  body("cuisines")
    .isArray()
    .withMessage("Cousines must be an array")
    .not()
    .isEmpty()
    .withMessage("Select at least one cuisine"),
  body("menuItems")
    .isArray()
    .withMessage("MenuItems must be an array")
    .not()
    .isEmpty()
    .withMessage("Add at least one menu item"),
  body("menuItems.*.name").notEmpty().withMessage("Item name is required"),
  body("menuItems.*.price")
    .isFloat({ min: 0 })
    .withMessage("Item price is required and must be a positive number"),

  handleValidationErrors,
];
