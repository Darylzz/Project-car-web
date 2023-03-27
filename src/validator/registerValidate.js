import Joi from "joi";

const registerSchema = Joi.object({
  email: Joi.string().email({ tlds: false }).message({
    "any.required": "Email is require",
    "string.email": "Must be valid Email",
    "string.empty": "Email is require"
  }),
  password: Joi.string().alphanum().min(6).required().trim().message({
    "string.empty": "Password is require",
    "string.alphanum": "Password must contain number or alphabet",
    "string.min": "Password must have at least 6"
  }),
  confirmPassword: Joi.string().valid(Joi.ref("password")).required().trim().message({
    "any.only": "Confirm password not match",
    "string.empty": "Confirm password is require"
  })
});

const validateRegister = input => {
  const { error } = registerSchema.validate(input, {
    abortEarly: false
  });
  if (error) {
    const result = error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
    return result;
  }
};

export default validateRegister;
