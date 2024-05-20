import { body, validationResult } from "express-validator";

export const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

export const validateMyUserRequest = [
  body("name").isString().isEmpty().withMessage("Name must be a string"),
  body("addressLine1")
    .isString()
    .isEmpty()
    .withMessage("Address must be a string"),
  body("city").isString().isEmpty().withMessage("City must be a string"),
  body("country").isString().isEmpty().withMessage("Country must be a string"),
  handleValidationErrors,
];
