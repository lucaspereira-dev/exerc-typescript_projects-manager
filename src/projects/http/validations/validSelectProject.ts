import { celebrate, Joi, Segments } from 'celebrate'

export const validSelectProject = celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().token().required(),
  },
})
