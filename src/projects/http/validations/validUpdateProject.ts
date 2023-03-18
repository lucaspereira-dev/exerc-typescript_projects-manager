import { celebrate, Joi, Segments } from 'celebrate'

export const validUpdateProject = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    owner: Joi.string().required(),
  }),
  [Segments.PARAMS]: {
    id: Joi.string().token().required(),
  },
})
