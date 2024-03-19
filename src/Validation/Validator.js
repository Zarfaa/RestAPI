import Joi from 'joi';

const Validator = Joi.object({
  name: Joi.string().min(3).max(15).required(),
  ISBN : Joi.string().min(8).max(14).required(),
  price: Joi.number().min(300).max(5000).required(),
  availbilty : Joi.boolean().required()
}).options({ stripUnknown: true }); 

export default Validator;
