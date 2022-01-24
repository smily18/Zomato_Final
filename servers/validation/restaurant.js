import joi from "joi";

export const ValidateRestaurantCity = (resObj) => {
  const Schema = joi.object({
    city: joi.string().required()
  });

  return Schema.validateAsync(resObj);
};

export const ValidateRestaurantSearchString = (resObj) => {
  const Schema = joi.object({
    searchString: joi.string().required()
  });

  return Schema.validateAsync(resObj);
};
